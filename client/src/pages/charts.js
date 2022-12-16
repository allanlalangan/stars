import NatalForm from '../components/NatalForm';
import SavedCharts from '../components/SavedCharts';

const ChartsPage = ({ isLoaded }) => {
  return (
    <article className='flex flex-col-reverse sm:h-full sm:w-1/2'>
      <SavedCharts />
      {isLoaded && <NatalForm />}
    </article>
  );
};
export default ChartsPage;
