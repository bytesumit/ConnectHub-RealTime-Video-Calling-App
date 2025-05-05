import React from 'react'

const Card = ({Title , Des , image}) => {
  return (
    <div
    className="card text-center shadow-lg border-0 mt-5 mr-4"
    style={{
      width: '25rem',
      borderRadius: '20px',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-10px)';
      e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    }}
  >
    <div className="d-flex justify-content-center mt-3">
      <img
        src={image}
        alt="Logo"
        height="80"
        width="80"
        className="shadow p-2"
        style={{
          objectFit: 'cover',
          borderRadius: '50%',
          transition: 'transform 0.3s ease',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      />
    </div>
    <div className="card-body">
      <h5 className="card-title fw-bold">{Title}</h5>
      <p className="card-text text-muted">
       {Des}
      </p>
      <a
        href="#"
        className="btn btn-primary"
        style={{ transition: 'background-color 0.3s ease, transform 0.3s ease' }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#0056b3';
          e.currentTarget.style.transform = 'scale(1.05)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '';
          e.currentTarget.style.transform = 'scale(1)';
        }}
      >
        Go somewhere
      </a>
    </div>
  </div>
  
)
  
}

export default Card
