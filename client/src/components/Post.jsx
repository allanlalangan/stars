import { MdDeleteForever } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';

const Post = ({ post }) => {
  const { user } = useSelector((state) => state.auth);
  return (
    <article className='mb-4 rounded border border-primary-200 bg-slate-50 p-4 shadow-sm'>
      <section className='flex justify-between'>
        <h4 className='font-display text-lg'>{post.userDetails.name}</h4>
        {user.id === post.user && (
          <button className='flex items-center rounded border border-primary-400 p-2'>
            <span className='text-xs font-semibold text-red-400'>
              Delete Post
            </span>
            <MdDeleteForever className='text-lg text-red-400' />
          </button>
        )}
      </section>
      <p>{post.body}</p>
      {post.chart && <section>{post.chart.name}'s chart</section>}
      <section className='flex'>
        <button className='my-2 w-full items-center rounded border border-primary-400 p-2 text-sm tracking-wide shadow hover:bg-slate-100'>
          Like
        </button>
      </section>
      <section className='flex'>
        <button className='mr-1 w-1/2 items-center rounded border border-primary-400 p-2 text-sm tracking-wide shadow hover:bg-slate-100'>
          🔥
        </button>
        <button className='mx-1 w-1/2 items-center rounded border border-primary-400 p-2 text-sm tracking-wide shadow hover:bg-slate-100'>
          ♥️
        </button>
        <button className='mx-1 w-1/2 items-center rounded border border-primary-400 p-2 text-sm tracking-wide shadow hover:bg-slate-100'>
          👏
        </button>
        <button className='ml-1 w-1/2 items-center rounded border border-primary-400 p-2 text-sm tracking-wide shadow hover:bg-slate-100'>
          😢
        </button>
      </section>
    </article>
  );
};
export default Post;
