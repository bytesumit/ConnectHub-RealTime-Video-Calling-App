import React, { useEffect, useState } from "react";
import axios from "axios";

function History() {
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/history").then((res) => {
      setMeetings(res.data);
    });
  }, []);

  return (
    <div>
      <h3>📅 Meeting History</h3>
      {meetings.map((m, i) => (
        <div key={i}>
          <strong>ID:</strong> {m.meetingId} | <strong>Users:</strong>{" "}
          {m.participants.length} | <strong>Date:</strong>{" "}
          {new Date(m.createdAt).toLocaleString()}
        </div>
      ))}
    </div>
  );
}

export default History;
