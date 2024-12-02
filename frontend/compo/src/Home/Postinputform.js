/* import React, { useState } from 'react';
import './Postinputform.css';
import UploadImgPostForm from './UploadImgPostForm';

function Postinputform() {
  const [isLost, setIsLost] = useState(true);
  const [showUploadSection, setShowUploadSection] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    gender: '',
    age: '',
    hair_type: '', 
    hair_color: '', 
    skin_color: '', 
    eye_color: '' 
  });
  const [errorMessages, setErrorMessages] = useState({});

  const handleToggle = () => {
    setIsLost(!isLost);
  };

  const clearErrorMessage = (fieldName) => {
    setErrorMessages((prevErrors) => {
      return { ...prevErrors, [fieldName]: '' };
    });
  };

  const handleNext = () => {
    const errors = {};
    if (!formData.firstName.trim()) {
      errors.firstName = 'Please enter your first name';
    }
    if (!formData.lastName.trim()) {
      errors.lastName = 'Please enter your last name';
    }
    if (!formData.address.trim()) {
      errors.address = 'Please enter your address';
    }
    if (!formData.gender) {
      errors.gender = 'Please select your gender';
    }
    if (!formData.age) {
      errors.age = 'Please enter your age';
    }
    if (!formData.hair_type) { 
      errors.hair_type = 'Please select your hair style'; 
    }
    if (!formData.hair_color) { 
      errors.hair_color = 'Please select your hair color'; 
    }
    if (!formData.skin_color) { 
      errors.skin_color = 'Please select your skin color'; 
    }
    if (!formData.eye_color) { 
      errors.eye_color = 'Please select your eye color'; 
    }

    if (Object.keys(errors).length === 0) {
      setShowUploadSection(true);
      setErrorMessages({});
    } else {
      setErrorMessages(errors);
    }
  };

  const handleBack = () => {
    setShowUploadSection(false);
  };

  const handleCloseClick = (e) => {
    e.preventDefault();
    const isSure = window.confirm('Are you sure you want to close?');
    if (isSure) {
      window.location.reload();
    }
  };

  return (
    <div className="dialogpost">
      <div className="dialogpost-content">
        {!showUploadSection ? (
          <div>
            <div className="lost-found-toggler">
              <div className="toggle-text">
                <span>{isLost ? 'Lost' : 'Found'}</span>
              </div>
              <input
                type="checkbox"
                id="check"
                checked={!isLost}
                onChange={handleToggle}
                className="hidden"
              />
              <label htmlFor="check" className="toggle">
                <div className="toggle__circle"></div>
              </label>
            </div>
            <hr className="divider-line" />
            <form>
              <div className="row">
                <div className="col">
                  <div className={`form-group ${errorMessages.firstName && 'error'}`}>
                    <label htmlFor="Fristname">First Name</label>
                    <input
                      type="text"
                      id="Fristname"
                      placeholder="Abdelrhman"
                      className="form-control"
                      value={formData.firstName}
                      onChange={(e) => {
                        setFormData({ ...formData, firstName: e.target.value });
                        clearErrorMessage('firstName');
                      }}
                      required
                    />
                    {errorMessages.firstName && <p className="error-message">{errorMessages.firstName}</p>}
                  </div>
                </div>
                <div className="col">
                  <div className={`form-group ${errorMessages.lastName && 'error'}`}>
                    <label htmlFor="Lastname">Last Name</label>
                    <input
                      type="text"
                      id="Lastname"
                      placeholder="Ahmed"
                      className="form-control"
                      value={formData.lastName}
                      onChange={(e) => {
                        setFormData({ ...formData, lastName: e.target.value });
                        clearErrorMessage('lastName');
                      }}
                      required
                    />
                    {errorMessages.lastName && <p className="error-message">{errorMessages.lastName}</p>}
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="Address">Address</label>
                <input
                  type="text"
                  id="Address"
                  placeholder="1234 Ahmed Mazhar St Cairo"
                  className={`form-control ${errorMessages.address && 'error'}`}
                  value={formData.address}
                  onChange={(e) => {
                    setFormData({ ...formData, address: e.target.value });
                    clearErrorMessage('address');
                  }}
                  required
                />
                {errorMessages.address && <p className="error-message">{errorMessages.address}</p>}
              </div>
              <div className="row">
                <div className="col">
                  <div className={`form-group ${errorMessages.gender && 'error'}`}>
                    <label htmlFor="Gender">Gender</label>
                    <select
                      id="Gender"
                      className="form-control"
                      value={formData.gender}
                      onChange={(e) => {
                        setFormData({ ...formData, gender: e.target.value });
                        clearErrorMessage('gender');
                      }}
                      required
                    >
                      <option value="" disabled>Choose...</option>
                      <option>male</option>
                      <option>female</option>
                    </select>
                    {errorMessages.gender && <p className="error-message">{errorMessages.gender}</p>}
                  </div>
                </div>
                <div className="col">
                  <div className={`form-group ${errorMessages.age && 'error'}`}>
                    <label htmlFor="Age">Age</label>
                    <input
                      type="number"
                      id="Age"
                      placeholder="20 years old"
                      className="form-control"
                      value={formData.age}
                      onChange={(e) => {
                        setFormData({ ...formData, age: e.target.value });
                        clearErrorMessage('age');
                      }}
                      required
                    />
                    {errorMessages.age && <p className="error-message">{errorMessages.age}</p>}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className={`col ${errorMessages.hair_type && 'error'}`}>
                  <div className="form-group">
                    <label htmlFor="HairStyle">Hair Style</label>
                    <select
                      id="HairStyle"
                      className="form-control"
                      value={formData.hair_type}
                      onChange={(e) => {
                        setFormData({ ...formData, hair_type: e.target.value });
                        clearErrorMessage('hair_type');
                      }}
                      required
                    >
                      <option value="" disabled>Choose...</option>
                      <option>wavy</option>
                      <option>Buzz cut</option>
                      <option>Undercut</option>
                      <option>Long</option>
                      <option>Short</option>
                      <option>Curly</option>
                      <option>Fringe</option>
                    </select>
                    {errorMessages.hair_type && <p className="error-message">{errorMessages.hair_type}</p>}
                  </div>
                </div>
                <div className={`col ${errorMessages.hair_color && 'error'}`}>
                  <div className="form-group">
                    <label htmlFor="HairColor">Hair Color</label>
                    <select
                      id="HairColor"
                      className="form-control"
                      value={formData.hair_color}
                      onChange={(e) => {
                        setFormData({ ...formData, hair_color: e.target.value });
                        clearErrorMessage('hair_color');
                      }}
                      required
                    >
                      <option value="" disabled>Choose...</option>
                      <option>black</option>
                      <option>White</option>
                      <option>Black & white</option>
                      <option>Brown</option>
                      <option>Blonde</option>
                      <option>Red burgundy</option>
                    </select>
                    {errorMessages.hair_color && <p className="error-message">{errorMessages.hair_color}</p>}
                  </div>
                </div>
              </div>
              <div className={`form-group ${errorMessages.skin_color && 'error'}`}>
                <label htmlFor="SkinColor">Skin Color</label>
                <select
                  id="SkinColor"
                  className="form-control"
                  value={formData.skin_color}
                  onChange={(e) => {
                    setFormData({ ...formData, skin_color: e.target.value });
                    clearErrorMessage('skin_color');
                  }}
                  required
                >
                  <option value="" disabled>Choose...</option>
                  <option>black</option>
                  <option>very fair</option>
                  <option>fair</option>
                  <option>medium</option>
                  <option>olive</option>
                  <option>brown</option>
                  <option>Dark</option>
                </select>
                {errorMessages.skin_color && <p className="error-message">{errorMessages.skin_color}</p>}
              </div>
              <div className={`form-group ${errorMessages.eye_color && 'error'}`}>
                <label htmlFor="EyeColor">Eye Color</label>
                <select
                  id="EyeColor"
                  className="form-control"
                  value={formData.eye_color}
                  onChange={(e) => {
                    setFormData({ ...formData, eye_color: e.target.value });
                    clearErrorMessage('eye_color');
                  }}
                  required
                >
                  <option value="" disabled>Choose...</option>
                  <option>black</option>
                  <option>brown</option>
                  <option>amber</option>
                  <option>hazel</option>
                  <option>green</option>
                  <option>gray</option>
                  <option>blue</option>
                </select>
                {errorMessages.eye_color && <p className="error-message">{errorMessages.eye_color}</p>}
              </div>
              <div className='postBtn'>
                <button className='buttonClose' onClick={handleCloseClick}>Cancel</button>
                <button className='buttonNext' onClick={handleNext}><span>Next</span></button>
              </div>
            </form>
          </div>
        ) : (
          <UploadImgPostForm formData={formData} onClose={handleCloseClick} />
        )}
      </div>
    </div>
  );
}

export default Postinputform;
 */

