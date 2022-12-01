import "./book_form.css";

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
              <input type="text" placeholder="Check-In" />
            </div>
            <div className="col-md-6">
              <div id="checkOutInput" className="form-group">
                <input type="text" placeholder="Check-Out" />
              </div>
            </div>
            <div id="adultAgeInput" className="col-md-6">
              <input type="text" placeholder="Adult" />
            </div>
            <div id="childerenAgeInput" className="col-md-6">
              <input type="text" placeholder="Children" />
            </div>
            <div id="locationInput" className="col-md-6">
              <input type="text" placeholder="Location" />
            </div>
            <div id="phoneNumberInput" className="col-md-6">
              <input type="text" placeholder="Phone Number" />
            </div>
            <div id="bookinBtn" className="col-md-12">
              <button className="booking-btn btn-pink">Book Hotel Now</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default BookForm;
