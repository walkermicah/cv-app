import CloseFormBtn from './CloseFormBtn';
import useToggleEdit from '../hooks/useToggleEdit';
import useInputState from '../hooks/useInputState';
import '../styles/Profile.css';

export default function Profile() {
  const initialProfile =
    'Provide a concise summary of your career to date. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';

  const [editing, toggleEdit] = useToggleEdit();
  const [profile, updateProfile] = useInputState(initialProfile);

  const content = <p>{profile}</p>;

  const form = (
    <form className="Profile-form">
      <div className="form-field">
        <textarea name="profile" value={profile} onChange={updateProfile} />
      </div>
      <CloseFormBtn handleSubmit={toggleEdit} />
    </form>
  );

  return (
    <section className="Profile" onClick={!editing ? toggleEdit : undefined}>
      <h3>Professional Profile</h3>
      {editing ? form : content}
    </section>
  );
}
