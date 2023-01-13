import React, { Component } from 'react';

class CloseFormBtn extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.addItem();
  }

  render() {
    return (
      <button type="button" onClick={this.handleClick}>
        +
      </button>
    );
  }
}

export default CloseFormBtn;
