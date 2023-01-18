export default function Institution(props) {
  const { degree, institution, location, start, end } = props;

  return (
    <li>
      <h4>{degree}</h4>
      <p>
        {institution}, {location}
      </p>
      <p>
        {start} - {end}
      </p>
    </li>
  );
}
