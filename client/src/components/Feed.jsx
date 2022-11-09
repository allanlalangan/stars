import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdDeleteForever } from 'react-icons/md';
import { getPosts } from '../features/postsSlice';
import Post from './Post';

const dummy = [
  {
    userDetails: { name: 'Aquemini420' },
    body: 'celebrating my 33rd journey around the Sun!',
  },
  {
    userDetails: { name: 'dood69' },
    body: 'Been so tired lately 🥱, just want to stay home',
  },
  { userDetails: { name: 'touchMyVenus' }, body: 'Someone kiss me!😜' },
];
const Feed = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  useEffect(() => {
    console.log(posts);
  }, [posts]);
  return (
    <section className='flex flex-col overflow-y-scroll bg-slate-100 p-4'>
      {posts?.map((post) => (
        <Post key={post._id} post={post} />
      ))}
      {dummy?.map((post, i) => (
        <Post key={i} post={post} />
      ))}
    </section>
  );
};
export default Feed;
