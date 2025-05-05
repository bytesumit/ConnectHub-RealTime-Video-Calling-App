import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TextField } from '@mui/material';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [chatHistory, setChatHistory] = useState([
    { sender: 'bot', text: "Hi, I'm Zoom's Virtual Agent 🤖" },
    { sender: 'bot', text: 'I can provide more information on Zoom products, assist with purchasing, and more!' },
    { sender: 'bot', text: 'How can I help you today?' },
  ]);

  const [animate, setAnimate] = useState(false);

  const commands = {
    'Zoom Plans & Pricing': [
      'Basic: Free',
      'Pro: $14.99/month',
      'Business: $19.99/month',
      'Enterprise: Contact Sales',
    ],
    'Zoom Support': [
      'Visit support.zoom.us',
      'Live chat with support',
      'Submit a ticket',
    ],
    'Join a Meeting': [
      'Go to join.zoom.us',
      'Enter your Meeting ID',
      'Click Join',
    ],
    'Upgrade to Pro': [
      'Go to Billing',
      'Select Pro Plan',
      'Enter Payment Details',
    ],
    'Discover Zoom Phone': [
      'Unlimited calling',
      'Voicemail transcription',
      'Global coverage',
    ],
    'Chat with Sales': [
      'Please wait, connecting to sales...',
      'All agents are currently busy.',
      'Leave your query, we will get back to you!',
    ],
    'Ask a Question': ['Sure! Type your question below 👇'],
  };

  const handleCommand = (command) => {
    const randomResponse =
      commands[command][Math.floor(Math.random() * commands[command].length)];
    setChatHistory([
      ...chatHistory,
      { sender: 'user', text: command },
      { sender: 'bot', text: randomResponse },
    ]);
  };

  const toggleChat = () => {
    setAnimate(true);
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      setAnimate(true);
    }
  }, [isOpen]);

  return (
    <div>
      {/* Chat Icon */}
      <button
        onClick={toggleChat}
        className="btn btn-primary rounded-circle shadow position-fixed"
        style={{
          bottom: '20px',
          right: '20px',
          width: '60px',
          height: '60px',
          zIndex: 1000,
          fontSize: '24px',
        }}
      >
        💬
      </button>

      {/* Chat Window */}
      <div
        className={`card shadow position-fixed ${
          isOpen && animate ? 'animate__animated animate__fadeInUp' : 'animate__animated animate__fadeOutDown'
        }`}
        style={{
          bottom: isOpen ? '90px' : '20px',
          right: '20px',
          width: '320px',
          maxHeight: '400px',
          overflowY: 'auto',
          zIndex: 1000,
          display: isOpen || animate ? 'block' : 'none',
          animationDuration: '0.4s',
        }}
        onAnimationEnd={() => {
          if (!isOpen) setAnimate(false);
        }}
      >
        <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
          <span>Zoom Virtual Agent</span>
          <button className="btn btn-sm btn-light" onClick={toggleChat}>
            ✖️
          </button>
        </div>
        <div className="card-body">
          {chatHistory.map((msg, index) => (
            <div
              key={index}
              className={`mb-2 ${
                msg.sender === 'user' ? 'text-end' : 'text-start'
              }`}
            >
              <span
                className={`badge ${
                  msg.sender === 'user' ? 'bg-primary' : 'bg-secondary'
                }`}
              >
                {msg.text}
              </span>
            </div>
          ))}
        </div>
        <div className="card-footer">
          {Object.keys(commands).map((cmd, idx) => (
            <button
              key={idx}
              className="btn btn-outline-primary btn-sm me-1 mb-1"
              onClick={() => handleCommand(cmd)}
            >
              {cmd}
            </button>
          ))}
        </div>
 
      </div>
    
    </div>
  );
};

export default ChatWidget;
