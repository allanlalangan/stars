import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reset } from '../features/authSlice';
import { getCurrentPlanets } from '../features/todaySlice';
import { getFullSignName } from '../util/utils';
import { signs, planets } from '../util/astrology';

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
    <section className='col-span-12 row-span-3 flex flex-col rounded border-2 border-primary-800 lg:col-span-6'>
      <h3 className='rounded-t-sm bg-slate-800 p-2 font-display text-secondary-200'>
        The Planets Today
      </h3>

      <ul className='m-4 grid h-full grid-cols-12 gap-4'>
        {!data ? (
          <span className='col-span-12 flex h-full items-center justify-center font-heading text-lg tracking-wide'>
            fetching data...
          </span>
        ) : (
          <>
            <li className='col-span-12 flex items-center justify-between rounded border border-primary-200 p-2 shadow-sm'>
              <div className=''>
                <p className='font-heading'>{data.sun.name}</p>
                <p className='font-heading'>{data.sun.position.toFixed(2)}°</p>
                <p className='font-heading'>{getFullSignName(data.sun.sign)}</p>
              </div>
              <p className='text-4xl'>
                {planets[data.sun.name.toLowerCase()].glyph}
              </p>
            </li>
            <li className='col-span-12 flex items-center justify-between rounded border border-primary-200 p-2 shadow-sm'>
              <div className=''>
                <p className='font-heading'>{data.moon.name}</p>
                <p className='font-heading'>{data.moon.position.toFixed(2)}°</p>
                <p className='font-heading'>
                  {getFullSignName(data.moon.sign)}
                </p>
              </div>
              <p className='text-4xl'>
                {planets[data.moon.name.toLowerCase()].glyph}
              </p>
            </li>
            <li className='col-span-12 flex items-center justify-between rounded border border-primary-200 p-2 shadow-sm lg:col-span-4'>
              <div className=''>
                <p className='font-heading'>
                  {data.mercury.name}
                  {data.mercury.retrograde && (
                    <span className='ml-1 font-bold text-fuchsia-400'>℞</span>
                  )}
                </p>
                <p className='font-heading'>
                  {data.mercury.position.toFixed(2)}°
                </p>
                <p className='font-heading'>
                  {getFullSignName(data.mercury.sign)}
                </p>
              </div>
              <p className='text-4xl'>
                {planets[data.mercury.name.toLowerCase()].glyph}
              </p>
            </li>
            <li className='col-span-12 flex items-center justify-between rounded border border-primary-200 p-2 shadow-sm lg:col-span-4'>
              <div className=''>
                <p className='font-heading'>
                  {data.venus.name}
                  {data.venus.retrograde && (
                    <span className='ml-1 text-base font-bold text-fuchsia-400'>
                      ℞
                    </span>
                  )}
                </p>
                <p className='font-heading'>
                  {data.venus.position.toFixed(2)}°
                </p>
                <p className='font-heading'>
                  {getFullSignName(data.venus.sign)}
                </p>
              </div>
              <p className='text-4xl'>
                {planets[data.venus.name.toLowerCase()].glyph}
              </p>
            </li>
            <li className='col-span-12 flex items-center justify-between rounded border border-primary-200 p-2 shadow-sm lg:col-span-4'>
              <div className=''>
                <p className='font-heading'>
                  {data.mars.name}
                  {data.mars.retrograde && (
                    <span className='ml-1 text-base font-bold text-fuchsia-400'>
                      ℞
                    </span>
                  )}
                </p>
                <p className='font-heading'>{data.mars.position.toFixed(2)}°</p>
                <p className='font-heading'>
                  {getFullSignName(data.mars.sign)}
                </p>
              </div>
              <p className='text-4xl'>
                {planets[data.mars.name.toLowerCase()].glyph}
              </p>
            </li>
            <li className='col-span-12 flex items-center justify-between rounded border border-primary-200 p-2 shadow-sm lg:col-span-6'>
              <div className=''>
                <p className='font-heading'>
                  {data.jupiter.name}
                  {data.jupiter.retrograde && (
                    <span className='ml-1 text-base font-bold text-fuchsia-400'>
                      ℞
                    </span>
                  )}
                </p>
                <p className='font-heading'>
                  {data.jupiter.position.toFixed(2)}°
                </p>
                <p className='font-heading'>
                  {getFullSignName(data.jupiter.sign)}
                </p>
              </div>
              <p className='text-4xl'>
                {planets[data.jupiter.name.toLowerCase()].glyph}
              </p>
            </li>
            <li className='col-span-12 flex items-center justify-between rounded border border-primary-200 p-2 shadow-sm lg:col-span-6'>
              <div className=''>
                <p className='font-heading'>
                  {data.saturn.name}
                  {data.saturn.retrograde && (
                    <span className='ml-1 text-base font-bold text-fuchsia-400'>
                      ℞
                    </span>
                  )}
                </p>
                <p className='font-heading'>
                  {data.saturn.position.toFixed(2)}°
                </p>
                <p className='font-heading'>
                  {getFullSignName(data.saturn.sign)}
                </p>
              </div>
              <p className='text-4xl'>
                {planets[data.saturn.name.toLowerCase()].glyph}
              </p>
            </li>
            <li className='col-span-12 flex items-center justify-between rounded border border-primary-200 p-2 shadow-sm lg:col-span-6'>
              <div className=''>
                <p className='font-heading'>
                  {data.uranus.name}
                  {data.uranus.retrograde && (
                    <span className='ml-1 text-base font-bold text-fuchsia-400'>
                      ℞
                    </span>
                  )}
                </p>
                <p className='font-heading'>
                  {data.uranus.position.toFixed(2)}°
                </p>
                <p className='font-heading'>
                  {getFullSignName(data.uranus.sign)}
                </p>
              </div>
              <p className='text-4xl'>
                {planets[data.uranus.name.toLowerCase()].glyph}
              </p>
            </li>
            <li className='col-span-12 flex items-center justify-between rounded border border-primary-200 p-2 shadow-sm lg:col-span-6'>
              <div className=''>
                <p className='font-heading'>
                  {data.neptune.name}
                  {data.neptune.retrograde && (
                    <span className='ml-1 text-base font-bold text-fuchsia-400'>
                      ℞
                    </span>
                  )}
                </p>
                <p className='font-heading'>
                  {data.neptune.position.toFixed(2)}°
                </p>
                <p className='font-heading'>
                  {getFullSignName(data.neptune.sign)}
                </p>
              </div>
              <p className='text-4xl'>
                {planets[data.neptune.name.toLowerCase()].glyph}
              </p>
            </li>
            <li className='col-span-12 flex items-center justify-between rounded border border-primary-200 p-2 shadow-sm lg:col-span-6'>
              <div className=''>
                <p className='font-heading'>
                  {data.pluto.name}
                  {data.pluto.retrograde && (
                    <span className='ml-1 text-base font-bold text-fuchsia-400'>
                      ℞
                    </span>
                  )}
                </p>
                <p className='font-heading'>
                  {data.pluto.position.toFixed(2)}°
                </p>
                <p className='font-heading'>
                  {getFullSignName(data.pluto.sign)}
                </p>
              </div>
              <p className='text-4xl'>
                {planets[data.pluto.name.toLowerCase()].glyph}
              </p>
            </li>
            <li className='col-span-12 flex items-center justify-between rounded border border-primary-200 p-2 shadow-sm lg:col-span-6'>
              <div className=''>
                <p className='font-heading'>
                  North Node
                  {data.true_node.retrograde && (
                    <span className='ml-1 text-base font-bold text-fuchsia-400'>
                      ℞
                    </span>
                  )}
                </p>
                <p className='font-heading'>
                  {data.true_node.position.toFixed(2)}°
                </p>
                <p className='font-heading'>
                  {getFullSignName(data.true_node.sign)}
                </p>
              </div>
              <p className='text-4xl'>
                {planets[data.true_node.name.toLowerCase()].glyph}
              </p>
            </li>
          </>
        )}
      </ul>
    </section>
  );
};
export default Planets;
