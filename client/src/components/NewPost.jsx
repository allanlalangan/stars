import { useDispatch } from 'react-redux';
import { createPost } from '../features/postsSlice';

const NewPost = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost('create post'));
  };
  return (
    <form onSubmit={handleSubmit} className='p-4'>
      <h3 className='mb-4 text-lg'>What would you like to share?</h3>
      {/* <fieldset className='mb-4 flex'>
        <label htmlFor='text' className='flex w-1/2 flex-col justify-between'>
          <input type='radio' name='type' id='text' className='peer hidden' />
          <span className='flex w-full justify-center p-2 peer-checked:bg-primary-500 peer-checked:text-slate-50'>
            Words
          </span>
        </label>

        <label htmlFor='card' className='flex w-1/2 flex-col justify-between'>
          <input type='radio' name='type' id='card' className='peer hidden' />
          <span className='flex w-full justify-center p-2 peer-checked:bg-primary-500 peer-checked:text-slate-50'>
            Card of the day
          </span>
        </label>

        <label
          htmlFor='transit'
          className='flex w-1/2 flex-col justify-between'
        >
          <input
            type='radio'
            name='type'
            id='transit'
            className='peer hidden'
          />
          <span className='flex w-full justify-center p-2 peer-checked:bg-primary-500 peer-checked:text-slate-50'>
            Transit
          </span>
        </label>

        <label htmlFor='today' className='flex w-1/2 flex-col justify-between'>
          <input type='radio' name='type' id='today' className='peer hidden' />
          <span className='flex w-full justify-center p-2 peer-checked:bg-primary-500 peer-checked:text-slate-50'>
            The Planets Today
          </span>
        </label>
      </fieldset> */}
      <fieldset className='flex w-full items-center p-2'>
        <label htmlFor='caption' className='mr-2'>
          Note
        </label>
        <input
          type='text'
          name='caption'
          id='caption'
          placeholder='Write a note'
          className='w-full border-2 border-primary-700 px-4 py-2'
        />
      </fieldset>
      <button className='mt-4 border-2 border-primary-700 p-2 hover:bg-slate-100'>
        Share
      </button>
    </form>
  );
};
export default NewPost;
