
// import { useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {Link} from 'react-router-dom'

// export default function CreateMeeting() {
//   const [meetingUrl, setMeetingUrl] = useState("");
//   const [meetingId, setMeetingId] = useState("");

//   const createMeeting = async () => {
//     const response = await fetch("http://localhost:3000/create-meeting", {
//       method: "POST",
//     });
//     const data = await response.json();
//     setMeetingUrl(data.meetingUrl);
//     setMeetingId(data.meetingId);
//   };

//   return (
//     <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-dark text-white">
//       <button onClick={createMeeting} className="btn btn-primary px-4 py-2">
//         Create Meeting
//       </button>
//       {meetingUrl && (
//         <p className="mt-4">
//           Share this link:{" "}
//           <Link to={meetingUrl} className="text-info">
//             {meetingUrl}
//           </Link>
//         </p>
//       )}
//     </div>
//   );
// }

// 


import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
  PlusCircle, 
  Link45deg, 
  Clipboard, 
  Whatsapp, 
  Envelope, 
  Telegram,
  ArrowRightCircle,
  PersonVideo
} from 'react-bootstrap-icons';
import { Tooltip, OverlayTrigger, Modal, ButtonGroup, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function CreateMeeting() {
  const [meetingUrl, setMeetingUrl] = useState("");
  const [meetingId, setMeetingId] = useState("");
  const [showShareModal, setShowShareModal] = useState(false);
  const [copied, setCopied] = useState(false);

  const createMeeting = async () => {
    const response = await fetch("http://localhost:3000/create-meeting", {
      method: "POST",
    });
    const data = await response.json();
    setMeetingUrl(data.meetingUrl);
    setMeetingId(data.meetingId);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(meetingUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareOptions = [
    { name: "Copy Link", icon: <Clipboard />, action: copyToClipboard },
    { name: "WhatsApp", icon: <Whatsapp />, action: () => window.open(`https://wa.me/?text=${encodeURIComponent(meetingUrl)}`) },
    { name: "Email", icon: <Envelope />, action: () => window.open(`mailto:?body=${encodeURIComponent(meetingUrl)}`) },
    { name: "Telegram", icon: <Telegram />, action: () => window.open(`https://t.me/share/url?url=${encodeURIComponent(meetingUrl)}`) },
  ];

  return (
    <div className="create-meeting-container d-flex flex-column justify-content-center align-items-center min-vh-100 bg-dark">
      <div className="meeting-card p-5 rounded-4 bg-gradient">
        <h2 className="text-center mb-4 fw-bold text-white">
          <PersonVideo size={28} className="me-2" />
          Video Conference
        </h2>
        
        <div className="d-grid gap-3">
          <button 
            onClick={createMeeting} 
            className="btn btn-primary btn-lg px-5 py-3 rounded-pill fw-bold"
            disabled={meetingUrl}
          >
            <PlusCircle size={20} className="me-2" />
            {meetingUrl ? "Meeting Ready!" : "Create New Meeting"}
          </button>

          {meetingUrl && (
            <Link to={meetingUrl}>
            <Button
           
            
              className="btn btn-success btn-lg px-5 py-3 rounded-pill fw-bold"
            >
              <ArrowRightCircle size={20} className="me-2" />
              Join Your Meeting
            </Button>
            </Link>
          )}
        </div>

        {meetingUrl && (
          <div className="mt-4 animate-fade-in">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control form-control-lg"
                value={meetingUrl}
                readOnly
              />
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>{copied ? "Copied!" : "Copy"}</Tooltip>}
              >
                <button 
                  className="btn btn-outline-light" 
                  onClick={copyToClipboard}
                >
                  <Clipboard />
                </button>
              </OverlayTrigger>
            </div>

            <div className="d-flex justify-content-between align-items-center">
              <p className="text-muted mb-0">
                Meeting ID: <span className="text-white fw-bold">{meetingId}</span>
              </p>
              
              <button 
                className="btn btn-sm btn-outline-info"
                onClick={() => setShowShareModal(true)}
              >
                <Link45deg className="me-1" />
                Share Options
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Share Options Modal */}
      <Modal show={showShareModal} onHide={() => setShowShareModal(false)} centered>
        <Modal.Header closeButton className="bg-dark text-white border-secondary">
          <Modal.Title>Share Meeting Link</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark text-white">
          <ButtonGroup vertical className="w-100 gap-2">
            {shareOptions.map((option, index) => (
              <button
                key={index}
                className="btn btn-outline-light text-start py-3 d-flex align-items-center rounded"
                onClick={option.action}
              >
                <span className="me-3" style={{ width: '24px' }}>{option.icon}</span>
                {option.name}
              </button>
            ))}
          </ButtonGroup>
        </Modal.Body>
      </Modal>

      <style jsx>{`
        .create-meeting-container {
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
        }
        .meeting-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          width: 100%;
          max-width: 600px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-in-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .bg-gradient {
          background: linear-gradient(to right, #4b6cb7, #182848);
        }
        .btn-outline-light:hover {
          background: rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </div>
  );
}