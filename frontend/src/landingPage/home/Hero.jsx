import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="bg-light text-center py-5 position-relative overflow-hidden">
      {/* Announcement Bar */}
      <div
        className="d-inline-flex align-items-center bg-white rounded-pill px-3 py-1 shadow-sm mb-3 animate__animated animate__fadeInDown"
        style={{ fontSize: '20px' }}
      >
        <span className="me-2 text-primary">
          <i className="bi bi-stars"></i>
        </span>
        ConnectHub launches new AI features for better collaboration
        <a href="#" className="ms-2 text-primary text-decoration-none fw-medium">
          Read more <i className="bi bi-chevron-right"></i>
        </a>
      </div>

      {/* Main Heading */}
      <h1
        className="fw-bold mb-3 animate__animated animate__fadeIn"
        style={{ fontSize: '3rem' }}
      >
        Work smarter with an <span className="text-primary">AI-first</span> platform
      </h1>
      <h2
        className="fw-bold mb-4 animate__animated animate__fadeIn"
        style={{ fontSize: '2rem', color: '#1c1c1c' }}
      >
        for better human connection
      </h2>

      {/* Buttons */}
      <div className="d-flex justify-content-center mb-5 animate__animated animate__fadeInUp">
        <Link to="/Pricing">
        <button
          className="btn btn-primary rounded-pill px-4 me-3"
          style={{ fontSize: '20px', transition: 'all 0.3s' }}
          onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
          onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
        >
          See pricing
        </button>
        </Link>
        <a
          href="#"
          className="btn btn-link text-decoration-none fw-medium"
          style={{
            fontSize: '20px',
            color: '#007bff',
            transition: 'color 0.3s',
          }}
          onMouseEnter={(e) => (e.target.style.color = '#0056b3')}
          onMouseLeave={(e) => (e.target.style.color = '#007bff')}
        >
          Contact sales <i className="bi bi-chevron-right"></i>
        </a>
      </div>

      {/* Icons Row */}
      <div className="d-flex justify-content-center align-items-center flex-wrap animate__animated animate__fadeInUp">
        {[
          'bi-camera-video',
          'bi-chat-dots',
          'bi-calendar',
          'bi-people',
          'bi-phone',
          'bi-gear',
          'bi-layers',
          'bi-star-fill',
          'bi-card-list',
          'bi-bar-chart',
        ].map((icon, index) => (
          <div
            key={index}
            className="mx-3 my-2"
            style={{
              opacity: 0.6,
              transition: 'transform 0.3s, color 0.3s, opacity 0.3s',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.3)';
              e.currentTarget.style.opacity = '1';
              e.currentTarget.style.color = '#0d6efd';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.opacity = '0.6';
              e.currentTarget.style.color = '';
            }}
          >
            <i className={`${icon} fs-4`}></i>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
