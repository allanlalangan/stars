import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCharts, reset } from '../features/chartSlice';
import { getFullSignName } from '../util/utils';

const SavedCharts = () => {
  const { user } = useSelector((state) => state.auth);
  const { charts } = useSelector((state) => state.chart);
  const dispatch = useDispatch();
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
      <ul className='flex h-1/2 flex-col p-4 px-8 sm:h-80 sm:overflow-scroll md:h-96'>
        {charts?.map((chart) => (
          <li className='my-2 cursor-pointer border border-slate-300 py-2 px-4'>
            <p>{chart.name}</p>
            <p>{`${getFullSignName(chart.planets.sun.sign)} ${
              chart.planets.sun.name
            }`}</p>
            <p>{`${getFullSignName(chart.planets.moon.sign)} ${
              chart.planets.moon.name
            }`}</p>
            <p>{`${getFullSignName(chart.houses.first_house.sign)} Rising`}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default SavedCharts;
