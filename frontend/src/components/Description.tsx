import React from "react";
import { MdFoodBank, MdOutlineModeComment, MdReviews } from "react-icons/md";
import restaurantImage from "../assets/restaurant-photo.jpg";
import { Restaurant, User } from "../utils/types";
import {AiFillStar} from 'react-icons/ai'

type Props = {
    restaurant: Restaurant
}

function Description( {restaurant}: Props) {
    const [readMore, setReadMore] = React.useState(true);
    const [users, setUsers] = React.useState<User[]>([]);

    React.useEffect(() => {
        fetch(`http://localhost:3005/users`)
            .then((response) => response.json())
            .then((data) => setUsers(data));
    }, [])

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
                  <span>{restaurant.reviews.length} {restaurant.reviews.length === 1 ? "Review" : "Reviews"}</span>
                </div>
                <div className="icons-row">
                  <MdFoodBank />
                  <span>{restaurant.cuisineInfo}</span>
                </div>
              </div>
              <div className="description-text">
                <p className="show-more-p">{readMore ? restaurant.description.slice(0, 20) : restaurant.description} {readMore ? "..." : null} <span onClick={() => {setReadMore(!readMore)}} className="show-more">{readMore ? "(read more)" : "(show less)"}</span>
                </p>
              </div>
            </div>
            <div id="description-photos">
              <h2>{restaurant.images.length} {restaurant.images.length === 1 ? "Photo" : "Photos"}</h2>
              <div className="description-photos-map">
                {restaurant.images.map((image) => (
                    <img key={image.id} src={image.url} alt="restaurant" width={400} />
                ))}
              </div>
            </div>
            <div id="description-reviews">
              <h2>What {restaurant.reviews.length} {restaurant.reviews.length === 1 ? "person is saying" : "people are saying"}</h2>
              <div>
                {restaurant.reviews.map((review) => (
                  <div key={review.id} className="review">
                    <div className="review-user">
                      {users.map((user) => (
                        <>
                          <div>{user.id === review.userId ? user.name.charAt(0) : null}</div>
                          <p>{user.name}</p>
                          <p>{user.reviews.length} {user.reviews.length === 1 ? "review" : "reviews"}</p>
                        </>
                      ))}
                    </div>
                    <div>
                      <div>
                          {Array(review.rating).fill(<AiFillStar className="review-stars" />)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </aside>
      <aside className="right-side"></aside>
    </main>
  );
}

export default Description;
