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
<<<<<<< HEAD
        <Route path="/restaurant" element={<RestaurantDetails restaurants={restaurants}/>} />
=======
        <Route path="/restaurant/:id" element={<RestaurantDetails />} />
>>>>>>> ea3a93791cd6e09cc9b1d862ccee093c75cd35f9
      </Routes>
    </div>
  );
}

export default App;
