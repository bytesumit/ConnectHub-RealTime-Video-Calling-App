// import { useEffect, useRef, useState } from "react";
// import { io } from "socket.io-client";
// import SimplePeer from "simple-peer";
// import { Button, IconButton, Drawer, TextField, Avatar, List, ListItem, ListItemText, ListItemAvatar } from "@mui/material";
// import { Mic, MicOff, Videocam, VideocamOff, Chat, ExitToApp, ScreenShare, StopScreenShare } from "@mui/icons-material";
// import { useAuth } from "../../AuthContext";
// import { Link } from "react-router-dom";
//   import ChatPanel from "../chat/ChatPanel";

// const socket = io("http://localhost:3000");

// export default function MeetingRoom() {
//   const [peers, setPeers] = useState([]);
//   const userStream = useRef(null);
//   const screenStream = useRef(null);
//   const peersRef = useRef([]);
//   const videoGrid = useRef(null);
//   const [micOn, setMicOn] = useState(true);
//   const [videoOn, setVideoOn] = useState(true);
//   const [screenSharing, setScreenSharing] = useState(false);
//   const [chatOpen, setChatOpen] = useState(false);
//   const [messages, setMessages] = useState([]);
//   const [messageInput, setMessageInput] = useState("");
//   const { user } = useAuth();

//   const link = `/Profile/${user._id}`;
//   const meetingId = "8e643529-1edb-48af-8d40-7ad54447b5ec";

//   useEffect(() => {
//     // Join meeting
//     fetch('http://localhost:3000/join-meeting', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ meetingId, username: user.username })
//     });

//     // Get user media and setup connections
//     navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
//       userStream.current = stream;
//       addVideoStream(stream, "user");

//       socket.emit("joinMeeting", { meetingId, username: user.username });

//       socket.on("user-joined", ({ socketId }) => {
//         const peer = createPeer(socketId, stream);
//         peersRef.current.push({ peerID: socketId, peer });
//         setPeers((prevPeers) => [...prevPeers, peer]);
//       });

//       socket.on("receive-signal", ({ signal, id }) => {
//         const peer = addPeer(signal, id, stream);
//         peersRef.current.push({ peerID: id, peer });
//         setPeers((prevPeers) => [...prevPeers, peer]);
//       });

//       socket.on("ice-candidate", ({ candidate, sender }) => {
//         const peer = peersRef.current.find((p) => p.peerID === sender)?.peer;
//         if (peer) peer.signal(candidate);
//       });
//     });

//     // Chat functionality
//     socket.on("receive-message", (message) => {
//       setMessages(prev => [...prev, message]);
//     });

//     return () => {
//       socket.off("user-joined");
//       socket.off("receive-signal");
//       socket.off("ice-candidate");
//       socket.off("receive-message");
//     };
//   }, []);

//   const createPeer = (userToSignal, stream) => {
//     const peer = new SimplePeer({ initiator: true, trickle: false, stream });
//     peer.on("signal", (signal) => {
//       socket.emit("sending-signal", { userToSignal, signal });
//     });
//     peer.on("icecandidate", (event) => {
//       if (event.candidate) {
//         socket.emit("ice-candidate", { candidate: event.candidate, target: userToSignal });
//       }
//     });
//     return peer;
//   };

//   const addPeer = (incomingSignal, callerID, stream) => {
//     const peer = new SimplePeer({ initiator: false, trickle: false, stream });
//     peer.signal(incomingSignal);
//     peer.on("icecandidate", (event) => {
//       if (event.candidate) {
//         socket.emit("ice-candidate", { candidate: event.candidate, target: callerID });
//       }
//     });
//     return peer;
//   };

//   const addVideoStream = (stream, type = "peer") => {
//     const videoContainer = document.createElement("div");
//     videoContainer.className = "video-container";
    
//     const video = document.createElement("video");
//     video.srcObject = stream;
//     video.autoplay = true;
//     video.className = type === "user" ? "my-video" : "peer-video";
    
//     const label = document.createElement("div");
//     label.className = "video-label";
//     label.textContent = type === "user" ? "You" : "Participant";
    
//     videoContainer.appendChild(video);
//     videoContainer.appendChild(label);
//     videoGrid.current.appendChild(videoContainer);
//   };

//   const toggleScreenShare = async () => {
//     if (screenSharing) {
//       // Stop screen sharing
//       screenStream.current.getTracks().forEach(track => track.stop());
//       peersRef.current.forEach(({ peer }) => {
//         peer.replaceTrack(
//           peer.streams[0].getVideoTracks()[0],
//           userStream.current.getVideoTracks()[0],
//           peer.streams[0]
//         );
//       });
//       setScreenSharing(false);
//     } else {
//       try {
//         const stream = await navigator.mediaDevices.getDisplayMedia({ video: true });
//         screenStream.current = stream;
        
