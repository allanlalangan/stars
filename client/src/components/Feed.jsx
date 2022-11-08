const Feed = () => {
  return (
    <section className='flex flex-col overflow-y-scroll p-4'>
      <article className='mb-4 rounded border-2 border-primary-700 p-4'>
        <h4>Aquemini420</h4>
        <p>celebrating my 33rd journey around the Sun!</p>
        <section className='flex'>
          <button className='mr-2 mt-1 w-1/2 items-center rounded border border-primary-400 p-2 text-sm tracking-wide shadow hover:bg-slate-100'>
            Like
          </button>
        </section>
      </article>
      <article className='mb-4 rounded border-2 border-primary-700 p-4'>
        <h4>dood69</h4>
        <section className='flex flex-col'>
          <p>Been so tired lately 🥱, just want to stay home</p>
        </section>
        <section className='flex'>
          <button className='mr-2 mt-1 w-1/2 items-center rounded border border-primary-400 p-2 text-sm tracking-wide shadow hover:bg-slate-100'>
            Like
          </button>
        </section>
      </article>
      <article className='mb-4 rounded border-2 border-primary-700 p-4'>
        <h4>touchMyVenus</h4>
        <section className='flex flex-col'>
          <p>Someone kiss me!😜</p>
        </section>
        <section className='flex'>
          <button className='mr-2 mt-1 w-1/2 items-center rounded border border-primary-400 p-2 text-sm tracking-wide shadow hover:bg-slate-100'>
            Like
          </button>
        </section>
      </article>
    </section>
  );
};
export default Feed;
