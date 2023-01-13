import React, { Component } from 'react';
import CloseFormBtn from './CloseFormBtn';
import uniqid from 'uniqid';
import '../styles/Skills.css';

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      skills: [
        { skill: 'Problem solving', id: uniqid() },
        { skill: 'Time management', id: uniqid() },
        { skill: '', id: uniqid() },
        { skill: '', id: uniqid() },
        { skill: '', id: uniqid() },
        { skill: '', id: uniqid() },
      ],
    };
    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleEdit() {
    this.setState({ editing: !this.state.editing });
  }

  handleChange(e) {
    this.setState({
      skills: this.state.skills.map((s) => {
        if (e.target.id === s.id) return { ...s, skill: e.target.value };
        return s;
      }),
    });
  }

  handleSubmit() {
    this.toggleEdit();
  }

  render() {
    const { skills, editing } = this.state;

    const content = (
      <ul>
        {skills.map((s) => (
          <li key={s.id}>{s.skill}</li>
        ))}
      </ul>
    );

    const form = (
      <form className="Skills-form" onSubmit={this.handleSubmit}>
        {skills.map((s) => (
          <input
            key={s.id}
            id={s.id}
            value={s.skill}
            type="text"
            onChange={this.handleChange}
          />
        ))}
        <CloseFormBtn handleSubmit={this.handleSubmit} />
      </form>
    );

    return (
      <section
        className="Skills"
        onClick={!editing ? this.toggleEdit : undefined}
      >
        <h3>Skills</h3>
        {this.state.editing ? form : content}
      </section>
    );
  }
}

export default Skills;
