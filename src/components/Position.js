import React, { Component } from 'react';
import '../styles/Position.css';

class Position extends Component {
  render() {
    const { title, company, startDate, endDate, duties } = this.props;

    return (
      <li className="Position">
        <h4>{title}</h4>
        <h5>
          {company} / {startDate} - {endDate}
        </h5>
        <p>{duties}</p>
      </li>
    );
  }
}

export default Position;
