import React, { Component } from 'react';
import CloseFormBtn from './CloseFormBtn';
import uniqid from 'uniqid';
import '../styles/Contact.css';

class Contact extends Component {
  static defaultProps = {
    info: [
      { type: 'email', iconClass: 'fa-sharp fa-solid fa-envelope' },
      { type: 'phone', iconClass: 'fa-solid fa-phone' },
      { type: 'address', iconClass: 'fa-solid fa-house' },
      { type: 'linkedin', iconClass: 'fa-brands fa-linkedin' },
    ],
  };

  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      email: 'youremail@gmail.com',
      phone: '555 389 1884',
      address: '2364 Hoffman Avenue',
      linkedin: 'linkedin.com/yourprofile',
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
    const { info } = this.props;
    const { email, phone, address, linkedin, editing } = this.state;

    const content = (
      <section
        className="Contact"
        onClick={!editing ? this.toggleEdit : undefined}
      >
        <ul>
          {info.map((i) => (
            <li key={uniqid()}>
              <i className={i.iconClass}></i>
              {this.state[i.type]}
            </li>
          ))}
        </ul>
      </section>
    );

    const form = (
      <form className="Contact-form" onSubmit={this.handleSubmit}>
        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
        </div>

        <div className="form-field">
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            type="text"
            name="phone"
            value={phone}
            onChange={this.handleChange}
          />
        </div>

        <div className="form-field">
          <label htmlFor="address">Address</label>
          <input
            id="address"
            type="text"
            name="address"
            value={address}
            onChange={this.handleChange}
          />
        </div>

        <div className="form-field">
          <label htmlFor="linkedin">Linkedin</label>
          <input
            id="linkedin"
            type="text"
            name="linkedin"
            value={linkedin}
            onChange={this.handleChange}
          />
        </div>

        <CloseFormBtn handleSubmit={this.handleSubmit} />
      </form>
    );

    return this.state.editing ? form : content;
  }
}

export default Contact;
