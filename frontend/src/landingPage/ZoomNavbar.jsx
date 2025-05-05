
// import React from 'react';
// import './ZoomNavbar.css'
// import axios from 'axios';
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import { useAuth } from "../AuthContext";

// function ZoomNavbar() {

//   // const [user,setUser] = useState({});
//   // const [openUser ,setOpenUser] = useState(false);
//   // const [link ,setLink] = useState("");

//   const { user } = useAuth();
//   const link = user ? `/Profile/${user._id}` : "";


//   return (
//     <nav className="navbar navbar-expand-lg bg-transparent shadow-lg">
//       <div className="container-fluid">
//         {/* Logo */}
//         <a className="navbar-brand text-white fs-3 fw-bold" href="/">
//           ConnectHub
//         </a>

//         {/* Toggle for mobile */}
//         <button
//           className="navbar-toggler border-0"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon text-white"></span>
//         </button>

//         {/* Nav Items */}
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <a className="nav-link text-white fw-semibold" href="#">Products</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link text-white fw-semibold" href="#">AI</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link text-white fw-semibold" href="/Solution">Solutions</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link text-white fw-semibold" href="#">Resources</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link text-white fw-semibold" href="/Pricing">Pricing</a>
//             </li>
//           </ul>

//           {/* Right Side */}
//           <ul className="navbar-nav mb-2 mb-lg-0 align-items-center">
//             {/* Search Icon */}
//             <li className="nav-item">
//               <a className="nav-link text-white" href="#">
//                 <i className="bi bi-search fs-5"></i>
//               </a>
//             </li>

//             {/* Support */}
//             <li className="nav-item">
//               <a className="nav-link text-white fw-semibold" href="/Support">Support</a>
//             </li>

//             {/* Meet Dropdown */}
//             <li className="nav-item dropdown">
//               <a
//                 className="nav-link dropdown-toggle text-white fw-semibold"
//                 href="#"
//                 id="meetDropdown"
//                 role="button"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//               >
//                 Meet
//               </a>
//               <ul className="dropdown-menu dropdown-menu-end bg-glass">
//                 <li><a className="dropdown-item text-black" href="/join">Join Meeting</a></li>
//                 <li><a className="dropdown-item text-black" href="#">Host Meeting</a></li>
//                 <li><a className="dropdown-item text-black" href="#">Download the App</a></li>
//               </ul>
//             </li>

//             {/* Sign In */}

//             {!user &&(
//             <li className="nav-item">
//               <a className="nav-link text-white fw-semibold" href="/SignIn">Sign In</a>
//             </li>
//             )
//              }

//             {/* Contact Sales Button */}
//             <li className="nav-item">
//               <a className="btn btn-outline-light rounded-pill me-2 fw-semibold" href="#">
//                 Contact Sales
//               </a>
//             </li>

//             {/* Try for Free Button */}
//             <li className="nav-item">
//               <a className="btn btn-primary rounded-pill fw-semibold" href="#">
//                 Try for Free
//               </a>
//             </li>

//             {/* Dots Icon */}
//             { user  &&(
//             <li className="nav-item">
//             <a className="nav-link text-white" href= {link}>
//             <i className="fa-solid fa-user"></i>
//             </a>
//           </li>
//             )
            
            
//             }
            
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default ZoomNavbar;


import React from 'react';
import './ZoomNavbar.css'
import { Link } from 'react-router-dom';
import { useAuth } from "../AuthContext";

function ZoomNavbar() {

  const { user } = useAuth();
  const link = user ? `/Profile/${user._id}` : "";

  return (
    <nav className="navbar navbar-expand-lg bg-transparent shadow-lg">
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand text-white fs-3 fw-bold" to="/">
            Connect<span className="text-accent">Hub</span>
        </Link>

        {/* Toggle for mobile */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon text-white"></span>
        </button>

        {/* Nav Items */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-white fw-semibold" to="/products">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white fw-semibold" to="/ai">AI</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white fw-semibold" to="/Solution">Solutions</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white fw-semibold" to="/resources">Resources</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white fw-semibold" to="/Pricing">Pricing</Link>
            </li>
          </ul>

          {/* Right Side */}
          <ul className="navbar-nav mb-2 mb-lg-0 align-items-center">
            {/* Search Icon */}
            <li className="nav-item">
              <Link className="nav-link text-white" to="/search">
                <i className="bi bi-search fs-5"></i>
              </Link>
            </li>

            {/* Support */}
            <li className="nav-item">
              <Link className="nav-link text-white fw-semibold" to="/Support">Support</Link>
            </li>

            {/* Meet Dropdown */}
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle text-white fw-semibold"
                to="#"
                id="meetDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Meet
              </Link>
              <ul className="dropdown-menu dropdown-menu-end bg-glass">
                <li><Link className="dropdown-item text-black" to="/join">Join Meeting</Link></li>
                <li><Link className="dropdown-item text-black" to="/meeting/create">Create Meeting</Link></li>
                <li><Link className="dropdown-item text-black" to="/download">Download the App</Link></li>
              </ul>
            </li>

            {/* Sign In */}
            {!user && (
              <li className="nav-item">
                <Link className="nav-link text-white fw-semibold" to="/SignIn">Sign In</Link>
              </li>
            )}

            {/* Contact Sales Button */}
            <li className="nav-item">
              <Link className="btn btn-outline-light rounded-pill me-2 fw-semibold" to="/contact-sales">
                Contact Sales
              </Link>
            </li>

            {/* Try for Free Button */}
            <li className="nav-item">
              <Link className="btn btn-primary rounded-pill fw-semibold" to="/About">
                About
              </Link>
            </li>

            {/* User Profile */}
            {user && (
              <li className="nav-item">
                <Link className="nav-link text-white" to={link}>
                  <i className="fa-solid fa-user"></i>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default ZoomNavbar;