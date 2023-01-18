export default function CloseFormBtn(props) {
  const handleClick = (e) => {
    e.preventDefault();
    props.handleSubmit();
  };

  return (
    <button className="CloseFormBtn" type="submit" onClick={handleClick}>
      SAVE
    </button>
  );
}
