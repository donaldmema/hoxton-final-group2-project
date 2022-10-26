import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import stars from "../assets/stars.png";
import { Restaurant } from "../utils/types";
import { FindNextAvailable } from "./FindNextAvailable";

export function Restaurants() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [seeAvailableDates, setSeeAvailableDates] = useState(false);
  useEffect(() => {
    fetch("http://localhost:3005/restaurants")
      .then((rsp) => rsp.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
        } else {
          setRestaurants(data);
        }
      });
  }, []);

  return (
    <>
      <h2 className="restaurant-h2">Popular restaurants </h2>
      <div className="restaurants-feed">
        {restaurants.map((restaurant) => (
          <>
            {/* <Link to={`/restaurant-detail/${restaurants.id}`}> */}
            <Link to={`/restaurants/${restaurant.id}`}>
              <div className="restaurant-feed-item">
                <img src={restaurant.profileImg} width="250px" height="135px" />
                <div className="restaurant-content">
                  <h3>{restaurant.name}</h3>
                  <div className="rating">
                    <img src={stars} width="100px" height="20px" />{" "}
                    <h5>{restaurant.reviews.length} reviews</h5>
                  </div>
                  <p>
                    {restaurant.cuisineInfo} • {restaurant.priceInfo} •{" "}
                    {restaurant.city}
                  </p>
                  <button
                    onClick={() => {
                      setSeeAvailableDates(true);
                    }}
                  >
                    Find next availble
                  </button>
                </div>
              </div>
            </Link>
            {seeAvailableDates ? (
              <FindNextAvailable setSeeAvailableDates={setSeeAvailableDates} />
            ) : null}
          </>
        ))}
      </div>
    </>
  );
}