//         // Replace video track for all peers
//         peersRef.current.forEach(({ peer }) => {
//           peer.replaceTrack(
//             peer.streams[0].getVideoTracks()[0],
//             stream.getVideoTracks()[0],
//             peer.streams[0]
//           );
//         });
        
//         setScreenSharing(true);
        
//         // Handle when user stops sharing via browser UI
//         stream.getVideoTracks()[0].onended = () => {
//           toggleScreenShare();
//         };
//       } catch (err) {
//         console.error("Error sharing screen:", err);
//       }
//     }
//   };

//   const toggleMic = () => {
//     setMicOn(!micOn);
//     userStream.current.getAudioTracks()[0].enabled = !micOn;
//   };

//   const toggleVideo = () => {
//     setVideoOn(!videoOn);
//     userStream.current.getVideoTracks()[0].enabled = !videoOn;
//   };

//   const sendMessage = () => {
//     if (messageInput.trim()) {
//       const message = {
//         sender: user.username,
//         text: messageInput,
//         timestamp: new Date().toLocaleTimeString()
//       };
//       socket.emit("send-message", { meetingId, message });
//       setMessages(prev => [...prev, message]);
//       setMessageInput("");
//     }
//   };

//   const leaveMeeting = () => {
//     socket.emit("end-meeting", meetingId);
//     userStream.current?.getTracks().forEach((track) => track.stop());
//     screenStream.current?.getTracks().forEach((track) => track.stop());
//     window.location.href = link;
//   };

//   return (
//     <div className="vh-100 d-flex flex-column bg-dark text-white">
//       <div className="p-3 d-flex justify-content-between align-items-center bg-secondary">
//         <h4 className="mb-0">Meeting ID: {meetingId}</h4>
//         <Button variant="contained" color="secondary" onClick={leaveMeeting} className="d-flex align-items-center">
//           <ExitToApp className="me-1" /> Leave Meeting
//         </Button>
//       </div>
      
//       <div className="flex-grow-1 d-flex">
//         {/* Main Video Grid */}
//         <div 
//           ref={videoGrid} 
//           className="flex-grow-1 p-3 row row-cols-1 row-cols-md-2 g-3 overflow-auto"
//         ></div>
        
//         {/* Chat Sidebar */}
//         <Drawer
//           anchor="right"
//           open={chatOpen}
//           onClose={() => setChatOpen(false)}
//           PaperProps={{
//             sx: {
//               width: 350,
//               bgcolor: '#2c3e50',
//               color: 'white'
//             }
//           }}
//         >
//           <div className="d-flex flex-column h-100">
//             <div className="p-3 bg-primary d-flex justify-content-between align-items-center">
//               <h5 className="mb-0">Meeting Chat</h5>
//               <IconButton onClick={() => setChatOpen(false)} color="inherit">
//                 <ExitToApp />
//               </IconButton>
//             </div>
            
//             <List className="flex-grow-1 overflow-auto">
//               {messages.map((msg, index) => (
//                 <ListItem key={index}>
//                   <ListItemAvatar>
//                     <Avatar>{msg.sender.charAt(0)}</Avatar>
//                   </ListItemAvatar>
//                   <ListItemText
//                     primary={msg.sender}
//                     secondary={msg.text}
//                     primaryTypographyProps={{ color: 'white' }}
//                     secondaryTypographyProps={{ color: 'rgba(255,255,255,0.7)' }}
//                   />
//                   <span className="text-muted small">{msg.timestamp}</span>
//                 </ListItem>
//               ))}
//             </List>
            
//             <div className="p-3 border-top">
//               <TextField
//                 fullWidth
//                 variant="outlined"
//                 placeholder="Type a message..."
//                 value={messageInput}
//                 onChange={(e) => setMessageInput(e.target.value)}
//                 onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
//                 InputProps={{
//                   style: { color: 'white' },
//                   endAdornment: (
//                     <IconButton onClick={sendMessage} color="primary">
//                       <Chat />
//                     </IconButton>
//                   )
//                 }}
//               />
//             </div>
//           </div>
//         </Drawer>
//       </div>
      
