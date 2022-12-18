import './book_form.css';

function BookForm() {
  return (
    <section className="hotel">
      <div className="hotel-booking-card">
        <form action="#" className="hotelForm">
          <h3>Book Your Hotel</h3>
          <div className="grid-row">
            <div id="fullNameInput" className="col-md-12">
              <input id="fullname" type="text" placeholder="Full Name" />
            </div>
            <div id="checkInInput" className="col-md-6">
              <input type="date" placeholder="Check-In" />
            </div>
            <div className="col-md-6">
              <div id="checkOutInput" className="form-group">
                <input type="date" placeholder="Check-Out" />
              </div>
            </div>
            <div id="adultAgeInput" className="col-md-6">
              <input type="text" placeholder="Adult" />
              <select name="adult" id="adult">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div id="childerenAgeInput" className="col-md-6">
              <input type="text" placeholder="Children" />
              <select name="adult" id="adult">
                <option value="1">0</option>
                <option value="2">1</option>
                <option value="3">2</option>
                <option value="4">3</option>
                <option value="5">4</option>
              </select>
            </div>
            <div id="locationInput" className="col-md-6">
              <input type="text" placeholder="Location" />
            </div>
            <div id="phoneNumberInput" className="col-md-6">
              <input type="text" placeholder="Phone Number" />
            </div>
            <div id="bookinBtn" className="col-md-12">
              <button
                aria-label="Book Hotel Now"
                className="booking-btn btn-pink"
              >
                Book Hotel Now
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default BookForm;
