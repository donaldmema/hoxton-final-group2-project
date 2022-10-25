import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RestaurantDetails from "./pages/RestaurantDetails";
import LogedinPage from "./pages/LogedinPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Navigate to="/homepage" />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/restaurant/:id" element={<RestaurantDetails />} />
        <Route path="/logedin" element={<LogedinPage />} />
      </Routes>
    </div>
  );
}

export default App;
