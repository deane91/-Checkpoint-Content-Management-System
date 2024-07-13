// src/pages/AddEditContentPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const AddEditContentPage = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const fetchContent = async () => {
        const res = await axios.get(`http://localhost:5000/api/contents/${id}`);
        setTitle(res.data.title);
        setBody(res.data.body);
      };
      fetchContent();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await axios.put(`http://localhost:5000/api/contents/${id}`, { title, body });
    } else {
      await axios.post('http://localhost:5000/api/contents', { title, body });
    }
    navigate('/contents');
  };

  return (
    <div className="container mt-5">
      <h2>{id ? 'Edit Content' : 'Add Content'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title:</label>
          <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Body:</label>
          <textarea className="form-control" value={body} onChange={(e) => setBody(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary">{id ? 'Update' : 'Add'}</button>
      </form>
    </div>
  );
};

export default AddEditContentPage;
