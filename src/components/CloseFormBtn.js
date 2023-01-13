import React, { Component } from 'react';
import '../styles/CloseFormBtn.css';

class CloseFormBtn extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.handleSubmit();
  }

  render() {
    return (
      <button className="CloseFormBtn" onClick={this.handleClick}>
        SAVE
      </button>
    );
  }
}

export default CloseFormBtn;
