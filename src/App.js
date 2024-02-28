// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'; // Import the CSS file

function App() {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://v1.nocodeapi.com/prasanna2099/medium/lUOrgFIevmTUKPRn');
        setPostData(response.data.slice(0, 10));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Blog Posts</h1>
      </header>
      <div className="post-container">
        {postData.length > 0 ? (
          postData.map((post, index) => (
            <div className="post" key={index}>
              <h2>{post.title}</h2>
              <p>Author: {post.author}</p>
              <p>Publish Date: {new Date(post.published).toLocaleDateString()}</p>
              <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content }} />
              {/* Render other parts of the post as needed */}
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default App;
