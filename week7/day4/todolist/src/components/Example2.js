import React, { Component } from 'react';
import data from './data.json';

class Example2 extends Component {
  render() {
    return (
      <div className="skills-container">
        <h2>Skills</h2>
        {data.Skills.map((skillArea, index) => (
          <div key={index} className="skill-area">
            <h3>{skillArea.Area}</h3>
            <ul>
              {skillArea.SkillSet.map((skill, skillIndex) => (
                <li key={skillIndex} className={skill.Hot ? 'hot-skill' : ''}>
                  {skill.Name} {skill.Hot && <span className="hot-badge">(Hot)</span>}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
}

export default Example2;