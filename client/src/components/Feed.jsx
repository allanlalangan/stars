import { BsThreeDots } from 'react-icons/bs';

const Feed = () => {
  return (
    <section className='flex flex-col overflow-y-scroll p-4'>
      <article className='mb-4 rounded border-2 border-primary-700 p-4'>
        <section className='flex justify-between'>
          <h4 className='font-display text-lg'>Aquemini420</h4>
          <button className='border p-2'>
            <BsThreeDots />
          </button>
        </section>
        <p>celebrating my 33rd journey around the Sun!</p>
        <section className='flex'>
          <button className='mr-2 mt-2 w-full items-center rounded border border-primary-400 p-2 text-sm tracking-wide shadow hover:bg-slate-100'>
            Like
          </button>
        </section>
        <section className='flex'>
          <button className='mr-2 mt-2 w-1/2 items-center rounded border border-primary-400 p-2 text-sm tracking-wide shadow hover:bg-slate-100'>
            🔥
          </button>
          <button className='mr-2 mt-2 w-1/2 items-center rounded border border-primary-400 p-2 text-sm tracking-wide shadow hover:bg-slate-100'>
            ♥️
          </button>
          <button className='mr-2 mt-2 w-1/2 items-center rounded border border-primary-400 p-2 text-sm tracking-wide shadow hover:bg-slate-100'>
            👏
          </button>
          <button className='mr-2 mt-2 w-1/2 items-center rounded border border-primary-400 p-2 text-sm tracking-wide shadow hover:bg-slate-100'>
            😢
          </button>
        </section>
      </article>
      <article className='mb-4 rounded border-2 border-primary-700 p-4'>
        <section className='flex justify-between'>
          <h4 className='font-display text-lg'>dood69</h4>
          <button className='border p-2'>
            <BsThreeDots />
          </button>
        </section>
        <p>Been so tired lately 🥱, just want to stay home</p>
        <section className='flex'>
          <button className='mr-2 mt-2 w-full items-center rounded border border-primary-400 p-2 text-sm tracking-wide shadow hover:bg-slate-100'>
            Like
          </button>
        </section>
        <section className='flex'>
          <button className='mr-2 mt-2 w-1/2 items-center rounded border border-primary-400 p-2 text-sm tracking-wide shadow hover:bg-slate-100'>
            🔥
          </button>
          <button className='mr-2 mt-2 w-1/2 items-center rounded border border-primary-400 p-2 text-sm tracking-wide shadow hover:bg-slate-100'>
            ♥️
          </button>
          <button className='mr-2 mt-2 w-1/2 items-center rounded border border-primary-400 p-2 text-sm tracking-wide shadow hover:bg-slate-100'>
            👏
          </button>
          <button className='mr-2 mt-2 w-1/2 items-center rounded border border-primary-400 p-2 text-sm tracking-wide shadow hover:bg-slate-100'>
            😢
          </button>
        </section>
      </article>
      <article className='mb-4 rounded border-2 border-primary-700 p-4'>
        <h4 className='font-display text-lg'>touchMyVenus</h4>
        <p>Someone kiss me!😜</p>
        <section className='flex'>
          <button className='mr-2 mt-2 w-full items-center rounded border border-primary-400 p-2 text-sm tracking-wide shadow hover:bg-slate-100'>
            Like
          </button>
        </section>
        <section className='flex'>
          <button className='mr-2 mt-2 w-1/2 items-center rounded border border-primary-400 p-2 text-sm tracking-wide shadow hover:bg-slate-100'>
            🔥
          </button>
          <button className='mr-2 mt-2 w-1/2 items-center rounded border border-primary-400 p-2 text-sm tracking-wide shadow hover:bg-slate-100'>
            ♥️
          </button>
          <button className='mr-2 mt-2 w-1/2 items-center rounded border border-primary-400 p-2 text-sm tracking-wide shadow hover:bg-slate-100'>
            👏
          </button>
          <button className='mr-2 mt-2 w-1/2 items-center rounded border border-primary-400 p-2 text-sm tracking-wide shadow hover:bg-slate-100'>
            😢
          </button>
        </section>
      </article>
    </section>
  );
};
export default Feed;
