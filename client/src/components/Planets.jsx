import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reset } from '../features/authSlice';
import { getCurrentPlanets } from '../features/todaySlice';

const Planets = () => {
  const { data } = useSelector((state) => state.today);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(data);
  }, [data]);
  useEffect(() => {
    if (user && !data) {
      dispatch(getCurrentPlanets());
    }
  }, [user, dispatch]);
  return (
    <section className='col-span-12 row-span-3 flex flex-col border-2 border-primary-800 lg:col-span-6'>
      <h3 className='bg-slate-800 p-2 font-display text-secondary-200'>
        The Planets Today
      </h3>
      <ul className='m-4 grid h-full grid-cols-12 gap-4'>
        <li className='col-span-12 border border-slate-300 p-2'>
          <p className='font-heading'>{data?.sun?.name}</p>

          <p className='font-heading'>at {data?.sun?.position.toFixed(2)}°</p>
          <p className='font-heading'>{data?.sun?.sign}</p>
        </li>
        <li className='col-span-12 border border-slate-300 p-2'>
          <p className='font-heading'>{data?.moon?.name}</p>

          <p className='font-heading'>at {data?.moon?.position.toFixed(2)}°</p>
          <p className='font-heading'>{data?.moon?.sign}</p>
        </li>
        <li className='col-span-12 border border-slate-300 p-2 lg:col-span-4'>
          <p className='font-heading'>
            {data?.mercury?.name}
            {data?.mercury?.retrograde && (
              <span classNa1='text- ml-2orange-400 text-sm font-bold'>Rx</span>
            )}
          </p>

          <p className='font-heading'>
            at {data?.mercury?.position.toFixed(2)}°
          </p>
          <p className='font-heading'>{data?.mercury?.sign}</p>
        </li>
        <li className='col-span-12 border border-slate-300 p-2 lg:col-span-4'>
          <p className='font-heading'>
            {data?.venus?.name}
            {data?.venus?.retrograde && (
              <span classNa1='text- ml-2orange-400 text-sm font-bold'>Rx</span>
            )}
          </p>

          <p className='font-heading'>at {data?.venus?.position.toFixed(2)}°</p>
          <p className='font-heading'>{data?.venus?.sign}</p>
        </li>
        <li className='col-span-12 border border-slate-300 p-2 lg:col-span-4'>
          <p className='font-heading'>
            {data?.mars?.name}
            {data?.mars?.retrograde && (
              <span className='ml-1 text-sm font-bold text-orange-400'>Rx</span>
            )}
          </p>

          <p className='font-heading'>at {data?.mars?.position.toFixed(2)}°</p>
          <p className='font-heading'>{data?.mars?.sign}</p>
        </li>
        <li className='col-span-12 border border-slate-300 p-2 lg:col-span-6'>
          <p className='font-heading'>
            {data?.jupiter?.name}
            {data?.jupiter?.retrograde && (
              <span className='ml-1 text-sm font-bold text-orange-400'>Rx</span>
            )}
          </p>

          <p className='font-heading'>
            at {data?.jupiter?.position.toFixed(2)}°
          </p>
          <p className='font-heading'>{data?.jupiter?.sign}</p>
        </li>
        <li className='col-span-12 border border-slate-300 p-2 lg:col-span-6'>
          <p className='font-heading'>
            {data?.saturn?.name}
            {data?.saturn?.retrograde && (
              <span classNa1='text- ml-2orange-400 text-sm font-bold'>Rx</span>
            )}
          </p>

          <p className='font-heading'>
            at {data?.saturn?.position.toFixed(2)}°
          </p>
          <p className='font-heading'>{data?.saturn?.sign}</p>
        </li>
        <li className='col-span-12 border border-slate-300 p-2 lg:col-span-6'>
          <p className='font-heading'>
            {data?.uranus?.name}
            {data?.uranus?.retrograde && (
              <span className='ml-1 text-sm font-bold text-orange-400'>Rx</span>
            )}
          </p>

          <p className='font-heading'>
            at {data?.uranus?.position.toFixed(2)}°
          </p>
          <p className='font-heading'>{data?.uranus?.sign}</p>
        </li>
        <li className='col-span-12 border border-slate-300 p-2 lg:col-span-6'>
          <p className='font-heading'>
            {data?.neptune?.name}
            {data?.neptune?.retrograde && (
              <span className='ml-1 text-sm font-bold text-orange-400'>Rx</span>
            )}
          </p>

          <p className='font-heading'>
            at {data?.neptune?.position.toFixed(2)}°
          </p>
          <p className='font-heading'>{data?.neptune?.sign}</p>
        </li>
        <li className='col-span-12 border border-slate-300 p-2 lg:col-span-6'>
          <p className='font-heading'>
            {data?.pluto?.name}
            {data?.pluto?.retrograde && (
              <span className='ml-1 text-sm font-bold text-orange-400'>Rx</span>
            )}
          </p>

          <p className='font-heading'>at {data?.pluto?.position.toFixed(2)}°</p>
          <p className='font-heading'>{data?.pluto?.sign}</p>
        </li>
        <li className='col-span-6 border border-slate-300 p-2'>
          <p className='font-heading'>
            North Node
            {data?.true_node?.retrograde && (
              <span className='ml-1 text-sm font-bold text-orange-400'>Rx</span>
            )}
          </p>

          <p className='font-heading'>
            at {data?.true_node?.position.toFixed(2)}°
          </p>
          <p className='font-heading'>{data?.true_node?.sign}</p>
        </li>
      </ul>
    </section>
  );
};
export default Planets;
