import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './Sidebar';
import Calendar from './Calendar';
import { CSSTransition } from 'react-transition-group';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function HomePageProfile() {
  const [showCalendar, setShowCalendar] =useState(true);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  //

  useEffect(() => {
    const verifyCookie = async () => {
      const { data } = await axios.post(
        "http://localhost:3000",
        {},
        { withCredentials: true }
      );
      const { status, user } = data;
      setUsername(user);
    };
    verifyCookie();
  }, [navigate]);
  

  return (
    <div className="d-flex" style={{ height: '100vh' }}>
      <ToastContainer />
      <CSSTransition
        in={showCalendar}
        timeout={300}
        classNames="fade"
        unmountOnExit
      >
        <Sidebar setShowCalendar={setShowCalendar} />
      </CSSTransition>
      <CSSTransition
        in={showCalendar}
        timeout={300}
        classNames="slide"
        unmountOnExit
      >
        <Calendar />
      </CSSTransition>

      <ToastContainer />
    </div>
  );
}

export default HomePageProfile;