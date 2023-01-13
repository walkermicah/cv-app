import React, { Component } from 'react';

class Institution extends Component {
  render() {
    const { degree, institution, location, start, end } = this.props;

    return (
      <li>
        <h4>{degree}</h4>
        <p>
          {institution}, {location}
        </p>
        <p>
          {start} - {end}
        </p>
      </li>
    );
  }
}

export default Institution;
