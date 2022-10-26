import "./App.css";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import * as API from "./api";
import HomePage from "./pages/HomePage";
import RestaurantDetails from "./pages/RestaurantDetails";
import LogedinPage from "./pages/LogedinPage";
import { SignInForm } from "./pages/SignInForm";
import { SignUpForm } from "./pages/SignUpForm";
import { PageNotFound } from "./pages/PageNotFound";
import { useState, useEffect } from "react";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  function signIn(data: { user: any; token: string }) {
    setCurrentUser(data.user);
    localStorage.token = data.token;
    if (data.user.role.toLowerCase() === "admin") navigate("/admin");
    else navigate("/logedin");
  }

  function signOut() {
    setCurrentUser(null);
    navigate("/homepage");
    localStorage.removeItem("token");
  }

  function getDate(sqlDate: any) {
    let dateString = sqlDate.toString();

    return dateString;
  }

  useEffect(() => {
    if (localStorage.token) {
      API.validate().then((data) => {
        if (data.error) {
          alert(data.error);
          localStorage.removeItem("token");
        } else {
          signIn(data);
          navigate("/select-community");
        }
      });
    }
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route index element={<Navigate to="/homepage" />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/logedin" element={<LogedinPage />} />
        <Route path="/signin" element={<SignInForm signIn={signIn} />} />
        <Route path="/signup" element={<SignUpForm signIn={signIn} />} />
        <Route path="/restaurants" element={<RestaurantDetails />} />
        <Route path="/restaurants/:id" element={<RestaurantDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
