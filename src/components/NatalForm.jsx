const NatalForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit} className='flex flex-col mx-auto w-1/2'>
      <h3>Enter Your Birthday</h3>
      <fieldset className='flex items-center'>
        <label htmlFor='date' className='w-1/2'>
          Date
        </label>
        <input
          type='number'
          name='date'
          id='date'
          min={1}
          max={31}
          placeholder='Date'
          defaultValue={1}
          className='w-1/2 p-2'
        />
      </fieldset>
      <fieldset className='flex items-center'>
        <label htmlFor='month' className='w-1/2'>
          Month
        </label>
        <input
          type='number'
          name='month'
          id='month'
          min={1}
          max={12}
          placeholder='Month'
          defaultValue={1}
          className='w-1/2 p-2'
        />
      </fieldset>
      <fieldset className='flex items-center'>
        <label htmlFor='year' className='w-1/2'>
          Year
        </label>
        <input
          type='number'
          name='year'
          id='year'
          placeholder='Year'
          defaultValue={1970}
          className='w-1/2 p-2'
        />
      </fieldset>
      <button type='submit' className='border border-cyan-500 p-4'>
        Submit
      </button>
    </form>
  );
};
export default NatalForm;
