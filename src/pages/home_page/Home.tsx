import { useEffect, useState } from 'react';
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard';
import { restaurantsList } from '../../constants/StaticData';
import Hero from './hero/hero';
import BookForm from './hotelbookcard/book_form';
import ServiceCard from './service_card/Service_Card';
function Home() {
  const [matches, setMatches] = useState(
    window.matchMedia('(max-width: 746px)').matches,
  );
  useEffect(() => {
    window
      .matchMedia('(max-width: 746px)')
      .addEventListener('change', e => setMatches(e.matches));
  }, []);
  return (
    <div>
      <Hero />
      {matches ? <BookForm /> : null}
      <ServiceCard />
      <RestaurantCard items={restaurantsList} />
    </div>
  );
}

export default Home;
