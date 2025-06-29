import React from 'react';
import posts from './posts.json'; 

const PostList = () => {
  return (
    
    <div className="post-list">
        <br/>
      {posts.map(post => (
        <div key={post.id} className="post-card">
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <div className="post-meta">
            <span>Date: {post.date}</span>
            <span>Slug: {post.slug}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;