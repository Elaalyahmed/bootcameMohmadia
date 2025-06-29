import React, { Component } from 'react';
import data from './data.json';

class Example1 extends Component {
  render() {
    return (
      <div className="social-media-container">
        <h2>Social Media Links</h2>
        <ul>
          {data.SocialMedias.map((media, index) => (
            <li key={index}>
              <a href={media.url} target="_blank" rel="noopener noreferrer">
                {media.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Example1;