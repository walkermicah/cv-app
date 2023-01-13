import React, { Component } from 'react';
import ProfilePic from './ProfilePic';
import CloseFormBtn from './CloseFormBtn';
import '../styles/Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      firstName: 'Your',
      lastName: 'Name',
      title: 'Professional title',
    };
    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleEdit() {
    this.setState({ editing: !this.state.editing });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit() {
    this.toggleEdit();
  }

  render() {
    const { firstName, lastName, title, editing } = this.state;
    const firstInitial = firstName.slice(0, 1);
    const lastInitial = lastName.slice(0, 1);

    const content = (
      <div className="Heading-text">
        <h1>
          {firstName} <br></br>
          {lastName}
        </h1>
        <h2>{title}</h2>
      </div>
    );

    const form = (
      <form className="Heading-form" onSubmit={this.handleSubmit}>
        <div className="form-field">
          <label htmlFor="first-name">First Name</label>
          <input
            id="first-name"
            type="text"
            name="firstName"
            value={firstName}
            onChange={this.handleChange}
          />
        </div>

        <div className="form-field">
          <label htmlFor="last-name">Last Name</label>
          <input
            id="last-name"
            type="text"
            name="lastName"
            value={lastName}
            onChange={this.handleChange}
          />
        </div>

        <div className="form-field">
          <label htmlFor="title">Professional title</label>
          <input
            id="title"
            type="text"
            name="title"
            value={title}
            onChange={this.handleChange}
          />
        </div>

        <CloseFormBtn handleSubmit={this.handleSubmit} />
      </form>
    );

    return (
      <header
        className="Heading"
        onClick={!editing ? this.toggleEdit : undefined}
      >
        {this.state.editing ? form : content}
        <ProfilePic firstInitial={firstInitial} lastInitial={lastInitial} />
      </header>
    );
  }
}

export default Header;
