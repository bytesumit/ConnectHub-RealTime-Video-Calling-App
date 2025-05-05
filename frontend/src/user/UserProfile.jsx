// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Button, Modal, Form, Card, ListGroup, Badge, Container, Row, Col } from "react-bootstrap";
// import { 
//   Person, Envelope, Calendar, ClockHistory, 
//   Pencil, Moon, Sun, CheckCircle, XCircle 
// } from "react-bootstrap-icons";

// import { useAuth } from "../AuthContext";

// const UserProfile = () => {
//   // User Data (Can be fetched from API)

// //   const {user} = useAuth();
//   const [user, setUser] = useState({
//     name: "John Doe",
//     email: "john.doe@example.com",
//     joinDate: "15 Jan 2023",
//     meetings: [
//       { id: 1, title: "Team Sync", date: "10 May 2024", duration: "45 mins" },
//       { id: 2, title: "Client Call", date: "12 May 2024", duration: "30 mins" },
//       { id: 3, title: "Project Review", date: "14 May 2024", duration: "1 hour" },
//     ],
//   });

//   // Edit Modal State
//   const [showEditModal, setShowEditModal] = useState(false);
//   const [editedName, setEditedName] = useState(user.name);

//   // Dark Mode Toggle
//   const [darkMode, setDarkMode] = useState(false);

//   // Handle Profile Update
//   const handleSaveChanges = () => {
//     setUser({ ...user, name: editedName });
//     setShowEditModal(false);
//   };

//   return (
//     <div className={darkMode ? "bg-dark text-white min-vh-100" : "bg-light min-vh-100"}>
//       <Container className="py-4">
//         {/* Header with Dark Mode Toggle */}
//         <Row className="mb-4">
//           <Col className="d-flex justify-content-between align-items-center">
//             <motion.h1 
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               className="mb-0"
//             >
//               My Profile
//             </motion.h1>
//             <Button 
//               variant={darkMode ? "light" : "dark"} 
//               onClick={() => setDarkMode(!darkMode)}
//               className="d-flex align-items-center gap-2"
//             >
//               {darkMode ? <Sun /> : <Moon />}
//               {darkMode ? "Light Mode" : "Dark Mode"}
//             </Button>
//           </Col>
//         </Row>

//         {/* User Info Card */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: 0.2, duration: 0.5 }}
//         >
//           <Card className={`mb-4 ${darkMode ? "bg-secondary text-white" : ""}`}>
//             <Card.Body>
//               <Row>
//                 <Col md={3} className="text-center mb-3 mb-md-0">
//                   <div 
//                     className="rounded-circle bg-primary d-flex align-items-center justify-content-center" 
//                     style={{ width: "120px", height: "120px", margin: "0 auto" }}
//                   >
//                     <Person size={48} className="text-white" />
//                   </div>
//                 </Col>
//                 <Col md={9}>
//                   <div className="d-flex justify-content-between align-items-start">
//                     <div>
//                       <h2>{user.name}</h2>
//                       <p className="mb-1">
//                         <Envelope className="me-2" /> {user.email}
//                       </p>
//                       <p className="mb-0">
//                         <Calendar className="me-2" /> Joined on {user.joinDate}
//                       </p>
//                     </div>
//                     <Button 
//                       variant="outline-primary" 
//                       onClick={() => setShowEditModal(true)}
//                       className="d-flex align-items-center gap-1"
//                     >
//                       <Pencil size={16} /> Edit
//                     </Button>
//                   </div>
//                 </Col>
//               </Row>
//             </Card.Body>
//           </Card>
//         </motion.div>

//         {/* Meeting History */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4, duration: 0.5 }}
//         >
//           <Card className={darkMode ? "bg-secondary text-white" : ""}>
//             <Card.Header className="d-flex align-items-center gap-2">
//               <ClockHistory /> Meeting History
//             </Card.Header>
//             <ListGroup variant="flush">
//               {user.meetings.map((meeting, index) => (
//                 <ListGroup.Item 
//                   key={meeting.id} 
//                   className={darkMode ? "bg-dark text-white" : ""}
//                 >
//                   <div className="d-flex justify-content-between align-items-center">
//                     <div>
//                       <h5 className="mb-1">{meeting.title}</h5>
//                       <small className="text-muted">{meeting.date} • {meeting.duration}</small>
//                     </div>
//                     <Badge bg="info">Completed</Badge>
//                   </div>
//                 </ListGroup.Item>
//               ))}
//             </ListGroup>
//           </Card>
//         </motion.div>
//       </Container>

//       {/* Edit Profile Modal */}
//       <Modal show={showEditModal} onHide={() => setShowEditModal(false)} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>Edit Profile</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group className="mb-3">
//               <Form.Label>Name</Form.Label>
//               <Form.Control 
//                 type="text" 
//                 value={editedName} 
//                 onChange={(e) => setEditedName(e.target.value)} 
//               />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={() => setShowEditModal(false)}>
//             Cancel
//           </Button>
//           <Button variant="primary" onClick={handleSaveChanges}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// export default UserProfile;






import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Button, Modal, Form, Card, ListGroup, 
  Badge, Container, Row, Col, Image 
} from "react-bootstrap";
import { 
  Person, Envelope, Calendar, ClockHistory, 
  Pencil, Moon, Sun, CheckCircle, XCircle, Gear, 
  PersonCheck, Clock, ArrowRepeat 
} from "react-bootstrap-icons";
import { useAuth } from "../AuthContext";
import styled from "@emotion/styled";

