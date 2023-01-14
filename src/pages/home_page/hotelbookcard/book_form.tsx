import './book_form.css';

function BookForm() {
  return (
    <section className="hotel">
      <form action="#" className="hotelForm">
        <h3>Book Your Hotel</h3>
        <div className="grid-row">
          <div className="form-input-div fullNameInput">
            <input className="form-input" type="text" placeholder="Full Name" />
          </div>
          <div className="form-input-div">
            <input className="form-input" type="text" placeholder="Check-In" />
          </div>
          <div className="form-input-div">
            <input className="form-input" type="text" placeholder="Check-Out" />
          </div>
          <div className="form-input-div">
            <select className="form-input" name="adult" id="adult">
              <option value="adult">Adults</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div className="form-input-div">
            <select className="form-input" name="children" id="children">
              <option value="children">Childrens</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <div className="form-input-div">
            <input className="form-input" type="text" placeholder="Location" />
          </div>
          <div className="form-input-div">
            <input
              className="form-input"
              type="text"
              placeholder="Phone Number"
            />
          </div>
          <div id="bookinBtn">
            <button
              aria-label="Book Hotel Now"
              className="booking-btn btn-pink"
            >
              Book Hotel Now
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default BookForm;
