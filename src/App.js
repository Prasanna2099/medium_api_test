// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://v1.nocodeapi.com/prasanna2099/medium/lUOrgFIevmTUKPRn');
        setPostData(response.data.slice(0, 10)); // Get data for the first three items
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
        {postData.length > 0 ? (
          postData.map((post, index) => (
            <div key={index}>
              <h2>{post.title}</h2>
              <p>Author: {post.author}</p>
              <p>Publish Date: {new Date(post.published).toLocaleDateString()}</p>
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
              {/* Render other parts of the post as needed */}
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </header>
    </div>
  );
}

export default App;
