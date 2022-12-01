
import BookForm from '../hotelbookcard/book_form';
import './hero.css';
function Hero() {
  return (
    <main>
      <div className="hero">
        <div className="hero-text-block">
          <div className="house-emoji">🏘️</div>
          <h1>Book unique home and experiences all over the INDIA.</h1>
          <div className="hero-btn-block">
            <button className="btn btn-pink">All Properties</button>
            <button className="btn btn-white">Restaurants</button>
          </div>
        </div>
        <div className="hero_book_form_block">
          <BookForm/>
        </div>
      </div>
      
    </main>
  );
}

export default Hero;
