

// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const Footer = () => {
//   const [showCookies, setShowCookies] = useState(false);
//   const [showChat, setShowChat] = useState(false);

//   const handleCookiesClick = () => setShowCookies(true);
//   const handleChatClick = () => setShowChat(true);
//   const handleClose = () => {
//     setShowCookies(false);
//     setShowChat(false);
//   };

//   return (
//     <>
//       {/* Footer Section */}
//       <footer className="bg-dark text-white py-4 px-3 mt-5">
//         <div className="container">
//           <div className="row text-start">
//             {/* About */}
//             <div className="col-md-3 mb-3">
//               <h5>About</h5>
//               <ul className="list-unstyled">
//                 <li>ConnectHub Blog</li>
//                 <li>Customers</li>
//                 <li>Our Team</li>
//                 <li>Careers</li>
//                 <li>Integrations</li>
//                 <li>Partners</li>
//                 <li>Investors</li>
//                 <li>Press</li>
//                 <li>Sustainability & ESG</li>
//                 <li>ConnectHub Cares</li>
//                 <li>Media Kit</li>
//                 <li>How To Videos</li>
//                 <li>Developer Platform</li>
//                 <li>ConnectHub Ventures</li>
//                 <li>ConnectHub Merchandise Store</li>
//               </ul>
//             </div>

//             {/* Download */}
//             <div className="col-md-3 mb-3">
//               <h5>Download</h5>
//               <ul className="list-unstyled">
//                 <li>ConnectHub Workplace App</li>
//                 <li>ConnectHub Rooms App</li>
//                 <li>ConnectHub Rooms Controller</li>
//                 <li>Browser Extension</li>
//                 <li>Outlook Plug-in</li>
//                 <li>iPhone/iPad App</li>
//                 <li>Android App</li>
//                 <li>ConnectHub Virtual Backgrounds</li>
//               </ul>
//             </div>

//             {/* Sales */}
//             <div className="col-md-3 mb-3">
//               <h5>Sales</h5>
//               <ul className="list-unstyled">
//                 <li>1.888.799.9666</li>
//                 <li>Contact Sales</li>
//                 <li>Plans & Pricing</li>
//                 <li>Request a Demo</li>
//                 <li>Webinars and Events</li>
//                 <li>ConnectHub Experience Center</li>
//               </ul>
//             </div>

//             {/* Support */}
//             <div className="col-md-3 mb-3">
//               <h5>Support</h5>
//               <ul className="list-unstyled">
//                 <li>Test ConnectHub</li>
//                 <li>Account</li>
//                 <li>Support Center</li>
//                 <li>Learning Center</li>
//                 <li>Technical Content Library</li>
//                 <li>Feedback</li>
//                 <li>Contact Us</li>
//                 <li>Accessibility</li>
//                 <li>Developer Support</li>
//                 <li>Privacy, Security, Legal Policies, and Modern Slavery Act Transparency Statement</li>
//               </ul>
//             </div>
//           </div>

//           {/* Language and Currency */}
//           <div className="d-flex flex-wrap align-items-center mt-4">
//             <div className="me-3">
//               <select className="form-select">
//                 <option>English</option>
//                 <option>Spanish</option>
//               </select>
//             </div>
//             <div>
//               <select className="form-select">
//                 <option>US Dollar $</option>
//                 <option>Euro €</option>
//               </select>
//             </div>
//           </div>

//           {/* Social Icons */}
//           <div className="mt-3">
//             <i className="bi bi-wordpress me-2"></i>
//             <i className="bi bi-linkedin me-2"></i>
//             <i className="bi bi-x me-2"></i>
//             <i className="bi bi-youtube me-2"></i>
//             <i className="bi bi-facebook me-2"></i>
//             <i className="bi bi-instagram"></i>
//           </div>

//           {/* Footer Bottom */}
//           <div className="d-flex justify-content-between align-items-center mt-4 flex-wrap">
//             <p className="mb-0">Copyright ©2025 ConnectHub Communications, Inc. All rights reserved.</p>
//             <div>
//               <Link to="/terms" className="text-white me-3">Terms</Link>
//               <Link to="/privacy" className="text-white me-3">Privacy</Link>
//               <Link to="/trust-center" className="text-white me-3">Trust Center</Link>
//               <Link to="/legal-compliance" className="text-white me-3">Legal & Compliance</Link>
//             </div>
//           </div>

