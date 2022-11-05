import Feed from '../components/Feed';
import NewPost from '../components/NewPost';

const FeedPage = () => {
  return (
    <section className='flex flex-col md:w-3/4'>
      <h2 className='px-4 pt-4 font-display'>Star Feed</h2>
      <NewPost />
      <Feed />
    </section>
  );
};
export default FeedPage;
