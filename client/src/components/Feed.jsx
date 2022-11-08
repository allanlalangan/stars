import { MdDeleteForever } from 'react-icons/md';

const Feed = () => {
  return (
    <section className='flex flex-col overflow-y-scroll bg-slate-100 p-4'>
      <article className='mb-4 rounded border border-primary-200 bg-slate-50 p-4 shadow-sm'>
        <section className='flex justify-between'>
          <h4 className='font-display text-lg'>Aquemini420</h4>
          <button className='flex items-center rounded border border-primary-400 p-2'>
            <span className='text-xs font-semibold text-red-400'>
              Delete Post
            </span>
            <MdDeleteForever className='text-lg text-red-400' />
          </button>
        </section>
        <p>celebrating my 33rd journey around the Sun!</p>
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
      <article className='mb-4 rounded border border-primary-200 bg-slate-50 p-4 shadow-sm'>
        <section className='flex justify-between'>
          <h4 className='font-display text-lg'>dood69</h4>
          <button className='flex items-center rounded border border-primary-400 p-2'>
            <span className='text-xs font-semibold text-red-400'>
              Delete Post
            </span>
            <MdDeleteForever className='text-lg text-red-400' />
          </button>
        </section>
        <p>Been so tired lately 🥱, just want to stay home</p>
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
      <article className='mb-4 rounded border border-primary-200 bg-slate-50 p-4 shadow-sm'>
        <section className='flex justify-between'>
          <h4 className='font-display text-lg'>touchMyVenus</h4>
          <button className='flex items-center rounded border border-primary-400 p-2'>
            <span className='text-xs font-semibold text-red-400'>
              Delete Post
            </span>
            <MdDeleteForever className='text-lg text-red-400' />
          </button>
        </section>
        <p>Someone kiss me!😜</p>
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
    </section>
  );
};
export default Feed;
