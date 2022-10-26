import React from "react";
import { MdFoodBank, MdOutlineModeComment, MdReviews } from "react-icons/md";
import restaurantImage from "../assets/restaurant-photo.jpg";
import { Restaurant, User } from "../utils/types";
import { AiFillStar } from "react-icons/ai";
import { Markup } from "interweave";

type Props = {
  restaurant: Restaurant;
  currentUser: User;
};

function Description({ restaurant, currentUser }: Props) {
  const [readMore, setReadMore] = React.useState(true);
  const [users, setUsers] = React.useState<User[]>([]);

  React.useEffect(() => {
    fetch(`http://localhost:3005/users`)
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <main className="main">
      <div className="main-image"></div>
      <div className="main-content">
        <aside className="left-side">
          <nav className="navigation-links">
            <div>
              <a href="#description-overview">Overview</a>
            </div>
            <div>
              <a href="#description-photos">Photos</a>
            </div>
            <div>
              <a href="#description-reviews">Reviews</a>
            </div>
          </nav>
          <section className="description">
            <div id="description-overview">
              <h1>{restaurant.name}</h1>
              <div className="icons-container">
                <div className="icons-row ">
                  <MdOutlineModeComment />
                  <span>
                    {restaurant.reviews.length}{" "}
                    {restaurant.reviews.length === 1 ? "Review" : "Reviews"}
                  </span>
                </div>
                <div className="icons-row">
                  <MdFoodBank />
                  <span>{restaurant.cuisineInfo}</span>
                </div>
              </div>
              <div className="description-text">
                <p className="show-more-p">
                  {readMore
                    ? restaurant.description.slice(0, 20)
                    : restaurant.description}{" "}
                  {readMore ? "..." : null}{" "}
                  <span
                    onClick={() => {
                      setReadMore(!readMore);
                    }}
                    className="show-more"
                  >
                    {readMore ? "(read more)" : "(show less)"}
                  </span>
                </p>
              </div>
            </div>
            <div id="description-photos">
              <h2>
                {restaurant.images.length}{" "}
                {restaurant.images.length === 1 ? "Photo" : "Photos"}
              </h2>
              <div className="description-photos-map">
                {restaurant.images.map((image) => (
                  <img
                    key={image.id}
                    src={image.url}
                    alt="restaurant"
                    width={400}
                  />
                ))}
              </div>
            </div>
            <div id="description-reviews">
              <h2>
                What {restaurant.reviews.length}{" "}
                {restaurant.reviews.length === 1
                  ? "person is saying"
                  : "people are saying"}
              </h2>
              <div className="reviews">
                {users.map((user) =>
                  restaurant.reviews
                    .filter((review) => user.id === review.userId)
                    .map((review) => (
                      <div key={review.id} className="review">
                        <div className="review-user">
                          <div className="review-user-img">
                            {user.name.charAt(0).toUpperCase()}
                          </div>
                          <p>{user.name}</p>
                          <div className="review-user-reviews">
                            <MdOutlineModeComment />
                            <p>{user.reviews.length}</p>
                          </div>
                        </div>
                        <div className="review-rating">
                          <p>
                            {Array(review.rating).fill(
                              <AiFillStar className="review-stars" />
                            )}
                          </p>
                          <p>{review.review}</p>
                        </div>
                      </div>
                    ))
                )}
              </div>
            </div>
          </section>
        </aside>
        <aside className="right-side">
          <div className="right-side-container">
            <form className="right-side-reservation">
              <h2>Make a reservation</h2>
              <label>
                Party Size{" "}
                <select name="party-size" id="party-size">
                  {Array(20)
                    .fill(0)
                    .map((_, index) => (
                      <option key={index} value={index + 1}>
                        {index + 1} {index === 0 ? "person" : "people"}
                      </option>
                    ))}
                </select>
              </label>
              <div className="date-and-time">
                <label>
                  Date <input type="date" name="date" />
                </label>
                <label>
                  Time <input type="time" name="time" />
                </label>
              </div>
              <button type="submit">Find a time</button>
            </form>
            {restaurant.iFrame ? (
              <div className="right-side-map">
                <div
                  className="the-map"
                  dangerouslySetInnerHTML={{ __html: restaurant.iFrame }}
                />
              </div>
            ) : null}
          </div>
        </aside>
      </div>
    </main>
  );
}

export default Description;
