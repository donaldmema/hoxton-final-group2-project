import { useNavigate } from "react-router-dom";
import * as API from "../api";
import { Bussines } from "../components/Bussines";
import Header from "../components/Header";
import "./SignInForm.css";

type Props = {
  signIn: (data: { user: any; token: string }) => void;
};

export function SignInForm({ signIn }: Props) {
  const navigate = useNavigate();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const email = form.email.value;
    const password = form.password.value;

    if (email && password) {
      API.login({ email, password }).then((data) => {
        if (data.error) {
          alert(data.error);
        } else {
          //sign them in
          signIn(data);
          navigate("/select-community");
        }
      });
    }
  }

  return (
    <>
      <Bussines />
      <Header />
      <div className="fun-section">
        <h2>We will continue to make this journey unforgettable for you!</h2>
      </div>
      <div className="signin-form">
        <h2>Welcome back!</h2>
        <p>Please log in</p>
        <div className="form-container">
          <form
            className="form-section"
            onSubmit={(event) => handleSubmit(event)}
          >
            <input type="email" placeholder="Email" name="email" required />
            <input
              type="password"
              placeholder="Password"
              name="password"
              required
            />
            <button className="sign-in-btn" type="submit">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </>
  );
}