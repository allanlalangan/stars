import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteChart } from '../features/chartSlice';
import { getFullSignName } from '../util/utils';

const SavedCharts = () => {
  const { charts } = useSelector((state) => state.chart);

  const dispatch = useDispatch();

  const handleDeleteChart = (e, id) => {
    console.log(id);
    dispatch(deleteChart(id));
  };

  const handleSetDefaultChart = (e, id) => {
    console.log(id);
  };

  return (
    <section className='mb-4 flex h-full w-full flex-col md:mb-2'>
      <h5>Saved Charts</h5>
      <ul className='flex h-full flex-col p-4 sm:h-80 sm:overflow-y-scroll md:h-96'>
        {charts?.map((chart) => (
          <li
            key={chart._id}
            className='mb-2 flex cursor-pointer items-center justify-between rounded border border-slate-300 py-2 px-4'
          >
            <article className='flex w-1/2 flex-col'>
              <h6 className='font-display'>{chart.name}</h6>
              <p className='font-heading text-xs'>{`${getFullSignName(
                chart.planets.sun.sign
              )} ${chart.planets.sun.name}`}</p>
              <p className='font-heading text-xs'>{`${getFullSignName(
                chart.planets.moon.sign
              )} ${chart.planets.moon.name}`}</p>
              <p className='font-heading text-xs'>{`${getFullSignName(
                chart.houses.first_house.sign
              )} Rising`}</p>
            </article>
            <section className='flex w-1/2 flex-col'>
              <Link className='w-full' to={`${chart._id}`}>
                <button className='mb-1 w-full rounded border border-primary-700 bg-slate-50 shadow hover:bg-slate-100'>
                  View Full Chart
                </button>
              </Link>
              <button
                onClick={(e) => handleSetDefaultChart(e, chart._id)}
                className='mb-1 rounded border border-primary-700 bg-slate-50 shadow hover:bg-slate-100'
              >
                Set Default
              </button>
              <button
                onClick={(e) => handleDeleteChart(e, chart._id)}
                className='mb-1 rounded border border-primary-700 bg-slate-50 shadow hover:bg-slate-100'
              >
                Delete
              </button>
            </section>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default SavedCharts;
