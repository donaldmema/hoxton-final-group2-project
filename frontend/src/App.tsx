import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RestaurantDetails from "./pages/RestaurantDetails";
import { Restaurant } from "./utils/types";

function App() {
  const [restaurants, setRestaurants] = useState([
    {
      id: 1,
      name: "Burger King",
      address: "1234 Main St",
      city: "New York",
      description: "Burgers and fries",
      profileImg: "https://picsum.photos/200",
      rating: 4.5,
      cuisineInfo: "American",
      priceInfo: "$",
      workHours: "9am - 9pm",
    },
    {
      id: 2,
      name: "Burger King",
      address: "1234 Main St",
      city: "New York",
      description: "Burgers and fries",
      profileImg: "https://picsum.photos/200",
      rating: 4.5,
      cuisineInfo: "American",
      priceInfo: "$",
      workHours: "9am - 9pm",
    },
    {
      id: 2,
      name: "Burger King",
      address: "1234 Main St",
      city: "New York",
      description: "Burgers and fries",
      profileImg: "https://picsum.photos/200",
      rating: 4.5,
      cuisineInfo: "American",
      priceInfo: "$",
      workHours: "9am - 9pm",
    },
    {
      id: 2,
      name: "Burger King",
      address: "1234 Main St",
      city: "New York",
      description: "Burgers and fries",
      profileImg: "https://picsum.photos/200",
      rating: 4.5,
      cuisineInfo: "American",
      priceInfo: "$",
      workHours: "9am - 9pm",
    },
    {
      id: 2,
      name: "Burger King",
      address: "1234 Main St",
      city: "New York",
      description: "Burgers and fries",
      profileImg: "https://picsum.photos/200",
      rating: 4.5,
      cuisineInfo: "American",
      priceInfo: "$",
      workHours: "9am - 9pm",
    },
  ]);


  return (
    <div className="App">
      <Routes>
        <Route index element={<Navigate to="/homepage" />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/restaurant" element={<RestaurantDetails />} />
      </Routes>
    </div>
  );
}

export default App;
