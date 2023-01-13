import React, { Component } from 'react';
import '../styles/Nav.css';

class Nav extends Component {
  render() {
    return (
      <nav className="Nav">
        <div className="Nav-instructions">
          <p className="first-p">Click on a section to edit the information</p>
          <p>Click your initials to upload a photo</p>
        </div>
        <button>Save as PDF</button>
      </nav>
    );
  }
}

export default Nav;
