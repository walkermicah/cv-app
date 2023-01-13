import React, { Component } from 'react';
import '../styles/ProfilePic.css';

class ProfilePic extends Component {
  render() {
    const { firstInitial, lastInitial } = this.props;

    return (
      <div className="ProfilePic">
        <div className="ProfilePic-initials">
          <span>{firstInitial}</span>
          <span>{lastInitial}</span>
        </div>
      </div>
    );
  }
}

export default ProfilePic;
