import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserCog, FaUserGraduate, FaSignOutAlt, FaHome } from 'react-icons/fa'; 
import { logout } from '../utils/auth';  // Ensure logout function exists

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');  // Redirect after logout
  };

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <h2>
          <FaHome className="icon" /> School Dashboard
        </h2>
      </div>
      <ul className="sidebar-menu">
        <li>
          <Link to="/admin">
            <FaUserCog className="icon" />
            <span>Admin</span>
          </Link>
        </li>
        <li>
          <Link to="/student">
            <FaUserGraduate className="icon" />
            <span>Student</span>
          </Link>
        </li>
        <li>
          <button onClick={handleLogout} className="logout-button">
            <FaSignOutAlt className="icon" />
            <span>Logout</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
