import { Link } from "react-router-dom";
import "./AllRestaurantHomePage.css";

interface List{
  name:string
  priceFOrOne:string,
  rating:number,
  imageUrl:string
}
interface ChildComponentProps {
  items: List[]
}

function  AllRestaurantHomePage (props:ChildComponentProps) {
  return (
    <section className="all-restaurant">
      <div className="restau-container">
        <div className="restau-heading">
          <h2>
            All<span> {props.items[0].name == 'Hotel Crown Plaza' ?`Hotels`:`Restaurants`}</span>
          </h2>
          <Link className="show-more-link" to="">
            Show All(328)
          </Link>
        </div>
        <div className="restaurant-list-wrapper">
          {props.items.map((restaurant) => {
            return (
              <div className="restaurant-card">
                <img src={restaurant.imageUrl} alt="food" />
                <div className="restaurant-meta">
                  <span>Rs. {restaurant.priceFOrOne} for one</span>
                  <span>⭐{restaurant.rating}</span>
                </div>
                <div className="restaurant-title">
                  <Link className="title-link" to="#">
                    {restaurant.name}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default AllRestaurantHomePage;
