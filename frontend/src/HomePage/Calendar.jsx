// import React, { useState, useEffect } from 'react';

// function Calendar() {
//   const [currentTime, setCurrentTime] = useState(new Date());

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentTime(new Date());
//     }, 1000);
//     return () => clearInterval(timer);
//   }, []);

//   const formattedTime = currentTime.toLocaleTimeString();
//   const formattedDate = currentTime.toLocaleDateString('en-US', {
//     weekday: 'long',
//     month: 'long',
//     day: 'numeric',
//   });

//   return (
//     <div className="p-3 flex-grow-1">
//       <div className="card p-3">
//         <h2>{formattedTime}</h2>
//         <p>{formattedDate}</p>
//         <p className="text-muted">
//           Respond to events, see other's availability and more by connecting your
//           calendar
//         </p>
//         <div className="text-center mt-4">
//           <p>No meetings scheduled.</p>
//           <button className="btn btn-outline-primary mt-2">
//             + Schedule a meeting
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Calendar;

// 

import React, { useState, useEffect } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import './Calendar.css'; // Custom CSS file

function Calendar() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showModal, setShowModal] = useState(false);
  const [events, setEvents] = useState([
    { id: 1, title: 'Team Sync', time: '10:00 AM', date: 'April 15, 2025' },
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString();
  const formattedDate = currentTime.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });

  const handleSchedule = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const addEvent = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const time = e.target.time.value;
    const date = e.target.date.value;
    setEvents([...events, { id: Date.now(), title, time, date }]);
    handleClose();
  };

  // Dummy weather data (can be replaced with API)
  const weather = {
    temp: 22,
    condition: 'Sunny',
    icon: 'bi-sun-fill',
  };

  return (
    <div className="calendar-container p-4">
      <div className="glass-card p-4 mb-4">
        <div className="time-display">
          <h1 className="display-4 text-white">{formattedTime}</h1>
          <p className="lead text-white-50">{formattedDate}</p>
        </div>
        <p className="text-white-50 mt-3">
          Connect your calendar to respond to events, check availability, and
          more.
        </p>
        <Button variant="outline-light" className="mt-3" onClick={handleSchedule}>
          <i className="bi bi-plus-lg me-2"></i> Schedule a Meeting
        </Button>
      </div>

      {/* Weather Widget */}
      <div className="glass-card p-3 mb-4">
        <h5 className="text-white">Weather Today</h5>
        <div className="d-flex align-items-center">
          <i className={`bi ${weather.icon} text-warning fs-2 me-3`}></i>
          <div>
            <p className="text-white mb-0">{weather.temp}°C</p>
            <p className="text-white-50 small">{weather.condition}</p>
          </div>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="glass-card p-3">
        <h5 className="text-white">Upcoming Events</h5>
        {events.length > 0 ? (
          <ul className="list-unstyled">
            {events.map((event) => (
              <li key={event.id} className="text-white mb-2">
                <i className="bi bi-calendar-check me-2"></i>
                {event.title} - {event.time}, {event.date}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-white-50">No events scheduled.</p>
        )}
      </div>

      {/* Modal for Scheduling */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton className="bg-dark text-white">
          <Modal.Title>Schedule New Meeting</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark text-white">
          <Form onSubmit={addEvent}>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" name="title" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Time</Form.Label>
              <Form.Control type="time" name="time" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" name="date" required />
            </Form.Group>
            <Button variant="primary" type="submit">
              Add Event
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Calendar;