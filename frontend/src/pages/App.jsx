import React, { useState } from "react";
import History from "./History";
import JoinPage from "./JoinPage";
import MeetingRoom from "./MeetingRoom";

function App() {
  const [joined, setJoined] = useState(false);
  const [meetingId, setMeetingId] = useState("");

  return (
    <div>
      {!joined ? (
        <JoinPage setJoined={setJoined} setMeetingId={setMeetingId} />
      ) : (
        <MeetingRoom meetingId={meetingId} />
      )}
      <History />
    </div>
  );
}

export default App;
