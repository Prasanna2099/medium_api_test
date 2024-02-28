// BlogPost.js
import React from 'react';

class BlogPost extends React.Component {
  render() {
    const postData = this.props.data[0]; // Assuming you only have one post in the data array

    return (
      <div>
        <h1>{postData.title}</h1>
        <p>Author: {postData.author}</p>
        <p>Publish Date: {new Date(postData.published).toLocaleDateString()}</p>
        <div dangerouslySetInnerHTML={{ __html: postData.content }} />
        {/* Render other parts of the post as needed */}
      </div>
    );
  }
}

export default BlogPost;
