import { useState } from "react";
import { Link } from "react-router-dom";
import { Restaurant } from "../Types";

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
        <div className="restaurants-feed">
          {restaurants.map((restaurant) => (
              <>
              {/* <Link to={`/restaurant-detail/${restaurants.id}`}> */}
              <div className="restaurant-feed-item">
                <img src={restaurant.profileImg} width="250px"/>
                <h3><u>{restaurant.name}</u></h3>
                <h5>⭐⭐⭐⭐⭐ {restaurant.rating} reviews</h5>
                <p>{restaurant.cuisineInfo} • {restaurant.priceInfo} • {restaurant.city}</p>
                <button>Find next availble</button>
                </div>
                {/* </Link> */}
              </>
            ))}
            </div>
        </>
    )
}