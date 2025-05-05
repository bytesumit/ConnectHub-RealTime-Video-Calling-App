import React from 'react';
import { motion } from 'framer-motion';

const FutureAIEnhancements = () => {
  const aiFeatures = [
    {
      icon: "🧠",
      title: "AI-Powered Meeting Summaries",
      description:
        "Get auto-generated smart summaries with key takeaways and action items after every meeting.",
    },
    {
      icon: "🌍",
      title: "Live Language Translation",
      description:
        "Break language barriers with real-time translated subtitles during calls.",
    },
    {
      icon: "🎤",
      title: "Smart Speaker Detection",
      description:
        "Automatically highlight and focus on the current active speaker during discussions.",
    },
    {
      icon: "🤖",
      title: "AI Insights Bot",
      description:
        "A smart assistant that provides instant meeting insights, highlights, and follow-ups.",
    },
    {
      icon: "😊",
      title: "Emotion Recognition",
      description:
        "Get insights into user emotions for more interactive and engaging meetings.",
    },
    {
      icon: "📅",
      title: "Auto Meeting Scheduler",
      description:
        "AI will suggest the best times for meetings based on participant availability and past patterns.",
    },
  ];

  return (
    <motion.div
      className="container my-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-center fw-bold text-primary mb-4">
        🚀 Future AI Enhancements in ConnectHub
      </h2>
      <p className="text-center text-muted mb-5 fs-5">
        Here's a sneak peek into the powerful AI features coming your way to enhance your real-time communication.
      </p>

      <div className="row g-4">
        {aiFeatures.map((feature, idx) => (
          <motion.div
            key={idx}
            className="col-md-6 col-lg-4"
            whileHover={{ scale: 1.03, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="card h-100 border-0 shadow p-4 text-center">
              <div className="display-4 mb-3">{feature.icon}</div>
              <h5 className="fw-semibold">{feature.title}</h5>
              <p className="text-muted">{feature.description}</p>
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
        <h4 className="text-success fw-bold">
          🔮 All these powerful AI features are coming soon to ConnectHub!
        </h4>
        <p className="text-muted">Stay tuned and be ready for the future of video communication.</p>
      </motion.div>
    </motion.div>
  );
};

export default FutureAIEnhancements;
