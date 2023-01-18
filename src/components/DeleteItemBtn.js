export default function DeleteItemBtn(props) {
  const handleClick = (e) => {
    props.deleteItem(e);
  };

  return (
    <button type="button" className="DeleteItemBtn" onClick={handleClick}>
      <i className="fa-sharp fa-solid fa-trash" id={props.id}></i>
    </button>
  );
}
