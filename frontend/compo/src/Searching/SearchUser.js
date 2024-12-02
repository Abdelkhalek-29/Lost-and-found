/* import React, { useState } from 'react';
import axios from 'axios';
import './SearchUser.css';

function SearchUser() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searchMessage, setSearchMessage] = useState('');

  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZmIwOTMwYTM0ODE1NTg3ZGIwMWExZSIsImVtYWlsIjoiYWJkYWxyaG1hbmFobWVkNzIxQGdtYWlsLmNvbSIsImlhdCI6MTcxMzg4MzYyMCwiZXhwIjoxNzE0MTQyODIwfQ.JSdlLrYk-v-ODvQXV-HhvglDTj7eIgW1S001c0-PuAc';

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const config = {
        headers: {
          token: `task__${token}`
        }
      };

      const response = await axios.get(
        `https://lost-seven.vercel.app/post/search?gender=${searchTerm}&firstName=${searchTerm}`,
        config
      );

      const { success, results } = response.data;

      if (!success || results.length === 0) {
        setSearchMessage('No post match search.');
        setSearchResults([]);
      } else {
        setSearchMessage('');
        setSearchResults(results);
      }
    } catch (error) {
      console.error('Error searching:', error);
    }
  };

  return (
    <div>
      <input type="text" placeholder="Search" value={searchTerm} onChange={handleChange} />
      <button onClick={handleSubmit}>Search</button>
      <div>
        {searchResults.length > 0 ? (
          searchResults.map((result) => (
            <div key={result.id}>
              <p>{result.firstName} {result.lastName}</p>
            </div>
          ))
        ) : (
          <p>{searchMessage}</p>
        )}
      </div>
    </div>
  );
}

export default SearchUser;
 */

/* import React, { useState } from 'react';
import axios from 'axios';
import './SearchUser.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SearchIcon1 from '@mui/icons-material/Search';

function SearchUser() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searchMessage, setSearchMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = async () => {
    if (!searchTerm.trim()) {
      setSearchMessage('Please enter a search term.');
      return;
    }

    setLoading(true);

    try {
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZmIwOTMwYTM0ODE1NTg3ZGIwMWExZSIsImVtYWlsIjoiYWJkYWxyaG1hbmFobWVkNzIxQGdtYWlsLmNvbSIsImlhdCI6MTcxMzg4MzYyMCwiZXhwIjoxNzE0MTQyODIwfQ.JSdlLrYk-v-ODvQXV-HhvglDTj7eIgW1S001c0-PuAc';
      const config = {
        headers: {
          token: `task__${token}`
        }
      };

      let apiUrl = '';

      if (searchTerm.toLowerCase() === 'male' || searchTerm.toLowerCase() === 'female') {
        apiUrl = `https://lost-seven.vercel.app/post/search?gender=${searchTerm.toLowerCase()}`;
      } else if (['black', 'white', 'black & white', 'brown', 'blonde', 'red burgundy'].includes(searchTerm.toLowerCase())) {
        apiUrl = `https://lost-seven.vercel.app/post/search?hair_color=${searchTerm.toLowerCase()}`;
      } else if (['black', 'very fair', 'fair', 'medium', 'olive', 'brown', 'dark'].includes(searchTerm.toLowerCase())) {
        apiUrl = `https://lost-seven.vercel.app/post/search?skin_color=${searchTerm.toLowerCase()}`;
      } else if (['black', 'brown', 'amber', 'hazel', 'green', 'gray', 'blue'].includes(searchTerm.toLowerCase())) {
        apiUrl = `https://lost-seven.vercel.app/post/search?eye_color=${searchTerm.toLowerCase()}`;
      } else if (['wavy', 'buzz cut', 'undercut', 'long', 'short', 'curly', 'fringe'].includes(searchTerm.toLowerCase())) {
        apiUrl = `https://lost-seven.vercel.app/post/search?hair_type=${searchTerm.toLowerCase()}`;
      } else if (['egypt', 'cairo', 'giza', 'alexandria', 'aswan', 'luxor', 'sharm el sheikh', 'hurghada', 'port said', 'ismailia', 'suez', 'tanta', 'beni suef', 'zagazig', 'minya', 'sohag', 'el mansoura', 'damietta', 'suhag', 'qena', 'banha', 'assiut', 'arish', 'damanhur', 'fayoum', 'shibin el kom', 'mallawi', 'kafr el sheikh'].includes(searchTerm.toLowerCase())) {
        apiUrl = `https://lost-seven.vercel.app/post/search?location=${searchTerm.toLowerCase()}`;
      } else {
        apiUrl = `https://lost-seven.vercel.app/post/search?firstName=${searchTerm}`;
      }

      const response = await axios.get(apiUrl, config);
      const sortedPosts = response.data.results.sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
      });

      setSearchResults(sortedPosts);
      setSearchMessage('');
    } catch (error) {
      console.error('Error fetching search results:', error);
      setSearchMessage('An error occurred while fetching search results.');
    } finally {
      setLoading(false);
    }
  };

  const getTimeElapsed = (createdAt) => {
    // Function remains the same
  };

  return (
    <div className="SearchContainerUser">
      <div className="SearchInputContainerUser">
        <SearchIcon1 className="search-icon1" />
        <input
          type="Search"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
          className="SearchInputUser"
        />
        <button onClick={handleSubmit} className="SearchButtonUser">
          Search
        </button>
      </div>
      {loading && (
        <div className="LoadingContainer">
          <p>Loading...</p>
        </div>
      )}
      <div className="SearchResultsContainer">
        {searchResults.length > 0 ? (
          searchResults.map((result, index) => (
            <div key={index} className="PostBox1">
              <div className="PostHeader1">
                <div className="UserInfo1">
                  <p className="PostTime1">{getTimeElapsed(result.createdAt)}</p>
                </div>
              </div>
              <div className="PostContent1">
                <p className="PostText1">
                  I Am {result.type} {result.gender} name( {result.firstName} {result.lastName} ) {result.age} years old  HairCut style {result.hair_type} and color {result.hair_color}, Skincolor {result.skin_color} And EyeColor {result.eye_color} Found in Address {result.address}
                </p>
                <Slider dots infinite speed={500} slidesToShow={1} slidesToScroll={1}>
                  {result.image && result.image.images && result.image.images.map((image, idx) => (
                    <div key={idx}>
                      <img className="postImg1" src={image.url} alt="Image" />
                    </div>
                  ))}
                </Slider>
              </div>
              <hr className="Divider1" />
            </div>
          ))
        ) : (
          <p>{searchMessage}</p>
        )}
      </div>
    </div>
  );
        }  

export default SearchUser;
 */
