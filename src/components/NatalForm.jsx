const NatalForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit} className='flex flex-col mx-auto w-3/4'>
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
      <fieldset className='flex items-center'>
        <label htmlFor='year' className='w-1/2'>
          Time
        </label>
        <section className='p-2 w-1/2 flex'>
          <select className='w-1/3' defaultValue={1} name='hour' id='hour'>
            <option value=''>Hour</option>
            {Array(12)
              .fill(0, 0, 12)
              .map((e, index) => (
                <option value={index + 1}>{index + 1}</option>
              ))}
          </select>
          <select className='w-1/3' defaultValue={0} name='minute' id='minute'>
            <option value=''>Minute</option>
            {Array(60)
              .fill(0, 0, 60)
              .map((e, index) => (
                <option value={index}>{`${
                  index <= 9 ? '0' : ''
                }${index}`}</option>
              ))}
          </select>
          <select className='w-1/3' name='meridian' id='meridian'>
            <option value='am'>AM</option>
            <option value='pm'>PM</option>
          </select>
        </section>
      </fieldset>
      <fieldset className='flex items-center'>
        <label htmlFor='birthplace' className='w-1/2'>
          Place of Birth
        </label>
        <input
          type='text'
          name='birthplace'
          id='birthplace'
          placeholder='Enter a Location'
          defaultValue=''
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
