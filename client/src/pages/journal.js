const JournalPage = () => {
  return (
    <section className='grid grid-cols-12 p-4 md:w-3/4'>
      <article className='col-span-6 border p-4'>
        <h3>Calendar</h3>
        <section>
          <h4>Month</h4>
          <ul className='grid grid-cols-7'>
            <li className='col-span-1 m-auto'>Sun</li>
            <li className='col-span-1 m-auto'>Mon</li>
            <li className='col-span-1 m-auto'>Tue</li>
            <li className='col-span-1 m-auto'>Wed</li>
            <li className='col-span-1 m-auto'>Thu</li>
            <li className='col-span-1 m-auto'>Fri</li>
            <li className='col-span-1 m-auto'>Sat</li>
          </ul>
        </section>
      </article>
      <form className='col-span-6 p-4'>
        <fieldset className='flex flex-col'>
          <label htmlFor='title'>Title</label>
          <input type='text' name='title' id='title' />
          <label htmlFor='body'>Entry</label>
          <textarea name='body' id='body' cols='30' rows='10'></textarea>
        </fieldset>
      </form>
      <aside className='col-span-12'>
        <h4>Heatmap</h4>
      </aside>
    </section>
  );
};
export default JournalPage;
