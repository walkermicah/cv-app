import React, { useState } from 'react';
import CloseFormBtn from './CloseFormBtn';
import useToggleEdit from '../hooks/useToggleEdit';
import uniqid from 'uniqid';
import '../styles/Contact.css';

export default function Contact() {
  const [editing, toggleEdit] = useToggleEdit();
  const [state, setState] = useState({
    email: 'youremail@gmail.com',
    phone: '555 389 1884',
    address: '2364 Avenue Street',
    linkedin: 'linkedin.com/yourprofile',
  });

  const contactLabels = [
    { type: 'email', iconClass: 'fa-sharp fa-solid fa-envelope' },
    { type: 'phone', iconClass: 'fa-solid fa-phone' },
    { type: 'address', iconClass: 'fa-solid fa-house' },
    { type: 'linkedin', iconClass: 'fa-brands fa-linkedin' },
  ];

  const { email, phone, address, linkedin } = state;

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const content = (
    <section className="Contact" onClick={!editing ? toggleEdit : undefined}>
      <ul>
        {contactLabels.map((c) => (
          <li key={uniqid()}>
            <i className={c.iconClass}></i>
            {state[c.type]}
          </li>
        ))}
      </ul>
    </section>
  );

  const form = (
    <form className="Contact-form">
      <div className="form-field">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </div>

      <div className="form-field">
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          type="text"
          name="phone"
          value={phone}
          onChange={handleChange}
        />
      </div>

      <div className="form-field">
        <label htmlFor="address">Address</label>
        <input
          id="address"
          type="text"
          name="address"
          value={address}
          onChange={handleChange}
        />
      </div>

      <div className="form-field">
        <label htmlFor="linkedin">Linkedin</label>
        <input
          id="linkedin"
          type="text"
          name="linkedin"
          value={linkedin}
          onChange={handleChange}
        />
      </div>

      <CloseFormBtn handleSubmit={toggleEdit} />
    </form>
  );

  return editing ? form : content;
}
