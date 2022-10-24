import { PrismaClient } from "@prisma/client";
import express from "express";
import cors from "cors";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import env from "dotenv";

env.config();
const JWT_SECRET = process.env.JWT_SECRET!;

const prisma = new PrismaClient();
const app = express();
app.use(cors());
app.use(express.json());

const port = 3005;

function generateToken(id: number) {
  const token = jwt.sign({ id }, JWT_SECRET, { expiresIn: "1h" });
  return token;
}

function verifyToken(token: string) {
  const decoded = jwt.verify(token, JWT_SECRET);
  // @ts-ignore
  return decoded.id;
}

async function getCurrentUser(token: string) {
  const decoded = verifyToken(token);

  const user = await prisma.user.findUnique({
    where: { id: decoded },
  });

  return user;
}

//This endpoint will sign up the user
app.post("/sign-up", async (req, res) => {
  try {
    const { email, password, name } = req.body;

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists!" });
    } else {
      const hashedPassword = bcrypt.hashSync(password);

      const user = await prisma.user.create({
        data: {
          email,
          password: hashedPassword,
          name,
        },
      });

      const token = generateToken(user.id);

      res.send({ user, token });
    }
  } catch (error) {
    // @ts-ignore
    res.status(500).send({ error: error.message });
  }
});

//This endpoint will sign in the user
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(400).send({ error: "Invalid credentials." });
    }

    const valid = bcrypt.compareSync(password, user.password);

    if (!valid) {
      return res.status(400).json({ error: "Invalid credentials." });
    }

    const token = generateToken(user.id);

    res.send({ user, token });
  } catch (error) {
    // @ts-ignore
    res.status(500).send({ error: error.message });
  }
});

//This endpoint will get/validate the current user
app.get("/validate", async (req, res) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(400).send({ error: "You are not signed in!" });
    } else {
      const user = await getCurrentUser(token);
      if (user) {
        res.send({ user, token: generateToken(user.id) });
      } else {
        res.status(400).send({ error: "Please try to sign in again!" });
      }
    }
  } catch (error) {
    // @ts-ignore
    res.status(500).send({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Listening to http://localhost:${port}`);
});
