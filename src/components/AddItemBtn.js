export default function AddItemBtn(props) {
  const handleClick = () => {
    props.addItem();
  };

  return (
    <button type="button" onClick={handleClick}>
      +
    </button>
  );
}
