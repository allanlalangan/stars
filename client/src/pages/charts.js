import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import NatalForm from '../components/NatalForm';
import SavedCharts from '../components/SavedCharts';
import { getCharts, reset } from '../features/chartSlice';
const ChartsPage = ({ isLoaded }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const { charts } = useSelector((state) => state.chart);

  useEffect(() => {
    dispatch(getCharts());

    //Cleanup function, will reset on charts component unmount
    return () => {
      dispatch(reset());
    };
  }, [dispatch, user]);
  return (
    <article className='flex h-full flex-col sm:w-1/2'>
      <SavedCharts charts={charts} />
      {isLoaded && <NatalForm />}
      <Outlet />
    </article>
  );
};
export default ChartsPage;