//       <div className="bg-secondary p-3 d-flex justify-content-center align-items-center gap-3">
//         <IconButton onClick={toggleMic} color="primary" className="p-2 bg-light rounded-circle">
//           {micOn ? <Mic /> : <MicOff className="text-danger" />}
//         </IconButton>
//         <IconButton onClick={toggleVideo} color="primary" className="p-2 bg-light rounded-circle">
//           {videoOn ? <Videocam /> : <VideocamOff className="text-danger" />}
//         </IconButton>
//         <IconButton 
//           onClick={toggleScreenShare} 
//           color="primary" 
//           className="p-2 bg-light rounded-circle"
//         >
//           {screenSharing ? <StopScreenShare className="text-danger" /> : <ScreenShare />}
//         </IconButton>
//         <IconButton 
//           onClick={() => setChatOpen(true)} 
//           color="primary" 
//           className="p-2 bg-light rounded-circle"
//         >
//           <Chat />
//         </IconButton>
//       </div>

//       <style>{`
//         .video-container {
//           position: relative;
//           border-radius: 8px;
//           overflow: hidden;
//           background: #000;
//           aspect-ratio: 16/9;
//         }
//         .video-container video {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//         }
//         .video-label {
//           position: absolute;
//           bottom: 8px;
//           left: 8px;
//           background: rgba(0,0,0,0.5);
//           color: white;
//           padding: 2px 8px;
//           border-radius: 4px;
//           font-size: 12px;
//         }
//         .my-video {
//           transform: scaleX(-1); // Mirror effect for self view
//         }
//       `}</style>
//     </div>
//   );
// }



// 

import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import SimplePeer from "simple-peer";
import { Button, IconButton } from "@mui/material";
import { Mic, MicOff, Videocam, VideocamOff, Chat, ExitToApp, ScreenShare, StopScreenShare } from "@mui/icons-material";
import { useAuth } from "../../AuthContext";
import { Link } from "react-router-dom";
import ChatPanel from "../chat/ChatPanel"; // ✅ Your custom chat component

const socket = io("http://localhost:3000");

