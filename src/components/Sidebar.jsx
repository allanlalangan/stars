import { GiCandleLight, GiCrystalBall } from 'react-icons/gi';

const Sidebar = () => {
  return (
    <section className='flex h-full w-1/4 max-w-screen-sm flex-col items-center bg-slate-200'>
      <nav className='flex flex-col items-center'>
        <button className='mt-2 p-2 text-xl tracking-wide'>Forecasts</button>
        <button className='mt-2 p-2 text-xl tracking-wide'>Calendar</button>
        <button className='mt-2 p-2 text-xl tracking-wide'>The Moon</button>
        <button className='mt-2 p-2 text-xl tracking-wide'>Goals</button>
        <button className='mt-2 p-2 text-xl tracking-wide'>Read</button>
        <button className='mt-2 p-2 text-xl tracking-wide'>Write</button>
        <button className='mt-2 flex items-center bg-slate-700 p-2 text-xl tracking-wide text-slate-50'>
          <GiCrystalBall className='mx-1' />
          Altar
          <GiCandleLight className='mx-1' />
        </button>
      </nav>
    </section>
  );
};
export default Sidebar;
