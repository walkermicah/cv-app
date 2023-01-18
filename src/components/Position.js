import '../styles/Position.css';

export default function Position(props) {
  const { title, company, startDate, endDate, duties } = props;

  return (
    <li className="Position">
      <h4>{title}</h4>
      <h5>
        {company} / {startDate} - {endDate}
      </h5>
      <p>{duties}</p>
    </li>
  );
}
