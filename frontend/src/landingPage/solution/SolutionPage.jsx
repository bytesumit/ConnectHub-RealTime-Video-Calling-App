import React, { useEffect } from 'react';

const SolutionPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const solutions = [
    { title: 'HD Video Conferencing', icon: 'bi-camera-video-fill', desc: 'High-definition video meetings with crystal clear quality.' },
    { title: 'Real-Time Messaging', icon: 'bi-chat-dots-fill', desc: 'Instant team communication with secure messaging.' },
    { title: 'File Sharing', icon: 'bi-folder-fill', desc: 'Share documents and collaborate in real time.' },
    { title: 'Mobile Access', icon: 'bi-phone-fill', desc: 'Stay connected from anywhere, anytime with mobile apps.' },
  ];

  return (
    <div>

      {/* Hero Section */}
      <section className="container-fluid text-center bg-primary text-white py-5 animate__animated animate__fadeInDown">
        <h1 className="display-4 fw-bold mb-3">Discover ConnectHub Solutions</h1>
        <p className="lead mb-4">Next-generation communication for modern teams.</p>
        <a href="#get-started" className="btn btn-light btn-lg px-4 rounded-pill shadow">Get Started Free</a>
      </section>

      {/* Solutions Section */}
      <section className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3 animate__animated animate__fadeInUp">Our Powerful Solutions</h2>
          <p className="text-muted">Everything your team needs to communicate and collaborate efficiently.</p>
        </div>

        <div className="row g-4">
          {solutions.map((item, idx) => (
            <div className="col-md-3 col-sm-6" key={idx}>
              <div className="card h-100 border-0 shadow-sm text-center p-4 animate__animated animate__fadeInUp hover-card">
                <div className="card-body">
                  <i className={`bi ${item.icon} display-4 text-primary mb-3`}></i>
                  <h5 className="card-title fw-semibold">{item.title}</h5>
                  <p className="card-text text-muted">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="container-fluid bg-light py-5 animate__animated animate__fadeIn">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Loved by Teams Worldwide</h2>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="blockquote bg-white rounded shadow p-4 animate__animated animate__fadeInUp">
                <p className="mb-4">"ConnectHub streamlined our entire remote workflow. Meetings are seamless, chats are instant, and collaboration has never been this smooth!"</p>
                <footer className="blockquote-footer">Sarah M. from <cite title="Source Title">GlobalTech</cite></footer>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container text-center py-5 animate__animated animate__fadeInUp" id="get-started">
        <h2 className="fw-bold mb-3">Ready to Transform Your Communication?</h2>
        <p className="text-muted mb-4">Join thousands of teams using ConnectHub every day.</p>
        <a className="btn btn-primary btn-lg px-4 rounded-pill shadow" href="#">Start Free Trial</a>
      </section>

      {/* Custom Styles */}
      <style>{`
        .hover-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0, 123, 255, 0.3);
        }
      `}</style>
    </div>
  );
};

export default SolutionPage;