// Custom Styled Components
const ProfileCard = styled(Card)`
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.2);
  }
`;

const MeetingItem = styled(ListGroup.Item)`
  transition: all 0.2s ease;
  &:hover {
    background-color: rgba(0,123,255,0.05) !important;
  }
`;

const UserProfile = () => {
  const { user, setUser } = useAuth();
  const [showEditModal, setShowEditModal] = useState(false);
  const [editedData, setEditedData] = useState({ name: user.name, email: user.email });
  const [darkMode, setDarkMode] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const handleSaveChanges = () => {
    setIsSaving(true);
    setTimeout(() => {
      setUser(editedData);
      setIsSaving(false);
      setShowEditModal(false);
    }, 1000); // Simulate API call
  };

  return (
    <div className={darkMode ? "bg-dark text-white min-vh-100" : "bg-light min-vh-100"}>
      <Container className="py-5">
        {/* Header */}
        <Row className="mb-5">
          <Col className="d-flex justify-content-between align-items-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="display-5 fw-bold mb-0">
                <PersonCheck className="me-2" /> My Profile
              </h1>
              <p className="text-muted mb-0">Manage your account and meeting history</p>
            </motion.div>
            
            <div className="d-flex gap-3">
              <Button 
                variant={darkMode ? "light" : "dark"} 
                onClick={() => setDarkMode(!darkMode)}
                className="d-flex align-items-center gap-2"
              >
                {darkMode ? <Sun /> : <Moon />}
              </Button>
              <Button variant="outline-primary">
                <Gear /> Settings
              </Button>
            </div>
          </Col>
        </Row>

        {/* User Info Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <ProfileCard className={`mb-5 ${darkMode ? "bg-dark" : ""}`}>
            <Card.Body className="p-4">
              <Row className="align-items-center">
                <Col md={3} className="text-center mb-4 mb-md-0">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="position-relative"
                  >
                    <Image 
                      src="https://ui-avatars.com/api/?name=${user.name}&background=random"
                      roundedCircle
                      fluid
                      style={{ width: "150px", height: "150px", objectFit: "cover" }}
                    />
                    <Button 
                      variant="primary" 
                      size="sm" 
                      className="position-absolute bottom-0 end-0 rounded-circle p-2"
                      onClick={() => setShowEditModal(true)}
                    >
                      <Pencil />
                    </Button>
                  </motion.div>
                </Col>
                <Col md={9}>
                  <div className="ps-md-4">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <div>
                        <h2 className="mb-1">{user.username}</h2>
                        <p className="text-muted mb-2">
                          <Envelope className="me-2" /> {user.email}
                        </p>
                        <Badge bg="info" className="d-inline-flex align-items-center">
                          <Clock className="me-1" /> Member since {user.createdAt}
                        </Badge>
                      </div>
                    </div>
                    <div className="d-flex gap-3">
                      <Button variant="primary" className="d-flex align-items-center gap-2">
                        <ArrowRepeat /> Refresh Data
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </ProfileCard>
        </motion.div>

        {/* Meeting History */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Card className={`${darkMode ? "bg-dark" : ""}`}>
            <Card.Header className={`d-flex align-items-center justify-content-between ${darkMode ? "bg-secondary" : "bg-light"}`}>
              <h5 className="mb-0 d-flex align-items-center">
                <ClockHistory className="me-2" /> Meeting History
              </h5>
              <Badge pill bg="primary">
               {user.meetings.length}
              </Badge>
            </Card.Header>
            <ListGroup variant="flush">
              <AnimatePresence>
                {user.meetings.map((meeting) => (
                  <motion.div
                    key={meeting._id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <MeetingItem className={`${darkMode ? "bg-secondary text-white" : ""}`}>
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <h5 className="mb-1">{meeting.meetingId}</h5>
                          <small className={`${darkMode ? "text-light" : "text-muted"}`}>
                            20march • 2024
                          </small>
                        </div>
                        <Badge bg="success" className="d-flex align-items-center">
                          <CheckCircle className="me-1" /> Completed
                        </Badge>
                      </div>
                    </MeetingItem>
                  </motion.div>
                ))}
              </AnimatePresence>
            </ListGroup>
          </Card>
        </motion.div>
      </Container>

      {/* Edit Profile Modal */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)} centered>
        <Modal.Header closeButton className={darkMode ? "bg-dark text-white" : ""}>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body className={darkMode ? "bg-secondary text-white" : ""}>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control 
                type="text" 
                value={editedData.name} 
                onChange={(e) => setEditedData({...editedData, name: e.target.value})} 
                className={darkMode ? "bg-dark text-white" : ""}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control 
                type="email" 
                value={editedData.email} 
                onChange={(e) => setEditedData({...editedData, email: e.target.value})}
                className={darkMode ? "bg-dark text-white" : ""}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className={darkMode ? "bg-dark" : ""}>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            Cancel
          </Button>
          <Button 
            variant="primary" 
            onClick={handleSaveChanges}
            disabled={isSaving}
          >
            {isSaving ? "Saving..." : "Save Changes"}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UserProfile;