import React, { useState } from 'react';
import AddItemBtn from './AddItemBtn';
import DeleteItemBtn from './DeleteItemBtn';
import CloseFormBtn from './CloseFormBtn';
import useToggleEdit from '../hooks/useToggleEdit';
import useInputState from '../hooks/useInputState';
import uniqid from 'uniqid';
import '../styles/Skills.css';

export default function Skills() {
  const initialSkills = [
    { skill: 'Problem solving', id: uniqid() },
    { skill: 'Time management', id: uniqid() },
    { skill: 'Team building', id: uniqid() },
  ];

  const [editing, toggleEdit] = useToggleEdit();
  const [skills, setSkills] = useState(initialSkills);

  const addSkill = () => {
    setSkills([...skills, { skill: '', id: uniqid() }]);
  };

  const deleteSkill = (e) => {
    setSkills(skills.filter((s) => s.id !== e.target.id));
  };

  const handleChange = (e) => {
    setSkills(
      skills.map((s) => {
        if (e.target.id === s.id) return { ...s, skill: e.target.value };
        return s;
      })
    );
  };

  const content = (
    <ul>
      {skills.map((s) => (
        <li key={s.id}>{s.skill}</li>
      ))}
    </ul>
  );

  const form = (
    <form className="Skills-form">
      {skills.map((s) => (
        <div className="Skills-form-field" key={s.id}>
          <input
            id={s.id}
            value={s.skill}
            type="text"
            onChange={handleChange}
          />
          <DeleteItemBtn deleteItem={deleteSkill} id={s.id} />
        </div>
      ))}
      <div className="Skills-form-btns">
        <AddItemBtn addItem={addSkill} />
        <CloseFormBtn handleSubmit={toggleEdit} />
      </div>
    </form>
  );

  return (
    <section className="Skills" onClick={!editing ? toggleEdit : undefined}>
      <h3>Skills </h3>
      {editing ? form : content}
    </section>
  );
}
