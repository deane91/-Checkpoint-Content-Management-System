// src/components/FileUpload.js
import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [uploadedFilePath, setUploadedFilePath] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFileUpload = async () => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await axios.post('http://localhost:5000/api/media/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setUploadedFilePath(res.data.filePath);
    } catch (err) {
      console.error('Error uploading file:', err);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Upload Media</h2>
      <div className="form-group">
        <input type="file" className="form-control" onChange={handleFileChange} />
      </div>
      <button className="btn btn-primary" onClick={handleFileUpload}>Upload</button>
      {uploadedFilePath && <p>File uploaded to: {uploadedFilePath}</p>}
    </div>
  );
};

export default FileUpload;
