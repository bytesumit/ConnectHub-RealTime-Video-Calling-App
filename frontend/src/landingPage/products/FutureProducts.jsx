import React from 'react';
import { motion } from 'framer-motion';

const FutureProducts = () => {
  const upcomingProducts = [
    {
      icon: "💬",
      title: "SmartChat Hub",
      description:
        "A powerful real-time team chat system with AI-powered suggestions, inline file sharing, and topic threading.",
    },
    {
      icon: "📊",
      title: "Analytics Dashboard",
      description:
        "Track your meeting durations, speaker activity, screen time, and team performance metrics in one place.",
    },
    {
      icon: "📱",
      title: "ConnectHub Mobile App",
      description:
        "A full-featured mobile app for seamless video calls, meetings, and chats on the go.",
    },
    {
      icon: "🔒",
      title: "Secure File Vault",
      description:
        "Encrypted cloud-based storage integrated with meetings for sharing and accessing files safely.",
    },
    {
      icon: "🗓️",
      title: "Team Scheduler Pro",
      description:
        "A smart meeting calendar with integrations to Google/Outlook and auto-reminders for teams.",
    },
    {
      icon: "🧑‍💼",
      title: "HR Connect Zone",
      description:
        "AI tools for interviews, onboarding meetings, and performance reviews inside ConnectHub.",
    },
  ];

  return (
    <motion.div
      className="container my-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-center text-primary fw-bold mb-4">
        🚀 Future Products of ConnectHub
      </h2>
      <p className="text-center text-muted fs-5 mb-5">
        Here's a glimpse into the powerful products we're building to take your communication to the next level.
      </p>

      <div className="row g-4">
        {upcomingProducts.map((product, idx) => (
          <motion.div
            key={idx}
            className="col-md-6 col-lg-4"
            whileHover={{ scale: 1.03, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="card border-0 shadow p-4 text-center h-100">
              <div className="display-4 mb-3">{product.icon}</div>
              <h5 className="fw-semibold">{product.title}</h5>
              <p className="text-muted">{product.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="text-center mt-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h4 className="fw-bold text-success">🌟 All these products are coming soon to ConnectHub!</h4>
        <p className="text-muted">
          Stay connected, because we’re just getting started.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default FutureProducts;
