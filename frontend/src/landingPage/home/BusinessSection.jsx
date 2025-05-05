import React from 'react';

const BusinessSection = () => {
  return (
    <div className="container my-5">
      <div className="row bg-primary rounded-4 p-4 text-white" style={{ background: 'linear-gradient(135deg, #0048ff, #0036c1)' }}>
        {/* Left Side */}
        <div className="col-md-4 d-flex flex-column justify-content-center align-items-start">
          <h2 className="fw-bold">ConnectHub works</h2>
          <div className="bg-white text-dark rounded-3 p-2 my-2">
            <div className="bg-info text-white fw-semibold rounded-2 px-2 py-1 mb-1">
              for any business
            </div>
            <div className="fw-medium px-2">
              in any industry
            </div>
          </div>
        </div>

        {/* Right Side Boxes */}
        <div className="col-md-8">
          <div className="row g-3">
            {[
              { icon: '💻', label: 'IT Professionals' },
              { icon: '🏢', label: 'Facilities' },
              { icon: '👍', label: 'Customer Experience' },
              { icon: '📢', label: 'Marketing' },
              { icon: '📈', label: 'Sales and Revenue' },
              { icon: '🐖', label: 'Small Business' }
            ].map((item, index) => (
              <div className="col-6" key={index}>
                <div className="bg-primary rounded-3 p-3 d-flex align-items-center text-white" style={{ background: 'linear-gradient(135deg, #1a73e8, #0048ff)' }}>
                  <span className="me-2 fs-5">{item.icon}</span>
                  <span className="fw-medium">{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSection;