/* import React, { useState } from 'react';
import axios from 'axios';
import './SearchUser.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SearchIcon1 from '@mui/icons-material/Search';

function SearchUser() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searchMessage, setSearchMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = async () => {
    if (!searchTerm.trim()) {
      setSearchMessage('Please enter a search term.');
      return;
    }

    setLoading(true);

    try {
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZmIwOTMwYTM0ODE1NTg3ZGIwMWExZSIsImVtYWlsIjoiYWJkYWxyaG1hbmFobWVkNzIxQGdtYWlsLmNvbSIsImlhdCI6MTcxMzg4MzYyMCwiZXhwIjoxNzE0MTQyODIwfQ.JSdlLrYk-v-ODvQXV-HhvglDTj7eIgW1S001c0-PuAc';
      const config = {
        headers: {
          token: `task__${token}`
        }
      };

      let apiUrl = '';

      if (searchTerm.toLowerCase() === 'male' || searchTerm.toLowerCase() === 'female') {
        apiUrl = `https://lost-seven.vercel.app/post/search?gender=${searchTerm.toLowerCase()}`;
      } else if (['black', 'white', 'black & white', 'brown', 'blonde', 'red burgundy'].includes(searchTerm.toLowerCase())) {
        apiUrl = `https://lost-seven.vercel.app/post/search?hair_color=${searchTerm.toLowerCase()}`;
      } else if (['black', 'very fair', 'fair', 'medium', 'olive', 'brown', 'dark'].includes(searchTerm.toLowerCase())) {
        apiUrl = `https://lost-seven.vercel.app/post/search?skin_color=${searchTerm.toLowerCase()}`;
      } else if (['black', 'brown', 'amber', 'hazel', 'green', 'gray', 'blue'].includes(searchTerm.toLowerCase())) {
        apiUrl = `https://lost-seven.vercel.app/post/search?eye_color=${searchTerm.toLowerCase()}`;
      } else if (['wavy', 'buzz cut', 'undercut', 'long', 'short', 'curly', 'fringe'].includes(searchTerm.toLowerCase())) {
        apiUrl = `https://lost-seven.vercel.app/post/search?hair_type=${searchTerm.toLowerCase()}`;
      } else if (['egypt', 'cairo', 'giza', 'alexandria', 'aswan', 'luxor', 'sharm el sheikh', 'hurghada', 'port said', 'ismailia', 'suez', 'tanta', 'beni suef', 'zagazig', 'minya', 'sohag', 'el mansoura', 'damietta', 'suhag', 'qena', 'banha', 'assiut', 'arish', 'damanhur', 'fayoum', 'shibin el kom', 'mallawi', 'kafr el sheikh'].includes(searchTerm.toLowerCase())) {
        apiUrl = `https://lost-seven.vercel.app/post/search?location=${searchTerm.toLowerCase()}`;
      } else {
        apiUrl = `https://lost-seven.vercel.app/post/search?firstName=${searchTerm}`;
      }

      const response = await axios.get(apiUrl, config);
      const sortedPosts = response.data.results.sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
      });

      setSearchResults(sortedPosts);
      setSearchMessage('');
    } catch (error) {
      console.error('Error fetching search results:', error);
      setSearchMessage('An error occurred while fetching search results.');
    } finally {
      setLoading(false);
    }
  };

  const getTimeElapsed = (createdAt) => {
    // Function remains the same
  };

  const highlightSearchTerm = (text, searchTerm) => {
    if (!searchTerm.trim()) return text;
    const regex = new RegExp(searchTerm, 'gi');
    return text.replace(regex, (match) => `<span class="Highlighted">${match}</span>`);
  };

  return (
    <div className="SearchContainerUser">
      <div className="SearchInputContainerUser">
        <SearchIcon1 className="search-icon1" />
        <input
          type="Search"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
          className="SearchInputUser"
        />
        <button onClick={handleSubmit} className="SearchButtonUser">
          Search
        </button>
      </div>
      {loading && (
        <div className="LoadingContainer">
          <p>Loading...</p>
        </div>
      )}
      <div className="SearchResultsContainer">
        {searchResults.length > 0 ? (
          searchResults.map((result, index) => (
            <div key={index} className="PostBox1">
              <div className="PostHeader1">
                <div className="UserInfo1">
                  <p className="PostTime1">{getTimeElapsed(result.createdAt)}</p>
                </div>
              </div>
              <div className="PostContent1">
                <p className="PostText1" dangerouslySetInnerHTML={{ __html: highlightSearchTerm(`I Am ${result.type} ${result.gender} name( ${result.firstName} ${result.lastName} ) ${result.age} years old  HairCut style ${result.hair_type} and color ${result.hair_color}, Skincolor ${result.skin_color} And EyeColor ${result.eye_color} Found in Address ${result.address}`, searchTerm) }} />
                <Slider dots infinite speed={500} slidesToShow={1} slidesToScroll={1}>
                  {result.image && result.image.images && result.image.images.map((image, idx) => (
                    <div key={idx}>
                      <img className="postImg1" src={image.url} alt="Image" />
                    </div>
                  ))}
                </Slider>
              </div>
              <hr className="Divider1" />
            </div>
          ))
        ) : (
          <p>{searchMessage}</p>
        )}
      </div>
    </div>
  );
}  

export default SearchUser;
 */
