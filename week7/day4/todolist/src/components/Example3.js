import React, { Component } from 'react';
import data from './data.json';

class Example3 extends Component {
  render() {
    return (
      <div className="experiences-container">
        <h2>Work Experience</h2>
        {data.Experiences.map((exp, expIndex) => (
          <div key={expIndex} className="experience">
            <div className="company-header">
              <img src={exp.logo} alt={exp.companyName} width="50" />
              <h3>
                <a href={exp.url} target="_blank" rel="noopener noreferrer">
                  {exp.companyName}
                </a>
              </h3>
            </div>
            {exp.roles.map((role, roleIndex) => (
              <div key={roleIndex} className="role">
                <h4>{role.title}</h4>
                <p>{role.description}</p>
                <p className="date-location">
                  {role.startDate} to {role.endDate} | {role.location}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Example3;