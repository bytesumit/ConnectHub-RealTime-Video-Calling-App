// import { useState } from "react";
// import axios from "axios";
// import { TextField, Checkbox, Button, IconButton } from "@mui/material";
// import { Visibility, VisibilityOff } from "@mui/icons-material";
// import { FaGoogle, FaApple, FaFacebook } from "react-icons/fa";
// import { MdSecurity } from "react-icons/md";
// import { Link,useNavigate,useLocation } from 'react-router-dom';
// import { ToastContainer, toast } from "react-toastify";
// import { useAuth } from "../../AuthContext";

// export default function SignIn() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [email, setEmail] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [password, setPassword] = useState("");
//   const [staySignedIn, setStaySignedIn] = useState(false);
//   const [user,setUser] = useState({});
//   const { setUser } = useAuth();
//   const navigate = useNavigate();
//   const location = useLocation();
//   const from = location.state?.from?.pathname || '/';

// // Handle Error
//   const handleError = (err) =>
//     toast.error(err, {
//       position: "bottom-left",
//     });

//     // Handle Sucess

//     const handleSuccess = (msg) =>
//       toast.success(msg, {
//         position: "bottom-right",
//       });

//       // Handle Submit

//       const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//           const { data } = await axios.post(
//             "http://localhost:3000/login",
//             {
//               email : email,
//               password : password
//             },
//             { withCredentials: true }
//           );
//           setUser(data.user);
//           const { success, message } = data;
//           if (success) {
//             handleSuccess(message);
//             setTimeout(() => {
//               navigate(`/Profile/${data.user._id}`);
//             }, 1000);
//           } else {
//             handleError(message);
//           }
//         } catch (error) {
//           console.log(error);
//         }
//         setEmail("");
//         setPassword("")
//       };

//   return (
//     <div className="container-fluid min-vh-100 d-flex flex-column align-items-center bg-light py-5">

//       {/* Main Content */}
//       <div className="container d-flex flex-wrap bg-white shadow rounded overflow-hidden">
//         {/* Left Event Banner */}
//         <div className="d-none d-md-flex col-md-6 bg-primary text-white text-center flex-column justify-content-center p-5">
//           <h2 className="fw-bold mb-3">ConnectHub</h2>
//           <p className="lead mb-4">Make Your Call Special with Us</p>
//           <button className="btn btn-success rounded-pill px-4 py-2 fw-bold">Sign Up Today</button>
//         </div>

//         {/* Right Sign-In Form */}
//         <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center p-4">
//           <h2 className="fw-bold mb-4">Sign In</h2>

//           <div className="w-100 mb-3">
//             <TextField
//               label="Email Address"
//               variant="outlined"
//               fullWidth
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>

//           <div className="w-100 mb-3 position-relative">
//             <TextField
//               label="Password"
//               variant="outlined"
//               fullWidth
//               type={showPassword ? "text" : "password"}
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <IconButton
//               className="position-absolute top-0 end-0 mt-2 me-2"
//               onClick={() => setShowPassword(!showPassword)}
//             >
//               {showPassword ? <VisibilityOff /> : <Visibility />}
//             </IconButton>
//           </div>

//           <div className="w-100 d-flex justify-content-between align-items-center mb-3">
//             <div className="form-check m-0">
//               <Checkbox
//                 checked={staySignedIn}
//                 onChange={() => setStaySignedIn(!staySignedIn)}
//               />
//               <label className="form-check-label">Stay signed in</label>
//             </div>
//             <a href="#" className="text-primary text-decoration-none">Forgot Password?</a>
//           </div>

//           <Button
//             variant="contained"
//             color="primary"
//             fullWidth
//             className="mb-3"
//             onClick={handleSubmit}
//           >
//             {loading ? "Loading..." : "Sign In"}
//           </Button>

//           <p className="text-secondary small text-center mb-3">
//             By signing in, I agree to the <a href="#" className="text-primary text-decoration-none">Privacy Policy</a> and <a href="#" className="text-primary text-decoration-none">Terms of Service</a>.
//           </p>

//           <ToastContainer />

//           {/* Social Sign-In Buttons */}
//           <div className="d-flex justify-content-center gap-3 mb-3">
//             <IconButton className="bg-light border rounded-circle">
//               <MdSecurity size={20} />
//             </IconButton>
//             <IconButton className="bg-light border rounded-circle">
//               <FaApple size={20} />
//             </IconButton>
//             <IconButton className="bg-light border rounded-circle">
//               <FaGoogle size={20} />
//             </IconButton>
//             <IconButton className="bg-light border rounded-circle">
//               <FaFacebook size={20} />
//             </IconButton>
//           </div>

//           <p className="text-secondary small">
//             New to Connect Hub?{" "}
//             <Link to="/SignUp" className="text-primary text-decoration-none">Sign Up Free</Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }




import { useState } from "react";
import axios from "axios";
import { TextField, Checkbox, Button, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { FaGoogle, FaApple, FaFacebook } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import { useAuth } from "../../AuthContext";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [staySignedIn, setStaySignedIn] = useState(false);
  const { setUser } = useAuth(); // ✅ Correct one
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });

  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(
        "http://localhost:3000/login",
        { email, password },
        { withCredentials: true }
      );

      const { success, message, user } = data;

      if (success) {
        setUser(user); // ✅ Update context
        handleSuccess(message);
        console.log(user)
        setTimeout(() => {
          navigate(from); // ✅ Navigate to requested page or fallback
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
      handleError("Something went wrong!");
    }
    setLoading(false);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="container-fluid min-vh-100 d-flex flex-column align-items-center bg-light py-5">
      <div className="container d-flex flex-wrap bg-white shadow rounded overflow-hidden">
        <div className="d-none d-md-flex col-md-6 bg-primary text-white text-center flex-column justify-content-center p-5">
          <h2 className="fw-bold mb-3">ConnectHub</h2>
          <p className="lead mb-4">Make Your Call Special with Us</p>
          <button className="btn btn-success rounded-pill px-4 py-2 fw-bold">Sign Up Today</button>
        </div>

        <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center p-4">
          <h2 className="fw-bold mb-4">Sign In</h2>

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
            {loading ? "Loading..." : "Sign In"}
          </Button>

          <p className="text-secondary small text-center mb-3">
            By signing in, I agree to the <a href="#" className="text-primary text-decoration-none">Privacy Policy</a> and <a href="#" className="text-primary text-decoration-none">Terms of Service</a>.
          </p>

          <ToastContainer />

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

          <p className="text-secondary small">
            New to Connect Hub?{" "}
            <Link to="/SignUp" className="text-primary text-decoration-none">Sign Up Free</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
