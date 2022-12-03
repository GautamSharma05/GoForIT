import './HotelCard.css';

function HotelCard(items:any) {
  
  return (
    
    <div className="card">
    <div className="card-image">
      <div className="card-imge-1">
        <img
          src={items.items.imageUrl[0]}
          alt="hotel"
        />
      </div>
      <div className="card-imge-2">
        <img
          src={items.items.imageUrl[1]}
          alt="hotel"
        />
      </div>
    </div>

    <div className="hotel-card-title">
        <h3>{items.items.name}</h3>
        <span className="hotel-card-subtitle">
            {items.items.address}
        </span>
    </div>


    <div className="price-details">
        <span className='discount-price'>₹{items.items.discountPrice}</span>
        <s className='main-price'>₹ {items.items.mainPrice}</s>
        <span className='discount-percent'>{Math.round(((items.items.mainPrice - items.items.discountPrice)/items.items.mainPrice)*100)}% off</span>
    </div>
  </div>
  
  )
}

export default HotelCard