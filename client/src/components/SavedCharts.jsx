import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCharts, reset, deleteChart } from '../features/chartSlice';
import { getFullSignName } from '../util/utils';

const SavedCharts = () => {
  const { user } = useSelector((state) => state.auth);
  const { charts } = useSelector((state) => state.chart);
  const dispatch = useDispatch();

  const handleDeleteChart = (e, id) => {
    console.log(id);
    dispatch(deleteChart(id));
  };

  const handleSetDefaultChart = (e, id) => {
    console.log(id);
  };

  useEffect(() => {
    console.log(charts);
  }, [charts]);
  useEffect(() => {
    dispatch(getCharts());

    //Cleanup function, will reset on Goals component unmount
    return () => {
      dispatch(reset());
    };
  }, [dispatch, user]);
  return (
    <section className='flex w-full flex-col'>
      <h5>Saved Charts</h5>
      <ul className='mr-4 flex h-1/2 flex-col sm:h-80 sm:overflow-scroll md:h-96'>
        {charts?.map((chart) => (
          <li className='mb-2 flex cursor-pointer items-center justify-between rounded border border-slate-300 py-2 px-4'>
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
              <button className='mb-1 rounded border border-primary-700 bg-slate-50 shadow hover:bg-slate-100'>
                View Full Chart
              </button>
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
