/* import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminReport.css';

function AdminReport() {
  const [reports, setReports] = useState([]);
  const token = 'task__eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MDE4ZWMzYjI2MWI1OWQ4MGIxZmFmOCIsImVtYWlsIjoiYWFhYmRlbGtoYWxlazNAZ21haWwuY29tIiwiaWF0IjoxNzExNTg1ODUxLCJleHAiOjE3MTE4NDUwNTF9.0jhgyf9hauZgeBfIlbZIYSTnQcNO9v_qCCUM3h0oXx8'; 

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => { 
      try {
        const response = await axios.get('https://lost-seven.vercel.app/post/allreports', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setReports(response.data); 
      } catch (error) {
        console.error('Error fetching reports:', error);
      }
    };

    fetchData(); 
  }, []); 

  return (
    <div className="admin-report-container">
      <h2>Admin Reports</h2>
      <div className="report-list">
        {reports.map((report, index) => (
          <div key={index} className="report-item">
            <h3>Reason: {report.reason}</h3>    
            <p>Description: {report.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminReport;
 */
/* 
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminReport.css';

function AdminReport() {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {

    const fetchData = async () => { 
        try {
          const response = await axios.get('https://lost-seven.vercel.app/post/allreports');
          if (response.data.success) {
            console.log('Reports:', response.data.reports); 
            setReports(response.data.reports); 
          } else {
            console.error('Error fetching reports:', response.data.message);
            if (response.data.message === 'ReloadPage') {
                window.location.reload();
              }
          }
        } catch (error) {
          console.error('Error fetching reports:', error);
        }
        finally {
            setLoading(false); 
          }
      };
    
      fetchData(); 
    }, []); 
    

  return (
    <div className="admin-report-container">
      <h2>Admin Reports</h2>
      <p>Loading...</p>
      <div className="report-list">
        {Array.isArray(reports) ? (
          reports.map((report, index) => (
            <div key={index} className="report-item">
              <h3>Reason: {report.reason}</h3>    
              <p>Description: {report.description}</p>
            </div>
          ))
        ) : (
          <p>No</p>
        )}
      </div>
    </div>
  );
}

export default AdminReport;
 */

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminReport.css';
import { useTheme } from '../Theme/ThemeContext'; 

function AdminReport() {
  const [Reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const { darkMode } = useTheme();
  
  useEffect(() => {
    const fetchData = async () => {
      const userInfoString = localStorage.getItem('user-info');
      const userInfo = JSON.parse(userInfoString);
      const token = userInfo?.results;
      
      if (!token) {
        console.error('Token is missing');
        return;
      }

      try {
        const config = {
          headers: {
            token: `task__${token}`
          }
        };
        const response = await axios.get('https://lost-seven.vercel.app/admin/reports', config);
        if (response.data.success) {
          console.log('Reports:', response.data.Reports); 
          setReports(response.data.Reports); 
        } else {
          console.error('Error fetching reports:', response.data.message);
          if (response.data.message === 'ReloadPage') {
            window.location.reload();
          }
        }
      } catch (error) {
        console.error('Error fetching reports:', error);
      } finally {
        setLoading(false); 
      }
    };

    fetchData(); 
  }, []); 
 
  return (
    <div className={`admin-report-container ${darkMode ? 'dark' : ''}`}>
      <h2>Admin Reports </h2>
      {loading && (
        <div className="loading">
          <div className="loading-spinner"></div>
        </div>
      )}
      {!loading && (
        <div className="report-list">
          {Array.isArray(Reports) && Reports.length > 0 ? (
            Reports.map((report, index) => (
              <div key={index} className="report-item">
                <h3>Reason: {report.reason}</h3>    
                <p>Description: {report.description}</p>
                <p>Created At: {new Date(report.createdAt).toLocaleString()}</p>
              </div>
            ))
          ) : (
            <p>No reports found.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default AdminReport;

