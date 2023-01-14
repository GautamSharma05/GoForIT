import { allHotelsList } from '../../constants/StaticData';
import './AllHotel.css';
import HotelCard from './hotel-cards/HotelCard';

function AllHotel() {
  return (
    <section className="all-hotels-section">
      <div className="covid-info">
        <p>
          Please check the travel advisory issued by the concerned state
          government/local authorities before booking, as some places may have
          COVID-19 related travel/lodging restrictions.
        </p>
      </div>
      <div className="all-hotels-div">
        <div className="filter-div">
          <div className="filter-heading-div">
            <span className="filter-heading">Filters</span>
            <span className="clear-all-button">Clear All</span>
          </div>
        </div>
        <div className="divider"></div>

        <div className="desktop-div-hotels-card">
          <div className="hotel-found-div">
            <span className="heading-found">
              {allHotelsList.length} GFIs Founds
            </span>
            <span className="price-found-per-night">
              Price per room per night
            </span>
          </div>
          <div className="list-wrapper-hotels">
            {allHotelsList.map(hotel => {
              return <HotelCard items={hotel} key={hotel.id} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AllHotel;
