import React, { useState } from 'react';
import Institution from './Institution';
import CloseFormBtn from './CloseFormBtn';
import AddItemBtn from './AddItemBtn';
import DeleteItemBtn from './DeleteItemBtn';
import useToggleEdit from '../hooks/useToggleEdit';
import uniqid from 'uniqid';
import '../styles/Education.css';

export default function Education() {
  const initialEducation = [
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
  ];

  const [editing, toggleEdit] = useToggleEdit();
  const [education, setEducation] = useState(initialEducation);

  const addInstitution = () => {
    setEducation(...education, {
      degree: 'Degree name / major',
      institution: 'Institution',
      location: 'Location',
      start: 2022,
      end: 2023,
      id: uniqid(),
    });
  };

  const deleteInstitution = (e) => {
    setEducation(education.filter((ed) => ed.id !== e.target.id));
  };

  const handleChange = (e) => {
    setEducation(
      education.map((ed) => {
        if (e.target.dataset.id === ed.id)
          return { ...ed, [e.target.name]: e.target.value };
        return ed;
      })
    );
  };

  const content = (
    <ul>
      {education.map((ed) => (
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
      {education.map((ed) => (
        <div key={ed.id} className="Education-form-block">
          <div className="Education-form-field">
            <label htmlFor="degree">Degree</label>
            <input
              id="degree"
              value={ed.degree}
              type="text"
              name="degree"
              data-id={ed.id}
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
            />
          </div>
          <DeleteItemBtn deleteItem={deleteInstitution} id={ed.id} />
        </div>
      ))}
      <div className="Skills-form-btns">
        <AddItemBtn addItem={addInstitution} />
        <CloseFormBtn handleSubmit={toggleEdit} />
      </div>
    </form>
  );

  return (
    <section className="Education" onClick={!editing ? toggleEdit : undefined}>
      <h3>Education</h3>
      {editing ? form : content}
    </section>
  );
}
