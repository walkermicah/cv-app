import React, { Component } from 'react';

class DeleteItemBtn extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.deleteItem(e);
  }

  render() {
    return (
      <button
        type="button"
        className="DeleteItemBtn"
        onClick={this.handleClick}
        // id={this.props.id}
      >
        <i className="fa-sharp fa-solid fa-trash" id={this.props.id}></i>
      </button>
    );
  }
}

export default DeleteItemBtn;
