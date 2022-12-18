import {
  faPlug,
  faSquareParking,
  faWifi,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './HotelCard.css';

function HotelCard(items: any) {
  return (
    <div className="card">
      <div className="desktop-card">
        <div className="card-image">
          <div className="card-image-1">
            <img src={items.items.imageUrl[0]} alt="hotel" />
          </div>
          <div className="desktop-multiple-images">
            <div className="card-image-2">
              <img src={items.items.imageUrl[1]} alt="hotel" />
            </div>
            <div className="card-image-2">
              <img src={items.items.imageUrl[1]} alt="hotel" />
            </div>
            <div className="card-image-2">
              <img src={items.items.imageUrl[1]} alt="hotel" />
            </div>
            <div className="card-image-2">
              <img src={items.items.imageUrl[1]} alt="hotel" />
            </div>
          </div>
        </div>
        <div className="desktop-card-design">
          <div className="hotel-card-title">
            <h3>{items.items.name}</h3>
            <span className="hotel-card-subtitle">{items.items.address}</span>
          </div>

          <div className="hotel-card-rating">
            <span className="hotel-card-rating-stars">
              {items.items.rating} ⭐
            </span>
            <span>(1564 ratings)</span>
            <span>. Good</span>
          </div>

          <div className="amenityWrapper">
            <div className="amenityWrapper__amenity">
              <span>
                <FontAwesomeIcon icon={faSquareParking} />
              </span>
              <span>Parking Facility</span>
            </div>
            <div className="amenityWrapper__amenity">
              <span>
                <FontAwesomeIcon icon={faPlug} />
              </span>
              <span>Power Backup</span>
            </div>
            <div className="amenityWrapper__amenity">
              <span>
                <FontAwesomeIcon icon={faWifi} />
              </span>
              <span>Free Wifi</span>
            </div>
          </div>

          <div className="desktop-price-button-design">
            <div className="price-details">
              <span className="discount-price">
                ₹{items.items.discountPrice}
              </span>
              <s className="main-price">₹ {items.items.mainPrice}</s>
              <span className="discount-percent">
                {Math.round(
                  ((items.items.mainPrice - items.items.discountPrice) /
                    items.items.mainPrice) *
                    100,
                )}
                % off
              </span>
            </div>
            <div className="button-card-desktop">
              <button className="button-card-view-details">View Details</button>
              <button className="button-card-book-now">Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelCard;
