
import React, {useState } from "react";
import { TextField, Checkbox, Button, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { FaGoogle, FaApple, FaFacebook } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import { Link,useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useAuth } from "../../AuthContext";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const[username , setUsername] = useState("")
  const [password, setPassword] = useState("");
  const [staySignedIn, setStaySignedIn] = useState(false);
  const {setUser} = useAuth()
  const navigate = useNavigate();

// Handle Error
  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });

    // Handle Sucess

    const handleSuccess = (msg) =>
      toast.success(msg, {
        position: "bottom-right",
      });

      // Handle Submit

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const { data } = await axios.post(
            "http://localhost:3000/signup",
            {
              email : email,
              username : username,
              password : password
            },
            { withCredentials: true }
          );
          const { success, message } = data;
          if (success) {
            setUser(data.user);
            handleSuccess(message);
            
            setTimeout(() => {
              navigate(`/Profile/${data.user._id}`);
            }, 1000);
          } else {
            handleError(message);
          }
        } catch (error) {
          console.log(error);
        }
        setEmail("");
        setUsername("");
        setPassword("")
      };
    

  return (
    <div className="container-fluid min-vh-100 d-flex flex-column align-items-center bg-light py-5">

      {/* Main Content */}
      <div className="container d-flex flex-wrap bg-white shadow rounded overflow-hidden">
        {/* Left Event Banner */}
        <div className="d-none d-md-flex col-md-6 bg-primary text-white text-center flex-column justify-content-center p-5">
          <h2 className="fw-bold mb-3">ConnectHub</h2>
          <p className="lead mb-4">Make Your Call Special with Us</p>
          <button className="btn btn-success rounded-pill px-4 py-2 fw-bold">Sign Up Today</button>
        </div>

        {/* Right Sign-Up Form */}
        <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center p-4">
          <h2 className="fw-bold mb-4">Sign Up</h2>

          <div className="w-100 mb-3">
            <TextField
              label="User Name"
              variant="outlined"
              fullWidth
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="w-100 mb-3">
            <TextField
              label="Email Address"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="w-100 mb-3 position-relative">
            <TextField
              label="Password"
              variant="outlined"
              fullWidth
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <IconButton
              className="position-absolute top-0 end-0 mt-2 me-2"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </div>

          <div className="w-100 d-flex justify-content-between align-items-center mb-3">
            <div className="form-check m-0">
              <Checkbox
                checked={staySignedIn}
                onChange={() => setStaySignedIn(!staySignedIn)}
              />
              <label className="form-check-label">Stay signed in</label>
            </div>
            <a href="#" className="text-primary text-decoration-none">Forgot Password?</a>
          </div>

          <Button
            variant="contained"
            color="primary"
            fullWidth
            className="mb-3"
            onClick={handleSubmit}
          >
            {loading ? "Loading..." : "Sign Up"}
          </Button>

        

          <p className="text-secondary small text-center mb-3">
            By signing in, I agree to the <a href="#" className="text-primary text-decoration-none">Privacy Policy</a> and <a href="#" className="text-primary text-decoration-none">Terms of Service</a>.
          </p>

          {/* Social Sign-In Buttons */}
          <div className="d-flex justify-content-center gap-3 mb-3">
            <IconButton className="bg-light border rounded-circle">
              <MdSecurity size={20} />
            </IconButton>
            <IconButton className="bg-light border rounded-circle">
              <FaApple size={20} />
            </IconButton>
            <IconButton className="bg-light border rounded-circle">
              <FaGoogle size={20} />
            </IconButton>
            <IconButton className="bg-light border rounded-circle">
              <FaFacebook size={20} />
            </IconButton>
          </div>

          <ToastContainer />
          <p className="text-secondary small">
          Already Have an Account?{" "}
            <Link to="/SignIn" className="text-primary text-decoration-none">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
}


