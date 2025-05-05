// import React, { useEffect, useRef, useState } from "react";
// import { io } from "socket.io-client";
// import Peer from "simple-peer";

// const socket = io("http://localhost:3000"); // Change to your backend URL

// function MeetingRoom({ meetingId }) {
//   const [peers, setPeers] = useState([]);
//   const [messages, setMessages] = useState([]);
//   const [message, setMessage] = useState("");

//   const userVideo = useRef();
//   const peersRef = useRef([]);
//   const userStream = useRef();

//   useEffect(() => {
//     navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
//       userVideo.current.srcObject = stream;
//       userStream.current = stream;

//       socket.emit("join-room", { roomId: meetingId, userId: socket.id });

//       socket.on("user-joined", (userId) => {
//         const peer = createPeer(userId, socket.id, stream);
//         peersRef.current.push({ peerID: userId, peer });
//         setPeers((prevPeers) => [...prevPeers, peer]);
//       });

//       socket.on("user-signal", (payload) => {
//         const peer = addPeer(payload.signal, payload.callerId, stream);
//         peersRef.current.push({ peerID: payload.callerId, peer });
//         setPeers((prevPeers) => [...prevPeers, peer]);
//       });

//       socket.on("receive-return", (payload) => {
//         const item = peersRef.current.find((p) => p.peerID === payload.id);
//         if (item) {
//           item.peer.signal(payload.signal);
//         }
//       });

//       socket.on("receive-message", (msg) => {
//         setMessages((prev) => [...prev, msg]);
//       });

//       socket.on("receive-screen", (data) => {
//         const screenVideo = document.getElementById("screen-share");
//         screenVideo.srcObject = data;
//       });
//     });
//   }, []);

//   const createPeer = (userToSignal, callerId, stream) => {
//     const peer = new Peer({ initiator: true, trickle: false, stream});
//     peer.on("signal", (signal) => {
//       socket.emit("send-signal", { userToSignal, callerId, signal });
//     });
//     return peer;
//   };

//   const addPeer = (incomingSignal, callerId, stream) => {
//     const peer = new Peer({ initiator: false, trickle: false, stream });
//     peer.signal(incomingSignal);
//     peer.on("signal", (signal) => {
//       socket.emit("return-signal", { signal, callerId });
//     });
//     return peer;
//   };

//   const sendMessage = () => {
//     socket.emit("send-message", message);
//     setMessages((prev) => [...prev, `You: ${message}`]);
//     setMessage("");
//   };

//   const shareScreen = async () => {
//     const screenStream = await navigator.mediaDevices.getDisplayMedia({ video: true });
//     socket.emit("screen-share", screenStream);
//   };

//   return (
//     <div>
//       <h2>Meeting ID: {meetingId}</h2>
//       <div style={{ display: "flex" }}>
//         <video ref={userVideo} autoPlay muted style={{ width: "300px" }} />
//         {peers.map((peer, idx) => (
//           <Video key={idx} peer={peer} />
//         ))}
//         <video id="screen-share" autoPlay style={{ width: "300px" }} />
//       </div>

//       <button onClick={shareScreen}>Share Screen</button>

//       <div>
//         <h3>Chat</h3>
//         <div style={{ maxHeight: "150px", overflowY: "scroll" }}>
//           {messages.map((msg, i) => (
//             <div key={i}>{msg}</div>
//           ))}
//         </div>
//         <input value={message} onChange={(e) => setMessage(e.target.value)} />
//         <button onClick={sendMessage}>Send</button>
//       </div>
//     </div>
//   );
// }

// function Video({ peer }) {
//   const ref = useRef();

//   useEffect(() => {
//     peer.on("stream", (stream) => {
//       ref.current.srcObject = stream;
//     });
//   }, []);

//   return <video ref={ref} autoPlay style={{ width: "300px" }} />;
// }

// export default MeetingRoom;