//           {/* Action Icons */}
//           <div className="mt-3 d-flex align-items-center ">
//             <img
//               src="https://cdn-icons-png.flaticon.com/512/484/484662.png"
//               alt="Cookies"
//               style={{ width: "40px", height: "40px", cursor: "pointer" }}
//               className="me-3"
//               onClick={handleCookiesClick}
//             />
//             <img
//               src="https://cdn-icons-png.flaticon.com/512/747/747376.png"
//               alt="Chat"
//               style={{ width: "40px", height: "40px", cursor: "pointer" }}
//               onClick={handleChatClick}
//             />
//           </div>
//         </div>
//       </footer>

//       {/* Modals */}
//       {showCookies && (
//         <div className="modal d-block" tabIndex="-1">
//           <div className="modal-dialog">
//             <div className="modal-content bg-dark text-white">
//               <div className="modal-header">
//                 <h5 className="modal-title">Cookies Settings</h5>
//                 <button type="button" className="btn-close btn-close-white" onClick={handleClose}></button>
//               </div>
//               <div className="modal-body">
//                 <p>Here you can adjust your cookie preferences.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {showChat && (
//         <div className="modal d-block" tabIndex="-1">
//           <div className="modal-dialog">
//             <div className="modal-content bg-dark text-white">
//               <div className="modal-header">
//                 <h5 className="modal-title">Chat Support</h5>
//                 <button type="button" className="btn-close btn-close-white" onClick={handleClose}></button>
//               </div>
//               <div className="modal-body">
//                 <p>Welcome! How can we help you today?</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Footer;


// 


import React from "react";

const Footer = () => {
  return (
    <footer className="footer text-white pt-5 pb-4 mt-5">
      <div className="container">
        <div className="row gy-4">

          {/* Logo & Description */}
          <div className="col-md-4">
            <h4 className="fw-bold mb-3">Connect<span className="text-accent">Hub</span></h4>
            <p className="small">
              Your all-in-one platform for seamless meetings, chats, and AI-powered collaboration.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4">
            <h6 className="text-uppercase fw-semibold mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="#meetings" className="footer-link">Meetings</a></li>
              <li><a href="#chat" className="footer-link">Chat</a></li>
              <li><a href="#scheduler" className="footer-link">Scheduler</a></li>
              <li><a href="#ai" className="footer-link">AI Tools</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4">
            <h6 className="text-uppercase fw-semibold mb-3">Contact Us</h6>
            <p className="small mb-2"><i className="bi bi-envelope me-2"></i> support@connecthub.app</p>
            <p className="small mb-2"><i className="bi bi-geo-alt me-2"></i> Bihar, IN</p>
            <p className="small"><i className="bi bi-telephone me-2"></i> +1 (800) 123-4567</p>
          </div>

        </div>

        <hr className="mt-4 mb-3 border-light" />

        {/* Bottom Section */}
        <div className="d-flex justify-content-between align-items-center flex-wrap">
          <p className="mb-0 small">© 2025 ConnectHub. All rights reserved.</p>
          <div>
            <a href="#" className="footer-social"><i className="bi bi-facebook"></i></a>
            <a href="#" className="footer-social"><i className="bi bi-twitter-x"></i></a>
            <a href="#" className="footer-social"><i className="bi bi-linkedin"></i></a>
            <a href="#" className="footer-social"><i className="bi bi-youtube"></i></a>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style>{`
        .footer {
          background: linear-gradient(to right, #0f172a, #1e293b);
          color: #ffffff;
        }
        .text-accent {
          color: #38bdf8;
        }
        .footer-link {
          color: #cbd5e1;
          text-decoration: none;
          display: block;
          margin-bottom: 0.5rem;
          transition: all 0.3s ease;
        }
        .footer-link:hover {
          color: #38bdf8;
          transform: translateX(5px);
        }
        .footer-social {
          color: #cbd5e1;
          font-size: 1.3rem;
          margin-left: 0.75rem;
          transition: all 0.3s ease;
        }
        .footer-social:hover {
          color: #38bdf8;
          transform: scale(1.2);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
