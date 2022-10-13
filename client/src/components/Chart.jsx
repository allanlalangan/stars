import { useLocation } from 'react-router-dom';

const Chart = (props) => {
  const location = useLocation;
  return (
    <div>
      <h3>{props.name}</h3>
      <p>{props.sun}</p>
    </div>
  );
};
export default Chart;
