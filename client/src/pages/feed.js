import Feed from '../components/Feed';
import NewPost from '../components/NewPost';

const FeedPage = () => {
  return (
    <section className='flex h-full flex-col md:w-3/4'>
      <NewPost />
      <Feed />
    </section>
  );
};
export default FeedPage;
