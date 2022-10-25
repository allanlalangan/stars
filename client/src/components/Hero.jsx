const Hero = () => {
  return (
    <section>
      <h2 className='font-display'>You're a Star</h2>
      <article>
        <p>A place to check in with the universe</p>
        <p>Plan your days, manifest goals, and write your story</p>
      </article>
      <aside>
        <p>The universe is always speaking, we just have to listen</p>
      </aside>
      <button className='m-2 bg-slate-800 p-2 font-display text-slate-50 shadow transition hover:text-secondary-100'>
        Get Started
      </button>
    </section>
  );
};
export default Hero;
