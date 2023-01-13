import React, { Component } from 'react';
import Institution from './Institution';
import CloseFormBtn from './CloseFormBtn';
import AddItemBtn from './AddItemBtn';
import DeleteItemBtn from './DeleteItemBtn';
import uniqid from 'uniqid';
import '../styles/Education.css';

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      educ: [
        {
          degree: 'Degree name / major',
          institution: 'Institution',
          location: 'Location',
          start: 2022,
          end: 2023,
          id: uniqid(),
        },
        {
          degree: 'Degree name / major',
          institution: 'Institution',
          location: 'Location',
          start: 2022,
          end: 2023,
          id: uniqid(),
        },
      ],
    };
    this.toggleEdit = this.toggleEdit.bind(this);
    this.addInstitution = this.addInstitution.bind(this);
    this.deleteInstitution = this.deleteInstitution.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleEdit() {
    this.setState({ editing: !this.state.editing });
  }

  addInstitution() {
    this.setState({
      educ: [
        ...this.state.educ,
        {
          degree: 'Degree name / major',
          institution: 'Institution',
          location: 'Location',
          start: 2022,
          end: 2023,
          id: uniqid(),
        },
      ],
    });
  }

  deleteInstitution(e) {
    this.setState({
      educ: this.state.educ.filter((ed) => ed.id !== e.target.id),
    });
  }

  handleChange(e) {
    this.setState({
      educ: this.state.educ.map((ed) => {
        if (e.target.dataset.id === ed.id)
          return { ...ed, [e.target.name]: e.target.value };
        return ed;
      }),
    });
  }

  handleSubmit() {
    this.toggleEdit();
  }

  render() {
    const { educ, editing } = this.state;

    const content = (
      <ul>
        {educ.map((ed) => (
          <Institution
            degree={ed.degree}
            institution={ed.institution}
            location={ed.location}
            start={ed.start}
            end={ed.end}
            key={ed.id}
          />
        ))}
      </ul>
    );

    const form = (
      <form className="Education-form">
        {educ.map((ed) => (
          <div key={ed.id} className="Education-form-block">
            <div className="Education-form-field">
              <label htmlFor="degree">Degree</label>
              <input
                id="degree"
                value={ed.degree}
                type="text"
                name="degree"
                data-id={ed.id}
                onChange={this.handleChange}
              />
            </div>

            <div className="Education-form-field">
              <label htmlFor="institution">School</label>
              <input
                id="institution"
                value={ed.institution}
                type="text"
                name="institution"
                data-id={ed.id}
                onChange={this.handleChange}
              />
            </div>

            <div className="Education-form-field">
              <label htmlFor="location">Location</label>
              <input
                id="location"
                value={ed.location}
                type="text"
                name="location"
                data-id={ed.id}
                onChange={this.handleChange}
              />
            </div>

            <div className="Education-form-field">
              <label htmlFor="start">Start</label>
              <input
                id="start"
                value={ed.start}
                type="text"
                name="start"
                data-id={ed.id}
                onChange={this.handleChange}
              />
            </div>

            <div className="Education-form-field">
              <label htmlFor="end">End</label>
              <input
                id="end"
                value={ed.end}
                type="text"
                name="end"
                data-id={ed.id}
                onChange={this.handleChange}
              />
            </div>
            <DeleteItemBtn deleteItem={this.deleteInstitution} id={ed.id} />
          </div>
        ))}
        <div className="Skills-form-btns">
          <AddItemBtn addItem={this.addInstitution} />
          <CloseFormBtn handleSubmit={this.handleSubmit} />
        </div>
      </form>
    );

    return (
      <section
        className="Education"
        onClick={!editing ? this.toggleEdit : undefined}
      >
        <h3>Education</h3>
        {editing ? form : content}
      </section>
    );
  }
}

export default Education;
