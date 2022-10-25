import React from "react";
import { MdFoodBank, MdOutlineModeComment } from "react-icons/md";

function Description() {
  return (
    <main className="main">
      <image />
      <section>
        <nav>
          <a href="#description-overview">Overview</a>
          <a href="#description-photos">Photos</a>
          <a href="#description-menu">Menu</a>
          <a href="description-reviews">Reviews</a>
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
