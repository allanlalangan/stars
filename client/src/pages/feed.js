import Feed from '../components/Feed';
import NewPost from '../components/NewPost';

const FeedPage = () => {
  return (
    <section className='flex h-full w-full flex-col'>
      <NewPost />
      <Feed />
    </section>
  );
};
export default FeedPage;
