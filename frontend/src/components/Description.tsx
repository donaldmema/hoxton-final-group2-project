import React from "react";
import { MdFoodBank, MdOutlineModeComment } from "react-icons/md";
import restaurantImage from "../assets/restaurant-photo.jpg";

function Description() {
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
              <h1></h1>
              <div>
                <div>
                  <MdOutlineModeComment />
                  <span></span>
                </div>
                <div>
                  <MdFoodBank />
                  <span></span>
                </div>
              </div>
              <div>
                <h3></h3>
                <p></p>
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
