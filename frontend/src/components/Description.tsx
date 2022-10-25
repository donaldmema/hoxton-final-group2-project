import React from "react";
import { MdFoodBank, MdOutlineModeComment } from "react-icons/md";
import restaurantImage from "../assets/restaurant-photo.jpg";
import { Restaurant } from "../utils/types";

type Props = {
    restaurant: Restaurant
}

function Description( {restaurant}: Props) {
    const [readMore, setReadMore] = React.useState(false);
    
    function readmore(){
        setReadMore(!readMore);
    }

  return (
    <main className="main">
      <div className="main-image"></div>
        <aside className="left-side">
          <nav className="navigation-links">
            <div><a href="#description-overview">Overview</a></div>
            <div><a href="#description-photos">Photos</a></div>
            <div><a href="description-reviews">Reviews</a></div>
          </nav>
          <section className="description">
            <div id="description-overview">
              <h1>{restaurant.name}</h1>
              <div className="icons-container">
                <div className="icons-row ">
                  <MdOutlineModeComment />
                  <span>{restaurant.reviews.length} Reviews</span>
                </div>
                <div className="icons-row">
                  <MdFoodBank />
                  <span>{restaurant.cuisineInfo} Italian</span>
                </div>
              </div>
              <div className="description-text">
                <p onClick={() => {
                    setReadMore(!readMore);
                }}>{readMore ? restaurant.description.slice(0, 50) : restaurant.description}</p>
              </div>
            </div>
            <div id="description-photos">
              <h2>{restaurant.images.length} Photos</h2>
              <div>
                {restaurant.images.map((image) => (
                    <img key={image.id} src={image.url} alt="restaurant" />
                ))}
              </div>
            </div>
            <div id="description-reviews">
              <h2>What {restaurant.reviews.length} people are saying</h2>
            </div>
          </section>
        </aside>
      <aside className="right-side"></aside>
    </main>
  );
}

export default Description;
