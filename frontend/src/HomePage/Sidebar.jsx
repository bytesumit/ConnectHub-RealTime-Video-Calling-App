

import React from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { Link,useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import './Sidebar.css'; // Custom CSS file for additional styling
import { useAuth } from '../AuthContext';

function Sidebar({ setShowCalendar }) {

  const { setUser , user } = useAuth(); // ✅ Correct one

  const link = `/user/${user._id}`;
  const handleButtonClick = (action) => {
    alert(`${action} clicked!`);
    // You can replace alert with actual functionality later
  };
const navigate = useNavigate();
  const handleLogout = async ()=>{
    try{
      axios.get('http://localhost:3000/logout', {
        withCredentials: true, // this is equivalent to credentials: 'include'
      }).then(res => {
        const msg = res.data.message;
        setUser(null)
           toast.success(msg, {
                  position: "bottom-right",
                });
                setTimeout(() => {
                  navigate('/');
                }, 1000);
          
      }).catch(err => {
        console.error('Logout error:', err);
      });

    }catch(err){
      console.log(err)
    }
     
  }
  return (
    <div className="sidebar-container">
      <div className="mt-2  sidebar bg-glass p-4">
        <h5 className="text-white mb-4">Meeting Options</h5>

        <Link to={link} style={{textDecoration :"none"}}>
        <Button
          variant="outline-light"
          className="sidebar-btn mb-3 w-100 rounded-pill"
        >
          <i class="fa-solid fa-user"></i> User Profile
        </Button>
        </Link>



        <Link to="/meeting/create" style={{textDecoration :"none"}}>
        <Button
          variant="outline-light"
          className="sidebar-btn mb-3 w-100 rounded-pill"
        >
          <i className="bi bi-camera-video me-2"></i> New Meeting
        </Button>
        </Link>
        <Link to="/join" style={{textDecoration :"none"}}>
        <Button
          variant="outline-light"
          className="sidebar-btn mb-3 w-100 rounded-pill"
        >
          <i className="bi bi-plus-lg me-2"></i> Join
        </Button>
        </Link>
        <Button
          variant="outline-light"
          className="sidebar-btn mb-3 w-100 rounded-pill"
          onClick={() => handleButtonClick('Schedule')}
        >
          <i className="bi bi-calendar me-2"></i> Schedule
        </Button>
        <Button
          variant="outline-light"
          className="sidebar-btn mb-3 w-100 rounded-pill"
          onClick={() => handleButtonClick('Share')}
        >
          <i className="bi bi-upload me-2"></i> Share
        </Button>
        <Button
          variant="outline-danger"
          className="sidebar-btn mb-3 w-100 rounded-pill"
          onClick={handleLogout}
        >
          <i class="fa-solid fa-right-from-bracket"></i> Logout
        </Button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Sidebar;