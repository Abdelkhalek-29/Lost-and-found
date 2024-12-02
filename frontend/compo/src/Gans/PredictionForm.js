import React, { useState } from 'react';
import axios from 'axios';
import './PredictionForm.css';

const PredictionForm = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [responseGif, setResponseGif] = useState(null);
  const [isLoading, setIsLoading] = useState(false); 

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };
 

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) return;

    const formData = new FormData();
    formData.append('image', image);
    formData.append('target_age', 'default'); 

    setIsLoading(true); 

    try {
      const response = await axios.post('https://lostbackened.azurewebsites.net/gan/predict', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Response:', response.data);
      setResponseGif(response.data.url);
    } catch (error) {
      console.error('Error uploading the image:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="prediction-form">
      <form onSubmit={handleSubmit}>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {preview && <img src={preview} alt="Preview" width="100" />}
        <button type="submit" disabled={isLoading}>Generate</button>
      </form>
      {isLoading && <div className="loading">Loading...</div>}
      {responseGif && (
        <div className="response-gif">
          <img src={responseGif} alt="Generated GIF" />
        </div>
      )}
    </div>
  );
};

export default PredictionForm;
