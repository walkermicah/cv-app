import React, { Component } from 'react';
import CloseFormBtn from './CloseFormBtn';
import '../styles/Profile.css';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      profile:
        'Provide a concise summary of your career to date. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    };
    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleEdit() {
    this.setState({ editing: !this.state.editing });
  }

  handleChange(e) {
    this.setState({ profile: e.target.value });
  }

  handleSubmit() {
    this.toggleEdit();
  }

  render() {
    const { profile, editing } = this.state;
    const content = <p>{this.state.profile}</p>;

    const form = (
      <form className="Profile-form" onSubmit={this.handleSubmit}>
        <div className="form-field">
          <textarea
            name="profile"
            value={profile}
            onChange={this.handleChange}
          />
        </div>
        <CloseFormBtn handleSubmit={this.handleSubmit} />
      </form>
    );

    return (
      <section
        className="Profile"
        onClick={!editing ? this.toggleEdit : undefined}
      >
        <h3>Professional Profile</h3>
        {this.state.editing ? form : content}
      </section>
    );
  }
}

export default Profile;
