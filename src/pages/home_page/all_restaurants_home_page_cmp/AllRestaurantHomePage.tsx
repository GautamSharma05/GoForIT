import { Link } from 'react-router-dom';
import './AllRestaurantHomePage.css';

interface List {
  name: string;
  priceFOrOne: string;
  rating: number;
  imageUrl: string;
}
interface ChildComponentProps {
  items: List[];
}

function AllRestaurantHomePage(props: ChildComponentProps) {
  return (
    <section className="all-restaurant">
      <div className="restau-container">
        <div className="restau-heading">
          <h2>
            All
            <span>
              {' '}
              {props.items[0].name === 'Hotel Crown Plaza'
                ? `Hotels`
                : `Restaurants`}
            </span>
          </h2>
          <Link
            className="show-more-link"
            to={
              props.items[0].name === 'Hotel Crown Plaza' ? '/hotel-rooms' : '#'
            }
          >
            Show All(328)
          </Link>
        </div>
        <div className="restaurant-list-wrapper">
          {props.items.map((restaurant, index) => {
            return (
              <div key={index} className="restaurant-card">
                <img src={restaurant.imageUrl} alt="food" />
                <div className="restaurant-title-div">
                  <span className="restaurant-title">{restaurant.name}</span>
                  <span className="card-rating-stars">
                    ⭐{restaurant.rating}
                  </span>
                </div>
                <div className="restaurant-meta">
                  <span>Tea Bevarages, North Ind...</span>
                  <span>Rs.{restaurant.priceFOrOne} for one</span>
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

export default AllRestaurantHomePage;
