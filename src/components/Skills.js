import React, { Component } from 'react';
import AddItemBtn from './AddItemBtn';
import DeleteItemBtn from './DeleteItemBtn';
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
        { skill: 'Team building', id: uniqid() },
      ],
    };
    this.addSkill = this.addSkill.bind(this);
    this.deleteSkill = this.deleteSkill.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleEdit() {
    this.setState({ editing: !this.state.editing });
  }

  addSkill() {
    this.setState({
      skills: [...this.state.skills, { skill: '', id: uniqid() }],
    });
  }

  deleteSkill(e) {
    this.setState({
      skills: this.state.skills.filter((s) => s.id !== e.target.id),
    });
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
          <div className="Skills-form-field" key={s.id}>
            <input
              id={s.id}
              value={s.skill}
              type="text"
              onChange={this.handleChange}
            />
            <DeleteItemBtn deleteItem={this.deleteSkill} id={s.id} />
          </div>
        ))}
        <div className="Skills-form-btns">
          <AddItemBtn addItem={this.addSkill} />
          <CloseFormBtn handleSubmit={this.handleSubmit} />
        </div>
      </form>
    );

    return (
      <section
        className="Skills"
        onClick={!editing ? this.toggleEdit : undefined}
      >
        <h3>Skills </h3>
        {this.state.editing ? form : content}
      </section>
    );
  }
}

export default Skills;
