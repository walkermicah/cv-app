import ProfilePic from './ProfilePic';
import CloseFormBtn from './CloseFormBtn';
import useToggleEdit from '../hooks/useToggleEdit';
import useInputState from '../hooks/useInputState';
import '../styles/Header.css';

export default function Header() {
  const [editing, toggleEdit] = useToggleEdit();
  const [firstName, updateFirstName] = useInputState('Your');
  const [lastName, updateLastName] = useInputState('Name');
  const [title, updateTitle] = useInputState('Professional title');

  const firstInitial = firstName.slice(0, 1);
  const lastInitial = lastName.slice(0, 1);

  const content = (
    <div className="Header-text" onClick={!editing ? toggleEdit : undefined}>
      <h1>
        {firstName} <br></br>
        {lastName}
      </h1>
      <h2>{title}</h2>
    </div>
  );

  const form = (
    <form className="Header-form">
      <div className="form-field">
        <label htmlFor="first-name">First Name</label>
        <input
          id="first-name"
          type="text"
          name="firstName"
          value={firstName}
          onChange={updateFirstName}
        />
      </div>

      <div className="form-field">
        <label htmlFor="last-name">Last Name</label>
        <input
          id="last-name"
          type="text"
          name="lastName"
          value={lastName}
          onChange={updateLastName}
        />
      </div>

      <div className="form-field">
        <label htmlFor="title">Professional title</label>
        <input
          id="title"
          type="text"
          name="title"
          value={title}
          onChange={updateTitle}
        />
      </div>

      <CloseFormBtn handleSubmit={toggleEdit} />
    </form>
  );

  return (
    <header className="Header">
      {editing ? form : content}
      <ProfilePic firstInitial={firstInitial} lastInitial={lastInitial} />
    </header>
  );
}
