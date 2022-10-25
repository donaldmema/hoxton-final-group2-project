import React from "react";
import { MdFoodBank, MdOutlineModeComment } from "react-icons/md";
import restaurantImage from "../assets/restaurant-photo.jpg";

function Description() {
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
              <h1>OTTO RoofTop</h1>
              <div className="icons-container">
                <div className="icons-row ">
                  <MdOutlineModeComment />
                  <span>{} Reviews</span>
                </div>
                <div className="icons-row">
                  <MdFoodBank />
                  <span>{} Italian</span>
                </div>
              </div>
              <div className="description-text">
                <p>{readMore ? }</p>
              </div>
            </div>
            <div id="description-photos">
              <h2>{} Photos</h2>
              <img />
            </div>
            <div id="description-reviews">
              <h2>What {} people are saying</h2>
            </div>
          </section>
        </aside>
      <aside className="right-side"></aside>
    </main>
  );
}

export default Description;
