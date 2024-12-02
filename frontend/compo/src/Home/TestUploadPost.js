import React, { useState } from 'react';
import axios from 'axios';
import './TestUploadPost.css';

function TestUploadPost() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    gender: '',
    age: '',
    type: 'Found',
    hair_type: '',
    hair_color: '',
    skin_color: '',
    eye_color: '',
   /*  isClosed: true, */
    postImages: [] // Updated to store multiple images
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files); // Convert FileList to array
    setFormData({ ...formData, postImages: files });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZmIwOTMwYTM0ODE1NTg3ZGIwMWExZSIsImVtYWlsIjoiYWJkYWxyaG1hbmFobWVkNzIxQGdtYWlsLmNvbSIsImlhdCI6MTcxMzg4MzYyMCwiZXhwIjoxNzE0MTQyODIwfQ.JSdlLrYk-v-ODvQXV-HhvglDTj7eIgW1S001c0-PuAceyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MDJlMzJlNGM2Yzc5MGQ4ZDY2NDM4YSIsImVtYWlsIjoiZGFsaWRhQGdtYWlsLmNvbSIsImlhdCI6MTcxMzg4NjYyMywiZXhwIjoxNzE0MTQ1ODIzfQ.IZezky9TlG-mg6qasxtlrzGw7skxTZTl3jrCc8R9tiw";
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          token: `task__${token}`
        }
      };
      const formDataToSend = new FormData();
      for (const key in formData) {
        if (key === 'postImages') {
          formData[key].forEach((postImage) => {
            console.log('Appending postImages with value:', postImage);
            formDataToSend.append('postImages', postImage);
          });
        } else {
          console.log(`Appending ${key} with value:`, formData[key]);
          formDataToSend.append(key, formData[key]);
        }
        
      }
      

      const response = await axios.post('https://lost-seven.vercel.app/post/newpost', formDataToSend, config);
      console.log('Upload success:', response.data);
      
      setFormData({
        firstName: '',
        lastName: '',
        address: '',
        gender: '',
        age: '',
        type: 'Found',
        hair_type: '',
        hair_color: '',
        skin_color: '',
        eye_color: '',
       /*  isClosed: false, */
        postImages: []
      });
    } catch (error) {
      console.error('Error uploading post:', error);
    }
  };

  return (
    <div className="upload-post-container">
      <h2>Upload Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select id="gender" name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="hair_type">Hair Type:</label>
          <input type="text" id="hair_type" name="hair_type" value={formData.hair_type} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="hair_color">Hair Color:</label>
          <input type="text" id="hair_color" name="hair_color" value={formData.hair_color} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="skin_color">Skin Color:</label>
          <input type="text" id="skin_color" name="skin_color" value={formData.skin_color} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="eye_color">Eye Color:</label>
          <input type="text" id="eye_color" name="eye_color" value={formData.eye_color} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="type">Type:</label>
          <select id="type" name="type" value={formData.type} onChange={handleChange} required>
            <option value="Found">Found</option>
            <option value="Lost">Lost</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="postImages">Upload postImages:</label>
          <input type="file" id="postImages" name="postImages" accept="postImages/*" multiple onChange={handleImageChange} required />
        </div>
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default TestUploadPost;
