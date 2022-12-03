import { useEffect, useState } from 'react'
import AllRestaurantHomePage from './all_restaurants_home_page_cmp/AllRestaurantHomePage';
import Hero from './hero/hero'
import BookForm from './hotelbookcard/book_form'
import ServiceCard from './service_card/Service_Card'
import { restaurantsList } from "../../constants/StaticData";
import { hotelsList } from "../../constants/StaticData";
function Home() {
  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 746px)").matches
  );
  useEffect(() => {
    window
    .matchMedia("(max-width: 746px)")
    .addEventListener('change', e => setMatches( e.matches ));
  }, []);
  return (
    <div>
        <Hero/>
        {matches ? <BookForm/> : null}
        <ServiceCard/>
        <AllRestaurantHomePage items={restaurantsList}/>
        <AllRestaurantHomePage items={hotelsList} />
    </div>
  )
}

export default Home