import React, { useState } from "react";

const brands = [
  { id: 1, src: "sevicenow.svg", alt: "Logo 1" },
  { id: 2, src: "img 2.svg", alt: "Logo 2" },
  { id: 3, src: "img3.svg", alt: "Logo 3" },
  { id: 4, src: "img4.svg", alt: "Logo 4" },
  { id: 5, src: "img5.svg", alt: "Logo 5" },
  { id: 6, src: "img6.svg", alt: "Logo 6" },
  { id: 7, src: "img7.svg", alt: "Logo 7" },
];

const TrustedCompanies = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleItems = 5;

  const handleNext = () => {
    if (currentIndex + visibleItems < brands.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="container-fluid py-5 p-4" style={{ background: "#f4f8fe" }}>
      <div className="container d-flex justify-content-between align-items-center">
        {/* Left Text Section */}
        <div>
          <h3 className="fw-bold mb-3" style={{ color: "#0a0a23" }}>
            Trusted by businesses,<br /> loved by people
          </h3>
          <a href="#!" className="text-primary text-decoration-none fw-medium">
            Read their stories <i className="bi bi-arrow-right-short"></i>
          </a>
        </div>

        {/* Logos Section */}
        <div className="d-flex align-items-center position-relative w-75">
          <div
            className="d-flex transition-all"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`,
              transition: "transform 0.5s ease",
              width: `${(brands.length / visibleItems) * 100}%`,
            }}
          >
            {brands.map((brand) => (
              <div
                key={brand.id}
                className="flex-shrink-0 d-flex justify-content-center align-items-center"
                style={{ width: `${100 / brands.length}%`, padding: "0 20px" }}
              >
                <img src={brand.src} alt={brand.alt} className="img-fluid" />
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="position-absolute d-flex" style={{ right: 0 }}>
            <button
              className="btn btn-light rounded-circle shadow-sm me-2"
              onClick={handlePrev}
              disabled={currentIndex === 0}
            >
              <i className="bi bi-arrow-left text-primary"></i>
            </button>
            <button
              className="btn btn-primary rounded-circle shadow-sm"
              onClick={handleNext}
              disabled={currentIndex + visibleItems >= brands.length}
            >
              <i className="bi bi-arrow-right text-white"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedCompanies;
