// src/pages/ContentListPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ContentListPage = () => {
  const [contents, setContents] = useState([]);

  useEffect(() => {
    const fetchContents = async () => {
      const res = await axios.get('http://localhost:5000/api/contents');
      setContents(res.data);
    };
    fetchContents();
  }, []);

  return (
    <div className="container mt-5">
      <h2>Content List</h2>
      <Link to="/add-content" className="btn btn-success mb-3">Add New Content</Link>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Title</th>
            <th>Body</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contents.map(content => (
            <tr key={content._id}>
              <td>{content.title}</td>
              <td>{content.body}</td>
              <td>
                <Link to={`/edit-content/${content._id}`} className="btn btn-primary mr-2">Edit</Link>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContentListPage;
