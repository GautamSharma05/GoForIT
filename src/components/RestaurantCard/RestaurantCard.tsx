import { Link } from 'react-router-dom';
import './RestaurantCard.css';

interface List {
  name: string;
  priceForOne: string;
  rating: number;
  tag: string;
  imageUrl: string;
}
interface ChildComponentProps {
  items: List[];
}

function RestaurantCard(props: ChildComponentProps) {
  return (
    <section className="all-restaurant">
      <div className="restau-container">
        <div className="restau-heading">
          <h2>
            All
            <span> Restaurants</span>
          </h2>
          <Link className="show-more-link" to="/restaurants">
            Show All({props.items.length})
          </Link>
        </div>
        <div className="restaurant-list-wrapper">
          {props.items.slice(0, 6).map((restaurant, index) => {
            return (
              <div key={index} className="restaurant-card">
                <img
                  className="restaurant-img"
                  src={restaurant.imageUrl}
                  alt="food"
                />
                <div className="restaurant-title-div">
                  <span className="restaurant-title">{restaurant.name}</span>
                  <span className="card-rating-stars">
                    ⭐{restaurant.rating}
                  </span>
                </div>
                <div className="restaurant-meta">
                  <span>{restaurant.tag}</span>
                  <span>Rs.{restaurant.priceForOne} for one</span>
                </div>
                <div className="solid-line"></div>
                <div className="card-footer">
                  <span>3500+ orders placed recently</span>
                  <img
                    src="https://b.zmtcdn.com/data/o2_assets/695598f38d29d0e5d3f8ffe57cfdb94c1613145422.png"
                    alt="Tag"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default RestaurantCard;
