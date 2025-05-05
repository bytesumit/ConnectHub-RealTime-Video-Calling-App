// import React from "react";

// const PricingPage = () => {
//   return (
//     <div className="container py-5">
//       <div className="text-center mb-5">
//         <h1 className="fw-bold text-primary">ConnectHub Pricing Plans</h1>
//         <p className="text-muted">
//           Choose the plan that fits your needs. Simple, transparent pricing for everyone.
//         </p>
//       </div>

//       <div className="row g-4">
//         {/* Basic Plan */}
//         <div className="col-md-4">
//           <div className="card h-100 border-primary shadow-sm pricing-card">
//             <div className="card-body text-center">
//               <h5 className="card-title fw-bold text-primary">Basic</h5>
//               <h2 className="card-price text-primary">$0<span className="fs-6">/month</span></h2>
//               <ul className="list-unstyled my-3">
//                 <li>✅ Unlimited Meetings</li>
//                 <li>✅ 40 min limit</li>
//                 <li>✅ Screen Sharing</li>
//                 <li>❌ Recording</li>
//                 <li>❌ Priority Support</li>
//               </ul>
//               <button className="btn btn-primary w-100">Get Started</button>
//             </div>
//           </div>
//         </div>

//         {/* Pro Plan */}
//         <div className="col-md-4">
//           <div className="card h-100 border-primary shadow-sm pricing-card highlight-card">
//             <div className="card-body text-center">
//               <h5 className="card-title fw-bold text-primary">Pro</h5>
//               <h2 className="card-price text-primary">$15<span className="fs-6">/month</span></h2>
//               <ul className="list-unstyled my-3">
//                 <li>✅ Unlimited Meetings</li>
//                 <li>✅ No time limits</li>
//                 <li>✅ Screen Sharing</li>
//                 <li>✅ Recording</li>
//                 <li>✅ Email Support</li>
//               </ul>
//               <button className="btn btn-primary w-100">Upgrade Now</button>
//             </div>
//           </div>
//         </div>

//         {/* Business Plan */}
//         <div className="col-md-4">
//           <div className="card h-100 border-primary shadow-sm pricing-card">
//             <div className="card-body text-center">
//               <h5 className="card-title fw-bold text-primary">Business</h5>
//               <h2 className="card-price text-primary">$25<span className="fs-6">/month</span></h2>
//               <ul className="list-unstyled my-3">
//                 <li>✅ Unlimited Meetings</li>
//                 <li>✅ No time limits</li>
//                 <li>✅ Screen Sharing</li>
//                 <li>✅ Recording & Transcripts</li>
//                 <li>✅ 24/7 Premium Support</li>
//               </ul>
//               <button className="btn btn-primary w-100">Get Business Plan</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PricingPage;

import React from "react";
import "./PricingPage.css"; // Custom CSS file

const PricingPage = () => {
  return (
    <div className="pricing-container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold text-white">ConnectHub Pricing Plans</h1>
        <p className="text-white-50 lead">
          Choose the plan that fits your needs. Simple, transparent pricing for everyone.
        </p>
      </div>

      <div className="row g-4 justify-content-center">
        {/* Basic Plan */}
        <div className="col-md-4">
          <div className="card h-100 pricing-card border-0 shadow-lg">
            <div className="card-body text-center p-4">
              <h5 className="card-title fw-bold text-primary">Basic</h5>
              <h2 className="card-price text-primary mb-3">
                $0<span className="fs-6">/month</span>
              </h2>
              <ul className="list-unstyled pricing-features mb-4">
                <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i> Unlimited Meetings</li>
                <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i> 40 min limit</li>
                <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i> Screen Sharing</li>
                <li className="mb-2"><i className="bi bi-x-circle text-danger me-2"></i> Recording</li>
                <li className="mb-2"><i className="bi bi-x-circle text-danger me-2"></i> Priority Support</li>
              </ul>
              <button className="btn btn-outline-primary w-100 rounded-pill btn-hover">Get Started</button>
            </div>
          </div>
        </div>

        {/* Pro Plan (Highlighted) */}
        <div className="col-md-4">
          <div className="card h-100 pricing-card border-0 shadow-lg position-relative">
            <div className="ribbon ribbon-top-right"><span>Popular</span></div>
            <div className="card-body text-center p-4">
              <h5 className="card-title fw-bold text-primary">Pro</h5>
              <h2 className="card-price text-primary mb-3">
                $15<span className="fs-6">/month</span>
              </h2>
              <ul className="list-unstyled pricing-features mb-4">
                <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i> Unlimited Meetings</li>
                <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i> No time limits</li>
                <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i> Screen Sharing</li>
                <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i> Recording</li>
                <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i> Email Support</li>
              </ul>
              <button className="btn btn-primary w-100 rounded-pill btn-hover">Upgrade Now</button>
            </div>
          </div>
        </div>

        {/* Business Plan */}
        <div className="col-md-4">
          <div className="card h-100 pricing-card border-0 shadow-lg">
            <div className="card-body text-center p-4">
              <h5 className="card-title fw-bold text-primary">Business</h5>
              <h2 className="card-price text-primary mb-3">
                $25<span className="fs-6">/month</span>
              </h2>
              <ul className="list-unstyled pricing-features mb-4">
                <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i> Unlimited Meetings</li>
                <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i> No time limits</li>
                <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i> Screen Sharing</li>
                <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i> Recording & Transcripts</li>
                <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i> 24/7 Premium Support</li>
              </ul>
              <button className="btn btn-outline-primary w-100 rounded-pill btn-hover">Get Business Plan</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;