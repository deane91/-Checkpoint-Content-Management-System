// src/pages/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => (
  <div className="container mt-5">
    <h2>Admin Dashboard</h2>
    <div className="list-group">
      <Link to="/contents" className="list-group-item list-group-item-action">Manage Content</Link>
      <Link to="/add-content" className="list-group-item list-group-item-action">Add New Content</Link>
      <Link to="/media" className="list-group-item list-group-item-action">Manage Media</Link>
    </div>
  </div>
);

export default Dashboard;
