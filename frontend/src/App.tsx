import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RestaurantDetails from "./pages/RestaurantDetails";
import LogedinPage from "./pages/LogedinPage";
import { SignInForm } from "./pages/SignInForm";
import { SignUpForm } from "./pages/SignUpForm";


function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route index element={<Navigate to="/homepage" />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/logedin" element={<LogedinPage />} />
        <Route path="/signin" element={<SignInForm />} />
        <Route path="/signup" element={<SignUpForm />} />

        <Route path="/restaurants" element={<RestaurantDetails/>} />
        <Route path="/restaurants/:id" element={<RestaurantDetails />} />
      </Routes>
    </div>
  );
}

export default App;
