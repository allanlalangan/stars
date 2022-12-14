import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../features/postsSlice';
import Post from './Post';

const Feed = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <section className='flex flex-col overflow-y-scroll bg-slate-100 p-4'>
      {posts?.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </section>
  );
};
export default Feed;
