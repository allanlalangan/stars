const Sidebar = () => {
  return (
    <section className='flex h-full w-1/4 max-w-screen-sm flex-col items-center bg-slate-200'>
      <h6 className='mx-auto  border-b-2 border-b-slate-600 text-center'>
        Altar
      </h6>
      <nav className='flex flex-col'>
        <button className='px-2'>Forecasts</button>
        <button className='px-2'>Calendar </button>
        <button className='px-2'>Manifest</button>
        <button className='px-2'>Readings</button>
        <button className='px-2'>Writings</button>
      </nav>
    </section>
  );
};
export default Sidebar;
