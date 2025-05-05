import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function JoinPage({ setJoined, setMeetingId }) {
  const [inputId, setInputId] = useState("");

  const handleCreate = () => {
    const newId = uuid().slice(0, 8);
    setMeetingId(newId);
    setJoined(true);
  };

  const handleJoin = () => {
    if (inputId.trim()) {
      setMeetingId(inputId.trim());
      setJoined(true);
    }
  };

  return (
    <div className="join-page">
      <h1>🎥 ConnectHub</h1>
      <button onClick={handleCreate}>Create New Meeting</button>
      <input
        placeholder="Enter Meeting ID"
        value={inputId}
        onChange={(e) => setInputId(e.target.value)}
      />
      <button onClick={handleJoin}>Join Meeting</button>
    </div>
  );
}

export default JoinPage;
