import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RestaurantDetails from "./pages/RestaurantDetails";
import LogedinPage from "./pages/LogedinPage";
import { SignInForm } from "./pages/SignInForm";
import { SignUpForm } from "./pages/SignUpForm";
import { SelectRolePage } from "./pages/SelectRolePage";

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route index element={<Navigate to="/homepage" />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/logedin" element={<LogedinPage />} />
        <Route path="/signin" element={<SignInForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/select-role" element={<SelectRolePage />} />
        <Route path="/restaurants" element={<RestaurantDetails/>} />
        <Route path="/restaurants/:id" element={<RestaurantDetails />} />
      </Routes>
    </div>
  );
}

export default App;
