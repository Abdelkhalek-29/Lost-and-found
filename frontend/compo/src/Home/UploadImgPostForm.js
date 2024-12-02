/* import React, { useState } from 'react';
import './UploadImgPostForm.css';
import axios from 'axios';

function UploadImgPostForm({ formData, onClose }) {
  const [images, setImages] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      const newImages = Array.from(files).slice(0, 6 - images.length); // Limit max 6 images
      setImages([...images, ...newImages]);
    }
  };

  const handleRemoveImage = (index) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
  };

  const handlePost = async () => {
    if (images.length < 2 || images.length > 6) {
      setErrorMessage('Please Upload Between 2 and 6 images.');
    } else {
      const formDataWithImages = new FormData();
      images.forEach((image) => {
        formDataWithImages.append('postImages', image);
      });
  
      // Append other form data properties
      formDataWithImages.append('firstName', formData.firstName);
      formDataWithImages.append('lastName', formData.lastName);
      formDataWithImages.append('address', formData.address);
      formDataWithImages.append('gender', formData.gender);
      formDataWithImages.append('age', formData.age);
      formDataWithImages.append('type', formData.type); 
      formDataWithImages.append('hair_type', formData.hair_type);
      formDataWithImages.append('hair_color', formData.hair_color);
      formDataWithImages.append('skin_color', formData.skin_color);
      formDataWithImages.append('eye_color', formData.eye_color);
  
      try {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MDJlMzJlNGM2Yzc5MGQ4ZDY2NDM4YSIsImVtYWlsIjoiZGFsaWRhQGdtYWlsLmNvbSIsImlhdCI6MTcxMzg4NjYyMywiZXhwIjoxNzE0MTQ1ODIzfQ.IZezky9TlG-mg6qasxtlrzGw7skxTZTl3jrCc8R9tiw';
  
        const response = await axios.post("https://lost-seven.vercel.app/post/newpost", formDataWithImages, {
          headers: {
            'Content-Type': 'multipart/form-data',
            token: `task__${token}` // Use Authorization header for token
          }
        });
  
        if (response.data.success) {
          alert('Post uploaded successfully.');
          onClose(); // Close the form
        } else {
          alert('Error: ' + response.data.message);
        }
      } catch (error) {
        console.error('Error:', error);
        if (error.response) {
          console.log('Error Response:', error.response.data);
          alert('Error: ' + error.response.data.message); 
        } else {
          alert('Error: ' + error.message); 
        }
      }
    }
  };
  

  return (
    <div className="dialogpost">
      <div className="dialogpost-content">
        <form>
          <div className="form-group">
            <label className='Labeltext' htmlFor="imageUpload">Upload Images</label>
            <div className="uploadPhoto">
              <label htmlFor="imageUpload" className="custom-file-upload">
                <div className="icon">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path className="svgcolor" d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z" fill="#000000"></path>
                  </svg>
                </div>
                <div className="text">
                  <span>Click to upload image</span>
                </div>
                <input id="imageUpload" type="file" accept="image/*" onChange={handleChange} multiple className="form-control" />
              </label>
            </div>
          </div>
          <div className="image-preview">
            {images.map((image, index) => (
              <div key={index} className="image-preview-item">
                <img src={URL.createObjectURL(image)} alt={`Preview ${index}`} />
                <button className="btnRemoveImg" type="button" onClick={() => handleRemoveImage(index)}>X</button>
              </div>
            ))}
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <div className="postBtn">
            <button type="button" className="buttonClose" onClick={onClose}>
              Back
            </button>
            <button type="button" className="buttonPost" onClick={handlePost}>
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UploadImgPostForm;
 */
import React, { useState } from 'react';
import './UploadImgPostForm.css';
import axios from 'axios';
import { useTheme } from '../Theme/ThemeContext'; 

function UploadImgPostForm({ formData, onClose ,onBack}) {
  const [images, setImages] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const { darkMode } = useTheme();

  const handleChange = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      const newImages = Array.from(files).slice(0, 6 - images.length); 
      setImages([...images, ...newImages]);
    }
  };

  const handleRemoveImage = (index) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
  };

  const handlePost = async () => {
    if (images.length < 2 || images.length > 6) {
      setErrorMessage('Please Upload Between 2 and 6 images.');
    } else {
      const formDataWithImages = new FormData();
      images.forEach((image) => {
        formDataWithImages.append('postImages', image);
      });
  
      formDataWithImages.append('firstName', formData.firstName);
      formDataWithImages.append('lastName', formData.lastName);
      formDataWithImages.append('address', formData.address);
      formDataWithImages.append('gender', formData.gender);
      formDataWithImages.append('age', formData.age);
      formDataWithImages.append('type', formData.type); 
      formDataWithImages.append('hair_type', formData.hair_type);
      formDataWithImages.append('hair_color', formData.hair_color);
      formDataWithImages.append('skin_color', formData.skin_color);
      formDataWithImages.append('eye_color', formData.eye_color);
  
      const userInfoString = localStorage.getItem('user-info');
      const userInfo = JSON.parse(userInfoString);
      const token = userInfo.results;
     
      try {
  
        const response = await axios.post("https://lost-seven.vercel.app/post/newpost", formDataWithImages, {
          headers: {
            'Content-Type': 'multipart/form-data',
            token: `task__${token}` // Use Authorization header for token
          }
        });

  
        if (response.data.success) {
          alert('Post uploaded successfully.');
          onClose(); // Close the form
          setTimeout(() => {
            window.location.reload(); // Reload the page
          }, 1000);
        } else {
          alert('Error: ' + response.data.message);
        }
      } catch (error) {
        console.error('Error:', error);
        if (error.response) {
          console.log('Error Response:', error.response.data);
          alert('Error: ' + error.response.data.message); 
        } else {
          alert('Error: ' + error.message); 
        }
      }
    }
  };
  

  return (
    <div className={`dialogpost ${darkMode ? 'dark' : ''}`}> 
      <div className="dialogpost-content">
        <form>
<div className="form-group">
<label className='Labeltext' htmlFor="imageUpload">Upload Images</label>
<div className="uploadPhoto">
<label htmlFor="imageUpload" className="custom-file-upload">
<div className="icon">
<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path className="svgcolor" d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z" fill="#000000"></path>
</svg>
</div>
<div className="text">
<span>Click to upload image</span>
</div>
<input id="imageUpload" type="file" accept="image/*" onChange={handleChange} multiple className="form-control" />
</label>
</div>
</div>
<div className="image-preview">
{images.map((image, index) => (
<div key={index} className="image-preview-item">
<img src={URL.createObjectURL(image)} alt={`Preview ${index}`} />
<button className="btnRemoveImg" type="button" onClick={() => handleRemoveImage(index)}>X</button>
</div>
))}
</div>
{errorMessage && <p className="error-message">{errorMessage}</p>}
<div className="postBtn">
<button type="button" className="buttonClose" onClick={onBack}>
  Back
</button>
<button type="button" className="buttonPost" onClick={handlePost}>
Post
</button>
</div>
</form>
      </div>
    </div>
  );
}

export default UploadImgPostForm;
