import React, { Component } from 'react';
import Position from './Position';
import AddItemBtn from './AddItemBtn';
import DeleteItemBtn from './DeleteItemBtn';
import CloseFormBtn from './CloseFormBtn';
import uniqid from 'uniqid';
import '../styles/Experience.css';

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      exp: [
        {
          title: 'Position title',
          company: 'Company',
          start: '2019',
          end: '2020',
          duties:
            'List your job duties here. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          id: uniqid(),
        },
        {
          title: 'Position title',
          company: 'Company',
          start: '2019',
          end: '2020',
          duties:
            'List your job duties here. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          id: uniqid(),
        },
        {
          title: 'Position title',
          company: 'Company',
          start: '2019',
          end: '2020',
          duties:
            'List your job duties here. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          id: uniqid(),
        },
      ],
    };
    this.toggleEdit = this.toggleEdit.bind(this);
    this.addJob = this.addJob.bind(this);
    this.deleteJob = this.deleteJob.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  addJob() {
    this.setState({
      exp: [
        ...this.state.exp,
        {
          title: 'Position title',
          company: 'Company',
          start: '2019',
          end: '2020',
          duties: 'List your job duties here',
          id: uniqid(),
        },
      ],
    });
  }

  deleteJob(e) {
    this.setState({
      exp: this.state.exp.filter((ex) => ex.id !== e.target.id),
    });
  }

  toggleEdit() {
    this.setState({ editing: !this.state.editing });
  }

  handleChange(e) {
    this.setState({
      exp: this.state.exp.map((ex) => {
        if (e.target.dataset.id === ex.id)
          return { ...ex, [e.target.name]: e.target.value };
        return ex;
      }),
    });
  }

  handleSubmit() {
    this.toggleEdit();
  }

  render() {
    const { exp, editing } = this.state;

    const content = (
      <ul>
        {exp.map((p) => (
          <Position
            title={p.title}
            company={p.company}
            startDate={p.start}
            endDate={p.end}
            duties={p.duties}
            key={p.id}
          />
        ))}
      </ul>
    );

    const form = (
      <form className="Experience-form">
        {exp.map((ex) => (
          <div key={ex.id} className="Experience-form-block">
            <div className="Experience-form-fields">
              <div className="Experience-form-field">
                <label htmlFor="title">Position title</label>
                <input
                  id="title"
                  value={ex.title}
                  type="text"
                  name="title"
                  data-id={ex.id}
                  onChange={this.handleChange}
                />
              </div>

              <div className="Experience-form-field">
                <label htmlFor="company">Company</label>
                <input
                  id="company"
                  value={ex.company}
                  type="text"
                  name="company"
                  data-id={ex.id}
                  onChange={this.handleChange}
                />
              </div>

              <div className="Experience-form-field">
                <label htmlFor="start">Start</label>
                <input
                  id="start"
                  value={ex.start}
                  type="text"
                  name="start"
                  data-id={ex.id}
                  onChange={this.handleChange}
                />
              </div>

              <div className="Experience-form-field">
                <label htmlFor="end">End</label>
                <input
                  id="end"
                  value={ex.end}
                  type="text"
                  name="end"
                  data-id={ex.id}
                  onChange={this.handleChange}
                />
              </div>

              <div className="Experience-form-field">
                <label htmlFor="duties">Job duties</label>
                <textarea
                  id="duties"
                  value={ex.duties}
                  name="duties"
                  data-id={ex.id}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <DeleteItemBtn deleteItem={this.deleteJob} id={ex.id} />
          </div>
        ))}
        <div className="Experience-form-btns">
          <AddItemBtn addItem={this.addJob} />
          <CloseFormBtn handleSubmit={this.handleSubmit} />
        </div>
      </form>
    );

    return (
      <section
        className="Experience"
        onClick={!editing ? this.toggleEdit : undefined}
      >
        <h3>Experience</h3>
        {editing ? form : content}
      </section>
    );
  }
}

export default Experience;
