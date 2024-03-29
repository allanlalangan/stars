import { MdDeleteForever } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost, likePost } from '../features/postsSlice';
import { getFullSignName } from '../util/utils';

const Post = ({ post }) => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const liked = post.likedBy.includes(user.id);

  const handleDelete = (e) => {
    dispatch(deletePost(post._id));
  };

  const handleLike = (e) => {
    dispatch(likePost({ checked: e.target.checked, id: post._id }));
  };
  return (
    <article className='mb-4 rounded border border-primary-200 bg-slate-50 p-4 shadow-sm'>
      <section className='flex justify-between'>
        <h4 className='font-display text-lg'>{post.userDetails.name}</h4>
        {user.id === post.user && (
          <button
            onClick={handleDelete}
            className='flex items-center rounded border border-primary-300 p-2 transition hover:border-primary-700 hover:bg-slate-100'
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
            <p className='col-span-4 rounded border border-slate-300 p-2'>{`${getFullSignName(
              post.chart.planets.sun.sign
            )} ${post.chart.planets.sun.name}`}</p>
            <p className='col-span-4 rounded border border-slate-300 p-2'>{`${getFullSignName(
              post.chart.planets.moon.sign
            )} ${post.chart.planets.moon.name}`}</p>
            <p className='col-span-4 rounded border border-slate-300 p-2'>{`${getFullSignName(
              post.chart.houses.first_house.sign
            )} Rising`}</p>
          </article>
        </section>
      )}
      <section className='flex'>
        <button
          type='button'
          className='my-2 w-full items-center text-sm tracking-wide'
        >
          <input
            checked={liked}
            onChange={handleLike}
            type='checkbox'
            name='reaction'
            id={`like ${post._id}`}
            className='peer hidden'
          />
          {post.likedBy.length === 1 && (
            <span className='w-full'>Someone liked this</span>
          )}
          {post.likedBy.length > 1 && (
            <span className='w-full'>
              {post.likedBy.length} people liked this
            </span>
          )}
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
