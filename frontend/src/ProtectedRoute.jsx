// ProtectedRoute.js
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from './AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();
  console.log(user);

  if (!user) {
    toast.warning("You must be logged in first", {
      position: "top-center",
      autoClose: 3000,
    });

    return <Navigate to="/SignIn" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
