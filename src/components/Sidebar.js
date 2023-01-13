import React, { Component } from 'react';
import Contact from './Contact';
import Education from './Education';
import Skills from './Skills';
import '../styles/Sidebar.css';

class Sidebar extends Component {
  render() {
    return (
      <div className="Sidebar">
        <Contact />
        <Education />
        <Skills />
      </div>
    );
  }
}

export default Sidebar;
