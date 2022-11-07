import { Link } from 'react-router-dom';
import NatalForm from '../components/NatalForm';
import SavedCharts from '../components/SavedCharts';
const ChartsPage = ({ isLoaded }) => {
  return (
    <article className='flex flex-col sm:w-1/2'>
      <h3>Star Charts</h3>
      {isLoaded && <NatalForm />}
      <SavedCharts />
    </article>
  );
};
export default ChartsPage;
