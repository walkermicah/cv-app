import React, { useState } from 'react';
import Position from './Position';
import AddItemBtn from './AddItemBtn';
import DeleteItemBtn from './DeleteItemBtn';
import CloseFormBtn from './CloseFormBtn';
import useToggleEdit from '../hooks/useToggleEdit';
import uniqid from 'uniqid';
import '../styles/Experience.css';

export default function Experience() {
  const initialExperience = [
    {
      title: 'Position title',
      company: 'Company',
      start: 2019,
      end: 2020,
      duties:
        'List your job duties here. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      id: uniqid(),
    },
    {
      title: 'Position title',
      company: 'Company',
      start: 2019,
      end: 2020,
      duties:
        'List your job duties here. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      id: uniqid(),
    },
    {
      title: 'Position title',
      company: 'Company',
      start: 2019,
      end: 2020,
      duties:
        'List your job duties here. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      id: uniqid(),
    },
  ];

  const [editing, toggleEdit] = useToggleEdit();
  const [experience, setExperience] = useState(initialExperience);

  const addJob = () => {
    setExperience([
      ...experience,
      {
        title: 'Position title',
        company: 'Company',
        start: '2019',
        end: '2020',
        duties: 'List your job duties here',
        id: uniqid(),
      },
    ]);
    console.log(experience);
  };

  const deleteJob = (e) => {
    setExperience(experience.filter((ex) => ex.id !== e.target.id));
  };

  const handleChange = (e) => {
    setExperience(
      experience.map((ex) => {
        if (e.target.dataset.id === ex.id)
          return { ...ex, [e.target.name]: e.target.value };
        return ex;
      })
    );
  };

  const content = (
    <ul>
      {experience.map((p) => (
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
      {experience.map((ex) => (
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
              />
            </div>

            <div className="Experience-form-field">
              <label htmlFor="duties">Job duties</label>
              <textarea
                id="duties"
                value={ex.duties}
                name="duties"
                data-id={ex.id}
                onChange={handleChange}
              />
            </div>
          </div>
          <DeleteItemBtn deleteItem={deleteJob} id={ex.id} />
        </div>
      ))}
      <div className="Experience-form-btns">
        <AddItemBtn addItem={addJob} />
        <CloseFormBtn handleSubmit={toggleEdit} />
      </div>
    </form>
  );

  return (
    <section className="Experience" onClick={!editing ? toggleEdit : undefined}>
      <h3>Experience</h3>
      {editing ? form : content}
    </section>
  );
}
