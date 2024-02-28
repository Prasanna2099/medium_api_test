// src/MediumIntegration.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MEDIUM_API_KEY = "2f6aaec43d68aee0bcb0ea45695203cb39f188fde8c30feb08284996b75a8a69e";

const MediumIntegration = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('https://api.medium.com/v1/me', {
          headers: {
            Authorization: `Bearer ${MEDIUM_API_KEY}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
        });
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
      {userData ? (
        <div>
          <h2>User Data</h2>
          <p>Name: {userData.name}</p>
          <p>Username: {userData.username}</p>
          {/* Display other data fields as needed */}
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default MediumIntegration;
