import { useState } from "react";
import { Link } from "react-router-dom";
import stars from "../assets/stars.png";

export function Restaurants(){
    const [restaurants, setRestaurants] = useState([
        {
            id:1,
            name: "Burger King",
            address: "1234 Main St",
            city: "New York",
            description: "Burgers and fries",
            profileImg: "https://picsum.photos/200",
            rating: 4.5,
            cuisineInfo: "American",
            priceInfo: "$",
            workHours: "9am - 9pm", },
            {
                id:2,
                name: "Burger King",
                address: "1234 Main St",
                city: "New York",
                description: "Burgers and fries",
                profileImg: "https://picsum.photos/200",
                rating: 4.5,
                cuisineInfo: "American",
                priceInfo: "$",
                workHours: "9am - 9pm", },
                {
                    id:2,
                    name: "Burger King",
                    address: "1234 Main St",
                    city: "New York",
                    description: "Burgers and fries",
                    profileImg: "https://picsum.photos/200",
                    rating: 4.5,
                    cuisineInfo: "American",
                    priceInfo: "$",
                    workHours: "9am - 9pm", },
                    {
                        id:2,
                        name: "Burger King",
                        address: "1234 Main St",
                        city: "New York",
                        description: "Burgers and fries",
                        profileImg: "https://picsum.photos/200",
                        rating: 4.5,
                        cuisineInfo: "American",
                        priceInfo: "$",
                        workHours: "9am - 9pm", }, {
                            id:2,
                            name: "Burger King",
                            address: "1234 Main St",
                            city: "New York",
                            description: "Burgers and fries",
                            profileImg: "https://picsum.photos/200",
                            rating: 4.5,
                            cuisineInfo: "American",
                            priceInfo: "$",
                            workHours: "9am - 9pm", }
    ]);
    return(
        <>
        <h2 className="restaurant-h2">Popular restaurants </h2>
        <div className="restaurants-feed">
          {restaurants.map((restaurant) => (
              <>
              <Link to={`/restaurant/${restaurants}`}>
              <div className="restaurant-feed-item">
                <img src={restaurant.profileImg} width="250px" height="135px"/>
                <div className="restaurant-content">
                <h3>{restaurant.name}</h3>
                <div className="rating">
                <img src={stars} width="100px" height="20px"/> <h5>{restaurant.rating} reviews</h5>
                </div>
                <p>{restaurant.cuisineInfo} • {restaurant.priceInfo} • {restaurant.city}</p>
                <button>Find next available</button>
                </div>
                </div>
                </Link>
              </>
            ))}
            </div>
        </>
    )
}