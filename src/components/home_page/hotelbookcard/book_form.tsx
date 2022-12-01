import "./book_form.css";

function BookForm() {
  return (
    <section className="hotel">
      <div className="hotel-booking-card">
        <div className="row">
          <div className="col-lg-4">
            <form action="#" className="hotelForm">
              <h3>Book Your Hotel</h3>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <input type="text" placeholder="Full Name" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input type="text" placeholder="Check-In" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input type="text" placeholder="Check-Out" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input type="text" placeholder="Adult" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input type="text" placeholder="Children" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <button className="btn btn-pink">Book Hotel Now</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookForm;
