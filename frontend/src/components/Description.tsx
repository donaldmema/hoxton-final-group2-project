import React from "react";
import { MdFoodBank, MdOutlineModeComment } from "react-icons/md";

function Description() {
  return (
    <div>
      <image />
      <main>
        <nav>
          <button>Overview</button>
          <button>Photos</button>
          <button>Menu</button>
          <button>Reviews</button>
        </nav>
        <section>
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
        </section>
      </main>
    </div>
  );
}

export default Description;
