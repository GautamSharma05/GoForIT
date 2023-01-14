import './Service_card.css';
function ServiceCard() {
  return (
    <section className="service-container">
      <div className="service-card">
        <div className="service-card-img img-1"></div>
        <h2>Map Direction</h2>
        <p>
          Even the all-powerful Pointing has no control about the blind texts it
          is an almost unorthographic.
        </p>
        <button aria-label="Read More" className="btn-service btn-pinks">
          Read More
        </button>
      </div>
      <div className="service-card">
        <div className="service-card-img img-2"></div>
        <h2>Accomodation Service</h2>
        <p>
          Even the all-powerful Pointing has no control about the blind texts it
          is an almost unorthographic.
        </p>
        <button aria-label="Read More" className="btn-service btn-pinks">
          Read More
        </button>
      </div>
      <div className="service-card">
        <div className="service-card-img img-3"></div>
        <h2>Great Experience</h2>
        <p>
          Even the all-powerful Pointing has no control about the blind texts it
          is an almost unorthographic.
        </p>
        <button aria-label="Read More" className="btn-service btn-pinks">
          Read More
        </button>
      </div>
    </section>
  );
}

export default ServiceCard;
