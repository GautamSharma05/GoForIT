import "./AllHotel.css";
import HotelCard from "./hotel-cards/HotelCard";
import { allHotelsList } from "../../constants/StaticData";

function AllHotel() {
  return (
    <section className="all-hotels">
      <div className="covid-info">
        <p>
          Please check the travel advisory issued by the concerned state
          government/local authorities before booking, as some places may have
          COVID-19 related travel/lodging restrictions.
        </p>
      </div>
      <div className="hotel-found-div">
        <span className="heading-found">1000 GFIs Founds</span>
        <span className="price-found-per-night">Price per room per night</span>
      </div>

      <div className="list-wrapper-hotels">
        {allHotelsList.map((hotel) => {
          return <HotelCard items={hotel} key={hotel.id} />;
        })}
      </div>
    </section>
  );
}

export default AllHotel;
