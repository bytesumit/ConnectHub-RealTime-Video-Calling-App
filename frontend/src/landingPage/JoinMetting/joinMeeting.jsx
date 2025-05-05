import React, { useState } from "react";
import { TextField} from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const JoinMeeting = () => {

  const [meeting,setMeeting] = useState("");
  const link = `/meeting/${meeting}`;
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="text-center">
        {/* Heading */}
        <h2 className="fw-bold mb-4">Join Meeting</h2>

        {/* Input Field */}
        <div className="mb-3">
          <label className="form-label text-muted small">
            Meeting ID or Personal Link Name
          </label>
         <TextField
          label="Meeting"
          variant="outlined"
          fullWidth
          value={meeting}
          onChange={(e) => setMeeting(e.target.value)}
         
         />
        </div>

        {/* Terms */}
        <p className="text-muted small">
          By clicking "Join", you agree to our{" "}
          <a href="#" className="text-primary text-decoration-none">
            Terms of Services
          </a>{" "}
          and{" "}
          <a href="#" className="text-primary text-decoration-none">
            Privacy Statement
          </a>
        </p>

        {/* Join Button */}
        <Link to={link}>
        <button
          className="btn btn-primary w-100 rounded-3 py-2"
          
        >
          Join
        </button>
        </Link>

        {/* Bottom Link */}
        <p className="mt-4">
          <a href="#" className="text-primary text-decoration-none small">
            Join a meeting from an H.323/SIP room system
          </a>
        </p>
      </div>
    </div>
  );
};

export default JoinMeeting;