import React, { useState } from 'react';
import './Postinputform.css';
import UploadImgPostForm from './UploadImgPostForm';
import { useTheme } from '../Theme/ThemeContext'; 

function Postinputform() {
  const [isLost, setIsLost] = useState(true);
  const [showUploadSection, setShowUploadSection] = useState(false);
  const { darkMode } = useTheme();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    gender: '',
    age: '',
    hair_type: '', 
    hair_color: '', 
    skin_color: '', 
    eye_color: '', 
    type: 'Lost' // Default value 
  });
  const [errorMessages, setErrorMessages] = useState({});

  const handleToggle = () => {
    setIsLost(!isLost);
    setFormData(prevFormData => ({
      ...prevFormData,
      type: isLost ? 'Found' : 'Lost'
    }));
  };

  const clearErrorMessage = (fieldName) => {
    setErrorMessages((prevErrors) => {
      return { ...prevErrors, [fieldName]: '' };
    });
  };

  const handleNext = () => {
    const errors = {};
    if (!formData.firstName.trim()) {
      errors.firstName = 'Please enter your first name';
    }
    if (!formData.lastName.trim()) {
      errors.lastName = 'Please enter your last name';
    }
    if (!formData.address.trim()) {
      errors.address = 'Please enter your address';
    }
    if (!formData.gender) {
      errors.gender = 'Please select your gender';
    }
    if (!formData.age) {
      errors.age = 'Please enter your age';
    }
    if (!formData.hair_type) { 
      errors.hair_type = 'Please select your hair style'; 
    }
    if (!formData.hair_color) { 
      errors.hair_color = 'Please select your hair color'; 
    }
    if (!formData.skin_color) { 
      errors.skin_color = 'Please select your skin color'; 
    }
    if (!formData.eye_color) { 
      errors.eye_color = 'Please select your eye color'; 
    }
  
    if (Object.keys(errors).length === 0) {
      console.log(formData); 
      setShowUploadSection(true);
      setErrorMessages({});
    } else {
      setErrorMessages(errors);
    }
  };
  

  const handleBack = () => {
    setShowUploadSection(false);
  };

  const handleCloseClick = (e) => {
    if (e) {
      e.preventDefault();
    }
    const isSure = window.confirm('Are you sure you want to close?');
    if (isSure) {
      window.location.reload();
    }
  };
  

  return (
    <div className={`dialogpost ${darkMode ? 'dark' : ''}`}> 
      <div className="dialogpost-content">
        {!showUploadSection ? (
          <div>
            <div className="lost-found-toggler">
  <div className="toggle-text">
    <label htmlFor="check">{isLost ? 'Lost' : 'Found'}</label>
  </div>
  <input
    type="checkbox"
    id="check"
    checked={!isLost}
    onChange={handleToggle}
    className="hidden"
  />
  <label htmlFor="check" className="toggle">
    <div className="toggle__circle"></div>
  </label>
</div>
<hr className={`divider-line ${isLost ? 'red-divider' : ''}`} />
            <form>
              <div className="row">
                <div className="col">
                  <div className={`form-group ${errorMessages.firstName && 'error'}`}>
                    <label htmlFor="Fristname">First Name</label>
                    <input
                      type="text"
                      id="Fristname"
                      placeholder="Abdelrhman"
                      className="form-control"
                      value={formData.firstName}
                      onChange={(e) => {
                        setFormData({ ...formData, firstName: e.target.value });
                        clearErrorMessage('firstName');
                      }}
                      required
                    />
                    {errorMessages.firstName && <p className="error-message">{errorMessages.firstName}</p>}
                  </div>
                </div>
                <div className="col">
                  <div className={`form-group ${errorMessages.lastName && 'error'}`}>
                    <label htmlFor="Lastname">Last Name</label>
                    <input
                      type="text"
                      id="Lastname"
                      placeholder="Ahmed"
                      className="form-control"
                      value={formData.lastName}
                      onChange={(e) => {
                        setFormData({ ...formData, lastName: e.target.value });
                        clearErrorMessage('lastName');
                      }}
                      required
                    />
                    {errorMessages.lastName && <p className="error-message">{errorMessages.lastName}</p>}
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="Address">Address</label>
                <input
                  type="text"
                  id="Address"
                  placeholder="1234 Ahmed Mazhar St Cairo"
                  className={`form-control ${errorMessages.address && 'error'}`}
                  value={formData.address}
                  onChange={(e) => {
                    setFormData({ ...formData, address: e.target.value });
                    clearErrorMessage('address');
                  }}
                  required
                />
                {errorMessages.address && <p className="error-message">{errorMessages.address}</p>}
              </div>
              <div className="row">
                <div className="col">
                  <div className={`form-group ${errorMessages.gender && 'error'}`}>
                    <label htmlFor="Gender">Gender</label>
                    <select
                      id="Gender"
                      className="form-control"
                      value={formData.gender}
                      onChange={(e) => {
                        setFormData({ ...formData, gender: e.target.value });
                        clearErrorMessage('gender');
                      }}
                      required
                    >
                      <option value="" disabled>Choose...</option>
                      <option>male</option>
                      <option>female</option>
                    </select>
                    {errorMessages.gender && <p className="error-message">{errorMessages.gender}</p>}
                  </div>
                </div>
                <div className="col">
                  <div className={`form-group ${errorMessages.age && 'error'}`}>
                    <label htmlFor="Age">Age</label>
                    <input
                      type="number"
                      id="Age"
                      placeholder="20 years old"
                      className="form-control"
                      value={formData.age}
                      onChange={(e) => {
                        setFormData({ ...formData, age: e.target.value });
                        clearErrorMessage('age');
                      }}
                      required
                    />
                    {errorMessages.age && <p className="error-message">{errorMessages.age}</p>}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className={`col ${errorMessages.hair_type && 'error'}`}>
                  <div className="form-group">
                    <label htmlFor="HairStyle">Hair Style</label>
                    <select
                      id="HairStyle"
                      className="form-control"
                      value={formData.hair_type}
                      onChange={(e) => {
                        setFormData({ ...formData, hair_type: e.target.value });
                        clearErrorMessage('hair_type');
                      }}
                      required
                    >
                      <option value="" disabled>Choose...</option>
                      <option>straight</option>
                      <option>wavy</option>
                      <option>curly</option>
                      <option>coily</option>
                      <option>buzz cut</option>
                      <option>short</option>
                    </select>
                    {errorMessages.hair_type && <p className="error-message">{errorMessages.hair_type}</p>}
                  </div>
                </div>
                <div className={`col ${errorMessages.hair_color && 'error'}`}>
                  <div className="form-group">
                    <label htmlFor="HairColor">Hair Color</label>
                    <select
                      id="HairColor"
                      className="form-control"
                      value={formData.hair_color}
                      onChange={(e) => {
                        setFormData({ ...formData, hair_color: e.target.value });
                        clearErrorMessage('hair_color');
                      }}
                      required
                    >
                      <option value="" disabled>Choose...</option>
                      <option>black</option>
                      <option>white</option>
                      <option>white/gray</option>
                      <option>brown</option>
                      <option>blond</option>
                      <option>red</option>
                    </select>
                    {errorMessages.hair_color && <p className="error-message">{errorMessages.hair_color}</p>}
                  </div>
                </div>
              </div>
              <div className={`form-group ${errorMessages.skin_color && 'error'}`}>
                <label htmlFor="SkinColor">Skin Color</label>
                <select
                  id="SkinColor"
                  className="form-control"
                  value={formData.skin_color}
                  onChange={(e) => {
                    setFormData({ ...formData, skin_color: e.target.value });
                    clearErrorMessage('skin_color');
                  }}
                  required
                >
                  <option value="" disabled>Choose...</option>
                  <option>black</option>
                  <option>very fair</option>
                  <option>fair</option>
                  <option>medium</option>
                  <option>olive</option>
                  <option>brown</option>
                </select>
                {errorMessages.skin_color && <p className="error-message">{errorMessages.skin_color}</p>}
              </div>
              <div className={`form-group ${errorMessages.eye_color && 'error'}`}>
                <label htmlFor="EyeColor">Eye Color</label>
                <select
                  id="EyeColor"
                  className="form-control"
                  value={formData.eye_color}
                  onChange={(e) => {
                    setFormData({ ...formData, eye_color: e.target.value });
                    clearErrorMessage('eye_color');
                  }}
                  required
                >
                  <option value="" disabled>Choose...</option>
                  <option>black</option>
                  <option>brown</option>
                  <option>amber</option>
                  <option>hazel</option>
                  <option>green</option>
                  <option>gray</option>
                  <option>blue</option>
                </select>
                {errorMessages.eye_color && <p className="error-message">{errorMessages.eye_color}</p>}
              </div>
              <div className='postBtn'>
                <button className='buttonClose' onClick={handleCloseClick}>Cancel</button>
                <button className='buttonNext' onClick={handleNext}><span>Next</span></button>
              </div>
            </form>
          </div>
        ) : (
          <UploadImgPostForm formData={formData} onClose={handleCloseClick}  onBack={handleBack} />
        )}
      </div>
    </div>
  );
}

export default Postinputform;
