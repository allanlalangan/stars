import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className='p-4'>
      <h2 className='mb-4 font-display'>You're a Star</h2>
      <article>
        {/* <h3 className='text-lg'>Center yourself</h3> */}
        <p className='font-sm m-2 font-heading font-semibold'>
          Plan your days, manifest goals, and write your story
        </p>
      </article>
      <Link to='/login'>
        <button className='m-2 rounded bg-slate-800 p-2 font-display text-slate-50 shadow transition hover:bg-primary-700 hover:text-secondary-200 hover:shadow-primary-300'>
          Get Started
        </button>
      </Link>
    </section>
  );
};
export default Hero;