export default function MeetingRoom() {
  const [peers, setPeers] = useState([]);
  const userStream = useRef(null);
  const screenStream = useRef(null);
  const peersRef = useRef([]);
  const videoGrid = useRef(null);
  const [micOn, setMicOn] = useState(true);
  const [videoOn, setVideoOn] = useState(true);
  const [screenSharing, setScreenSharing] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");
  const { user } = useAuth();

  const link = `/Profile/${user._id}`;
  const meetingId = "5e4bbe96-30ec-4712-a60a-78ac498508cc";

  useEffect(() => {
    // Join meeting
    fetch('http://localhost:3000/join-meeting', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ meetingId, username: user.username })
    });

    // Get user media and setup connections
    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
      userStream.current = stream;
      addVideoStream(stream, "user");

      socket.emit("joinMeeting", { meetingId, username: user.username });

      socket.on("user-joined", ({ socketId }) => {
        const peer = createPeer(socketId, stream);
        peersRef.current.push({ peerID: socketId, peer });
        setPeers((prevPeers) => [...prevPeers, peer]);
      });

      socket.on("receive-signal", ({ signal, id }) => {
        const peer = addPeer(signal, id, stream);
        peersRef.current.push({ peerID: id, peer });
        setPeers((prevPeers) => [...prevPeers, peer]);
      });

      socket.on("ice-candidate", ({ candidate, sender }) => {
        const peer = peersRef.current.find((p) => p.peerID === sender)?.peer;
        if (peer) peer.signal(candidate);
      });
    });

    // Chat functionality
    socket.on("receive-message", (message) => {
      setMessages(prev => [...prev, message]);
    });

    return () => {
      socket.off("user-joined");
      socket.off("receive-signal");
      socket.off("ice-candidate");
      socket.off("receive-message");
    };
  }, []);

  const createPeer = (userToSignal, stream) => {
    const peer = new SimplePeer({ initiator: true, trickle: false, stream });
    peer.on("signal", (signal) => {
      socket.emit("sending-signal", { userToSignal, signal });
    });
    peer.on("icecandidate", (event) => {
      if (event.candidate) {
        socket.emit("ice-candidate", { candidate: event.candidate, target: userToSignal });
      }
    });
    return peer;
  };

  const addPeer = (incomingSignal, callerID, stream) => {
    const peer = new SimplePeer({ initiator: false, trickle: false, stream });
    peer.signal(incomingSignal);
    peer.on("icecandidate", (event) => {
      if (event.candidate) {
        socket.emit("ice-candidate", { candidate: event.candidate, target: callerID });
      }
    });
    return peer;
  };

  const addVideoStream = (stream, type = "peer") => {
    const videoContainer = document.createElement("div");
    videoContainer.className = "video-container";

    const video = document.createElement("video");
    video.srcObject = stream;
    video.autoplay = true;
    video.className = type === "user" ? "my-video" : "peer-video";

    const label = document.createElement("div");
    label.className = "video-label";
    label.textContent = type === "user" ? "You" : "Participant";

    videoContainer.appendChild(video);
    videoContainer.appendChild(label);
    videoGrid.current.appendChild(videoContainer);
  };

  const toggleScreenShare = async () => {
    if (screenSharing) {
      screenStream.current.getTracks().forEach(track => track.stop());
      peersRef.current.forEach(({ peer }) => {
        peer.replaceTrack(
          peer.streams[0].getVideoTracks()[0],
          userStream.current.getVideoTracks()[0],
          peer.streams[0]
        );
      });
      setScreenSharing(false);
    } else {
      try {
        const stream = await navigator.mediaDevices.getDisplayMedia({ video: true });
        screenStream.current = stream;

        peersRef.current.forEach(({ peer }) => {
          peer.replaceTrack(
            peer.streams[0].getVideoTracks()[0],
            stream.getVideoTracks()[0],
            peer.streams[0]
          );
        });

        setScreenSharing(true);

        stream.getVideoTracks()[0].onended = () => {
          toggleScreenShare();
        };
      } catch (err) {
        console.error("Error sharing screen:", err);
      }
    }
  };

  const toggleMic = () => {
    setMicOn(!micOn);
    userStream.current.getAudioTracks()[0].enabled = !micOn;
  };

  const toggleVideo = () => {
    setVideoOn(!videoOn);
    userStream.current.getVideoTracks()[0].enabled = !videoOn;
  };

  const sendMessage = () => {
    if (messageInput.trim()) {
      const message = {
        sender: user.username,
        text: messageInput,
        timestamp: new Date().toLocaleTimeString()
      };
      socket.emit("send-message", { meetingId, message });
      setMessages(prev => [...prev, message]);
      setMessageInput("");
    }
  };

  const leaveMeeting = () => {
    socket.emit("end-meeting", meetingId);
    userStream.current?.getTracks().forEach((track) => track.stop());
    screenStream.current?.getTracks().forEach((track) => track.stop());
    window.location.href = link;
  };

  return (
    <div className="vh-100 d-flex flex-column bg-dark text-white">
      <div className="p-3 d-flex justify-content-between align-items-center bg-secondary">
        <h4 className="mb-0">Meeting ID: {meetingId}</h4>
        <Button variant="contained" color="secondary" onClick={leaveMeeting} className="d-flex align-items-center">
          <ExitToApp className="me-1" /> Leave Meeting
        </Button>
      </div>

      <div className="flex-grow-1 d-flex position-relative">
        {/* Main Video Grid */}
        <div
          ref={videoGrid}
          className="flex-grow-1 p-3 row row-cols-1 row-cols-md-2 g-3 overflow-auto"
        ></div>

        {/* Custom Chat Panel */}
        {chatOpen && (
          <div className="position-absolute end-0 top-0 h-100" style={{ width: 350, zIndex: 10 }}>
            <ChatPanel
              messages={messages}
              setMessages={setMessages}
              messageInput={messageInput}
              setMessageInput={setMessageInput}
              sendMessage={sendMessage}
              onClose={() => setChatOpen(false)}
            />
          </div>
        )}
      </div>

      {/* Controls */}
      <div className="bg-secondary p-3 d-flex justify-content-center align-items-center gap-3">
        <IconButton onClick={toggleMic} color="primary" className="p-2 bg-light rounded-circle">
          {micOn ? <Mic /> : <MicOff className="text-danger" />}
        </IconButton>
        <IconButton onClick={toggleVideo} color="primary" className="p-2 bg-light rounded-circle">
          {videoOn ? <Videocam /> : <VideocamOff className="text-danger" />}
        </IconButton>
        <IconButton
          onClick={toggleScreenShare}
          color="primary"
          className="p-2 bg-light rounded-circle"
        >
          {screenSharing ? <StopScreenShare className="text-danger" /> : <ScreenShare />}
        </IconButton>

        <IconButton
         onClick={() => setChatOpen((prev) => !prev)}
        color="primary"
        className="p-2 bg-light rounded-circle"
          >
            <Chat />
          </IconButton>



      </div>

      <style>{`
        .video-container {
          position: relative;
          border-radius: 8px;
          overflow: hidden;
          background: #000;
          aspect-ratio: 16/9;
        }
        .video-container video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .video-label {
          position: absolute;
          bottom: 8px;
          left: 8px;
          background: rgba(0,0,0,0.5);
          color: white;
          padding: 2px 8px;
          border-radius: 4px;
          font-size: 12px;
        }
        .my-video {
          transform: scaleX(-1);
        }
      `}</style>
    </div>
  );
}
