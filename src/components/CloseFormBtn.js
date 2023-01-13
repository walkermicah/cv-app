import React, { Component } from 'react';

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
      <button className="CloseFormBtn" type="submit" onClick={this.handleClick}>
        SAVE
      </button>
    );
  }
}

export default CloseFormBtn;
