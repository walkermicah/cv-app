import React, { Component } from 'react';
import '../styles/Nav.css';

class Nav extends Component {
  render() {
    return (
      <nav className="Nav">
        <div className="Nav-instructions">
          <p>Resume builder</p>
          <p>Click on a section to edit the information</p>
        </div>
      </nav>
    );
  }
}

export default Nav;
