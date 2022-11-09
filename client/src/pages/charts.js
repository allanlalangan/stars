import { Link } from 'react-router-dom';
import NatalForm from '../components/NatalForm';
import SavedCharts from '../components/SavedCharts';
const ChartsPage = ({ isLoaded }) => {
  return (
    <article className='flex flex-col overflow-y-scroll sm:w-1/2'>
      <SavedCharts />
      {isLoaded && <NatalForm />}
    </article>
  );
};
export default ChartsPage;
