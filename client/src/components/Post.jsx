import { MdDeleteForever } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost } from '../features/postsSlice';
import { getFullSignName } from '../util/utils';

const Post = ({ post }) => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleDelete = (e) => {
    dispatch(deletePost(post._id));
  };
  return (
    <article className='mb-4 rounded border border-primary-200 bg-slate-50 p-4 shadow-sm'>
      <section className='flex justify-between'>
        <h4 className='font-display text-lg'>{post.userDetails.name}</h4>
        {user.id === post.user && (
          <button
            onClick={handleDelete}
            className='flex items-center rounded border border-primary-400 p-2'
          >
            <span className='text-xs font-semibold text-red-400'>
              Delete Post
            </span>
            <MdDeleteForever className='text-lg text-red-400' />
          </button>
        )}
      </section>
      <p>{post.body}</p>
      {post.chart && (
        <section>
          <article className='grid grid-cols-12 gap-2'>
            <p className='col-span-12 rounded border border-slate-300 p-2'>{`${getFullSignName(
              post.chart.planets.sun.sign
            )} ${post.chart.planets.sun.name}`}</p>
            <p className='col-span-12 rounded border border-slate-300 p-2'>{`${getFullSignName(
              post.chart.planets.moon.sign
            )} ${post.chart.planets.moon.name}`}</p>
            <p className='col-span-12 rounded border border-slate-300 p-2'>{`${getFullSignName(
              post.chart.houses.first_house.sign
            )} Rising`}</p>
            <p className='col-span-6 rounded border border-slate-300 p-2'>{`${getFullSignName(
              post.chart.planets.mercury.sign
            )} ${post.chart.planets.mercury.name}`}</p>
            <p className='col-span-6 rounded border border-slate-300 p-2'>{`${getFullSignName(
              post.chart.planets.venus.sign
            )} ${post.chart.planets.venus.name}`}</p>
            <p className='col-span-6 rounded border border-slate-300 p-2'>{`${getFullSignName(
              post.chart.planets.mars.sign
            )} ${post.chart.planets.mars.name}`}</p>
            <p className='col-span-6 rounded border border-slate-300 p-2'>{`${getFullSignName(
              post.chart.planets.jupiter.sign
            )} ${post.chart.planets.jupiter.name}`}</p>
            <p className='col-span-3 rounded border border-slate-300 p-2'>{`${getFullSignName(
              post.chart.planets.saturn.sign
            )} ${post.chart.planets.saturn.name}`}</p>
            <p className='col-span-3 rounded border border-slate-300 p-2'>{`${getFullSignName(
              post.chart.planets.uranus.sign
            )} ${post.chart.planets.uranus.name}`}</p>
            <p className='col-span-3 rounded border border-slate-300 p-2'>{`${getFullSignName(
              post.chart.planets.neptune.sign
            )} ${post.chart.planets.neptune.name}`}</p>
            <p className='col-span-3 rounded border border-slate-300 p-2'>{`${getFullSignName(
              post.chart.planets.pluto.sign
            )} ${post.chart.planets.pluto.name}`}</p>
          </article>
        </section>
      )}
      <section className='flex'>
        <button
          type='button'
          className='my-2 w-full items-center text-sm tracking-wide'
        >
          <input
            type='checkbox'
            name='reaction'
            id={`like ${post._id}`}
            className='peer hidden'
          />
          <label
            htmlFor={`like ${post._id}`}
            className='flex cursor-pointer justify-center rounded border border-primary-300 p-2 font-semibold shadow transition hover:border-primary-700 hover:bg-slate-100 hover:text-primary-700 peer-checked:border-transparent peer-checked:bg-primary-700 peer-checked:text-slate-50'
          >
            Like
          </label>
        </button>
      </section>
      <section className='grid grid-cols-12 gap-2'>
        <button type='button' className='col-span-3'>
          <input
            type='checkbox'
            name='reaction'
            id={`fire ${post._id}`}
            className='peer hidden'
          />
          <label
            htmlFor={`fire ${post._id}`}
            className='flex cursor-pointer justify-center rounded border border-primary-300 p-2 font-semibold text-primary-400 shadow transition hover:border-primary-700 hover:bg-slate-100 hover:text-primary-700 peer-checked:border-transparent peer-checked:bg-primary-700 peer-checked:text-slate-50'
          >
            🔥
          </label>
        </button>
        <button type='button' className='col-span-3'>
          <input
            type='checkbox'
            name='reaction'
            id={`pray ${post._id}`}
            className='peer hidden'
          />
          <label
            htmlFor={`pray ${post._id}`}
            className='flex cursor-pointer justify-center rounded border border-primary-300 p-2 font-semibold text-primary-400 shadow transition hover:border-primary-700 hover:bg-slate-100 hover:text-primary-700 peer-checked:border-transparent peer-checked:bg-primary-700 peer-checked:text-slate-50'
          >
            🙏
          </label>
        </button>
        <button type='button' className='col-span-3'>
          <input
            type='checkbox'
            name='reaction'
            id={`applaud ${post._id}`}
            className='peer hidden'
          />
          <label
            htmlFor={`applaud ${post._id}`}
            className='flex cursor-pointer justify-center rounded border border-primary-300 p-2 font-semibold text-primary-400 shadow transition hover:border-primary-700 hover:bg-slate-100 hover:text-primary-700 peer-checked:border-transparent peer-checked:bg-primary-700 peer-checked:text-slate-50'
          >
            👏
          </label>
        </button>
        <button type='button' className='col-span-3'>
          <input
            type='checkbox'
            name='reaction'
            id={`sad ${post._id}`}
            className='peer hidden'
          />
          <label
            htmlFor={`sad ${post._id}`}
            className='flex cursor-pointer justify-center rounded border border-primary-300 p-2 font-semibold text-primary-400 shadow transition hover:border-primary-700 hover:bg-slate-100 hover:text-primary-700 peer-checked:border-transparent peer-checked:bg-primary-700 peer-checked:text-slate-50'
          >
            😢
          </label>
        </button>
      </section>
    </article>
  );
};
export default Post;
