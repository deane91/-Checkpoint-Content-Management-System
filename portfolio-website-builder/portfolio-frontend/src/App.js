// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Dashboard from './pages/Dashboard';
import ContentListPage from './pages/ContentListPage';
import AddEditContentPage from './pages/AddEditContentPage';
import FileUpload from './components/FileUpload';
import PrivateRoute from './components/PrivateRoute';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="/contents" element={<PrivateRoute><ContentListPage /></PrivateRoute>} />
          <Route path="/add-content" element={<PrivateRoute><AddEditContentPage /></PrivateRoute>} />
          <Route path="/edit-content/:id" element={<PrivateRoute><AddEditContentPage /></PrivateRoute>} />
          <Route path="/media" element={<PrivateRoute><FileUpload /></PrivateRoute>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
