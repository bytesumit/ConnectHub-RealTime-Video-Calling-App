import React from 'react'

const Hero = () => {
  return (
    <div
    className="d-flex flex-column justify-content-center align-items-center text-center"
    style={{
      background: "linear-gradient(to right, #0c4a7c, #00264d)",
      height: "300px",
      color: "#fff",
      position: "relative",
    }}
  >
    {/* Dotted Background */}
    <div
      style={{
        position: "absolute",
        right: "5%",
        top: "30%",
        display: "grid",
        gridTemplateColumns: "repeat(7, 15px)",
        gap: "15px",
      }}
    >
      {Array.from({ length: 35 }).map((_, index) => (
        <div
          key={index}
          style={{
            width: "7px",
            height: "7px",
            borderRadius: "50%",
            backgroundColor: "#2e6ca4",
            opacity: index % 2 === 0 ? 0.4 : 0.6,
          }}
        />
      ))}
    </div>

    {/* Heading */}
    <h2 className=" mb-4">Hello! How can we help?</h2>

    {/* Search Bar */}
    <div className="input-group mb-3" style={{ width: "50%", }}>
      <input
        type="text"
        className="form-control"
        placeholder=""
        aria-label="Search"
        aria-describedby="button-addon2"
        style={{ height: "50px", borderRadius: "8px 0 0 8px" }}
      />
      <button
        className="btn btn-primary"
        type="button"
        id="button-addon2"
        style={{
          backgroundColor: "#006CFF",
          borderRadius: "0 8px 8px 0",
          width: "60px",
        }}
      >
        <i className="bi bi-search"></i>
      </button>
    </div>

    {/* Common topics */}
    <p className="mt-2" style={{ color: "#fff", opacity: 0.9 }}>
      Common troubleshooting topics :{" "}
      <a href="#" className="text-white fw-semibold text-decoration-underline">
        meeting summary,
      </a>{" "}
      <a href="#" className="text-white fw-semibold text-decoration-underline">
        chat compose,
      </a>{" "}
      <a href="#" className="text-white fw-semibold text-decoration-underline">
        smart recording
      </a>
    </p>
  </div>
  )
}

export default Hero
