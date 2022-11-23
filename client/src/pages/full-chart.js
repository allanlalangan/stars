import { useParams } from 'react-router-dom';

const FullChartPage = () => {
  const { id } = useParams();

  return (
    <div>
      <figure>Chart Wheel</figure>
      <section>
        <p>{id}</p>
      </section>
    </div>
  );
};
export default FullChartPage;
