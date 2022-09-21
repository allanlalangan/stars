import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../features/signsSlice';

const Counter = () => {
  const { signs } = useSelector((state) => state.signs);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {signs?.map((sign) => (
          <li className='flex'>
            <h3 className='capitalize'>
              {sign.name}:{sign.users}
            </h3>
            <button
              onClick={() => dispatch(decrement(sign.name))}
              className='counter-btn'
            >
              -
            </button>
            <button
              onClick={() => dispatch(increment(sign.name))}
              className='counter-btn'
            >
              +
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Counter;