import React, { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import Peer from "simple-peer";

const socket = io("http://localhost:3000"); // Change if using different backend

function MeetingRoom({ meetingId }) {
  const [peers, setPeers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  const userVideo = useRef();
  const peersRef = useRef([]);
  const userStream = useRef();

  useEffect(() => {
    // Get User Media
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then((stream) => {
        console.log("User Media Stream: ", stream);

        userVideo.current.srcObject = stream;
        userStream.current = stream;

        socket.emit("join-room", { roomId: meetingId, userId: socket.id });

        socket.on("user-joined", (userId) => {
          console.log("User joined: ", userId);
          const peer = createPeer(userId, socket.id, stream);
          peersRef.current.push({ peerID: userId, peer });
          setPeers((prevPeers) => [...prevPeers, peer]);
        });

        socket.on("user-signal", (payload) => {
          console.log("User signal received: ", payload);
          const peer = addPeer(payload.signal, payload.callerId, stream);
          peersRef.current.push({ peerID: payload.callerId, peer });
          setPeers((prevPeers) => [...prevPeers, peer]);
        });

        socket.on("receive-return", (payload) => {
          console.log("Receive return signal: ", payload);
          const item = peersRef.current.find((p) => p.peerID === payload.id);
          if (item) {
            item.peer.signal(payload.signal);
          }
        });

        socket.on("receive-message", (msg) => {
          setMessages((prev) => [...prev, msg]);
        });

        socket.on("receive-screen", (data) => {
          console.log("Received screen share stream: ", data);
          const screenVideo = document.getElementById("screen-share");
          screenVideo.srcObject = data;
        });
      })
      .catch((err) => {
        console.error("Error accessing media devices: ", err);
      });
  }, [meetingId]);

  const iceConfig = {
    iceServers: [
      { urls: "stun:stun.l.google.com:19302" }, // Google's STUN server
    ],
  };

  const createPeer = (userToSignal, callerId, stream) => {
    console.log("Creating peer for: ", userToSignal);
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream,
      config: iceConfig,
    });

    peer.on("signal", (signal) => {
      console.log("Sending signal to peer: ", userToSignal);
      socket.emit("send-signal", { userToSignal, callerId, signal });
    });

    peer.on("stream", (remoteStream) => {
      console.log("Peer stream received: ", remoteStream);
      const videoElement = document.createElement("video");
      videoElement.srcObject = remoteStream;
      videoElement.autoplay = true;
      videoElement.playsInline = true;
      videoElement.style.width = "300px";
      document.getElementById("video-grid").appendChild(videoElement);
    });

    return peer;
  };

  const addPeer = (incomingSignal, callerId, stream) => {
    console.log("Adding peer for: ", callerId);
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream,
      config: iceConfig,
    });

    peer.signal(incomingSignal);

    peer.on("signal", (signal) => {
      console.log("Returning signal to peer: ", callerId);
      socket.emit("return-signal", { signal, callerId });
    });

    peer.on("stream", (remoteStream) => {
      console.log("Remote stream received: ", remoteStream);
      const videoElement = document.createElement("video");
      videoElement.srcObject = remoteStream;
      videoElement.autoplay = true;
      videoElement.playsInline = true;
      videoElement.style.width = "300px";
      document.getElementById("video-grid").appendChild(videoElement);
    });

    return peer;
  };

  const sendMessage = () => {
    if (message.trim()) {
      socket.emit("send-message", message);
      setMessages((prev) => [...prev, `You: ${message}`]);
      setMessage("");
    }
  };

  const shareScreen = async () => {
    try {
      const screenStream = await navigator.mediaDevices.getDisplayMedia({ video: true });
      socket.emit("screen-share", screenStream);
    } catch (error) {
      console.error("Error sharing screen: ", error);
    }
  };

  return (
    <div>
      <h2>Meeting ID: {meetingId}</h2>
      <div style={{ display: "flex", gap: "10px" }}>
        <video ref={userVideo} autoPlay muted style={{ width: "300px" }} />
        <div id="video-grid"></div>
        <video id="screen-share" autoPlay style={{ width: "300px" }} />
      </div>

      <button onClick={shareScreen}>Share Screen</button>

      <div>
        <h3>Chat</h3>
        <div style={{ maxHeight: "150px", overflowY: "scroll" }}>
          {messages.map((msg, i) => (
            <div key={i}>{msg}</div>
          ))}
        </div>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message"
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default MeetingRoom;