import React, { useState } from 'react';
import axios from 'axios';
import './SearchUser.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SearchIcon1 from '@mui/icons-material/Search';
import { useTheme } from '../Theme/ThemeContext'; 

function SearchUser() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searchMessage, setSearchMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const { darkMode } = useTheme();

  
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = async () => {
    if (!searchTerm.trim()) {
      setSearchMessage('Please enter a search term.');
      return;
    }
    setLoading(true);

    const userInfoString = localStorage.getItem('user-info');
    if (!userInfoString) {
      setSearchMessage('User information not found. Please log in.');
      setLoading(false);
      return;
    }

    const userInfo = JSON.parse(userInfoString);
    const token = userInfo.results;

    try {
      const config = {
        headers: {
          token: `task__${token}`
        }
      };
      let apiUrl = '';
  
      if (searchTerm.toLowerCase() === 'male' || searchTerm.toLowerCase() === 'female') {
        apiUrl = `https://lost-seven.vercel.app/post/search?gender=${searchTerm.toLowerCase()}`;
      } else if (['black', 'white', 'black & white', 'brown', 'blonde', 'red burgundy'].includes(searchTerm.toLowerCase())) {
        apiUrl = `https://lost-seven.vercel.app/post/search?hair_color=${searchTerm.toLowerCase()}`;
      } else if (['black', 'very fair', 'fair', 'medium', 'olive', 'brown', 'dark'].includes(searchTerm.toLowerCase())) {
        apiUrl = `https://lost-seven.vercel.app/post/search?skin_color=${searchTerm.toLowerCase()}`;
      } else if (['black', 'brown', 'amber', 'hazel', 'green', 'gray', 'blue'].includes(searchTerm.toLowerCase())) {
        apiUrl = `https://lost-seven.vercel.app/post/search?eye_color=${searchTerm.toLowerCase()}`;
      } else if (['wavy', 'buzz cut', 'undercut', 'long', 'short', 'curly', 'fringe'].includes(searchTerm.toLowerCase())) {
        apiUrl = `https://lost-seven.vercel.app/post/search?hair_type=${searchTerm.toLowerCase()}`;
      } else if (['egypt', 'cairo', 'giza', 'alexandria', 'aswan', 'luxor', 'sharm el sheikh', 'hurghada', 'port said', 'ismailia', 'suez', 'tanta', 'beni suef', 'zagazig', 'minya', 'sohag', 'el mansoura', 'damietta', 'suhag', 'qena', 'banha', 'assiut', 'arish', 'damanhur', 'fayoum', 'shibin el kom', 'mallawi', 'kafr el sheikh'].includes(searchTerm.toLowerCase())) {
        apiUrl = `https://lost-seven.vercel.app/post/search?location=${searchTerm.toLowerCase()}`;
      } else if (!isNaN(searchTerm)) {
        apiUrl = `https://lost-seven.vercel.app/post/search?age=${searchTerm}`;
      }
      else {
        
        const firstNameUrl = `https://lost-seven.vercel.app/post/search?firstName=${searchTerm}`;
        const lastNameUrl = `https://lost-seven.vercel.app/post/search?lastName=${searchTerm}`;
  
        const [firstNameResponse, lastNameResponse] = await Promise.all([
          axios.get(firstNameUrl, config),
          axios.get(lastNameUrl, config)
        ]);
  
        const firstNameResults = firstNameResponse.data.results;
        const lastNameResults = lastNameResponse.data.results;
  
        const combinedResults = [...firstNameResults, ...lastNameResults];
        const sortedPosts = combinedResults.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  
        setSearchResults(sortedPosts);
        setSearchMessage('');
        setLoading(false);
        return;
      }
      const response = await axios.get(apiUrl, config);
      const sortedPosts = response.data.results.sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
      });

      setSearchResults(sortedPosts);
      setSearchMessage('');
    } catch (error) {
      console.error('Error search results:', error);
      setSearchMessage('An error occurred while get search results.');
    } finally {
      setLoading(false);
    }
  };

  const getTimeElapsed = (createdAt) => {
    const currentDate = new Date();
    const postDate = new Date(createdAt);
    const timeDifference = currentDate - postDate;
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
  
    if (days > 0) {
      return `${days} day${days > 1 ? 's' : ''} ago`;
    } else if (hours > 0) {
      return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (minutes > 0) {
      return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else {
      return `Just now`;
    }
  };

  const highlightSearchTerm = (text, searchTerm) => {
    if (!searchTerm.trim()) return text;
    const regex = new RegExp(searchTerm, 'gi');
    return text.replace(regex, (match) => `<span class="Highlighted">${match}</span>`);
  };

  return (
    <div className={`SearchContainerUser ${darkMode ? 'dark' : ''}`}>
      <div className="SearchInputContainerUser">
        <SearchIcon1 className="search-icon1" />
        <input
          type="Search"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
          className="SearchInputUser"
        />
        <button onClick={handleSubmit} className="SearchButtonUser">
          Search
        </button>
      </div>
      {searchMessage && !loading && (
        <div className="ErrorMessage1">
          <p>{searchMessage}</p>
        </div>
      )}
      {loading && (
  <div className="LoadingContainer">
    <div className="spinner"></div>
  </div>
)}
      <div className="SearchResultsContainer">
  {searchResults.length > 0 ? (
    searchResults.map((result, index) => (
      <div key={index} className="PostBox1">
        <div className="PostHeader1">
          <img className="avatar11" src={result.createdBy.profileImage.url} alt="Avatar" />
          <div className='UserInfo'>
            <p className='UserName'>{result.createdBy.name}</p>
            <p className='PostTime'>{getTimeElapsed(result.createdAt)}</p>
          </div>
        </div>
        <div className='PostContent1'>
            {result.cemeteryLocation && (
              <a
                href={`https://www.google.com/maps/search/${encodeURIComponent(result.cemeteryLocation)}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <p className='Dead'>Dead</p>
              </a>
            )}
            {result.isClosed === "true" && (
              <a
                href={`https://www.google.com/maps/search/${encodeURIComponent(result.isClosed)}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <p className='Connect'>Connect</p>
              </a>
            )}
          <p className="PostText1" dangerouslySetInnerHTML={{ __html: highlightSearchTerm(`I Am ${result.type} ${result.gender} name( ${result.firstName} ${result.lastName} ) ${result.age} years old  HairCut style ${result.hair_type} and color ${result.hair_color}, Skincolor ${result.skin_color} And EyeColor ${result.eye_color} Found in Address ${result.address}`, searchTerm) }} />
          <Slider dots infinite speed={500} slidesToShow={1} slidesToScroll={1}>
            {result.imageId && result.imageId.images && result.imageId.images.map((imageId, idx) => (
              <div key={idx}>
                <img className="postImg1" src={imageId.url} alt="Image" />
              </div>
            ))}
          </Slider>
        </div>
        <hr className="Divider1" />
      </div>
    ))
  ) : (
    <div className="NoResultsMessage">No matching results found.</div>
  )}
</div>
      
    </div>
  );
}  

export default SearchUser;
