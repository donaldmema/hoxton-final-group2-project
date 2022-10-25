import React from "react";
import { MdFoodBank, MdOutlineModeComment } from "react-icons/md";
import restaurantImage from "../assets/restaurant-photo.jpg";

function Description() {
  return (
    <main className="main">
      <img src={restaurantImage} className="restaurantImage"/>
      <section className="left-side">
        <nav>
          <a href="#description-overview"><button>Overview</button></a>
          <a href="#description-photos"><button>Photos</button></a>
          <a href="#description-menu"><button>Menu</button></a>
          <a href="description-reviews"><button>Reviews</button></a>
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

        </div>
        <div id="description-menu">

        </div>
        <div id="description-reviews">

        </div>
        </section>
      </section>
    </main>
  )
}

export default Description;
