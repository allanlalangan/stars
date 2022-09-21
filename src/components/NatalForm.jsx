import { Autocomplete } from '@react-google-maps/api';
import { useCallback, useState } from 'react';

const NatalForm = ({ isLoaded }) => {
  const [autocomplete, setAutocomplete] = useState(null);
  const onLoad = (input) => {
    setAutocomplete(input);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handlePlaceChange = useCallback(() => {
    console.log('lat:' + autocomplete.getPlace().geometry.location.lat());
    console.log('lng:' + autocomplete.getPlace().geometry.location.lng());
  }, [autocomplete]);
  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col md:mx-auto p-4 md:w-2/3 lg:w-1/2'
    >
      <h3>Enter Your Birthday</h3>
      <fieldset className='flex items-center'>
        <label htmlFor='date' className='w-1/2'>
          Name
        </label>
        <input
          type='text'
          name='name'
          id='name'
          placeholder='Enter a name'
          defaultValue=''
          className='p-2'
        />
      </fieldset>
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
          className='w-1/2 p-2'
        />
      </fieldset>
      <fieldset className='flex items-center'>
        <label htmlFor='year' className='w-1/2'>
          Time
        </label>
        <section className='p-2 w-1/2 flex'>
          <select className='w-1/3' name='hour' id='hour' placeholder='hour'>
            <option value=''>Hour</option>
            {Array(12)
              .fill(0, 0, 12)
              .map((e, index) => (
                <option value={index + 1}>{index + 1}</option>
              ))}
          </select>
          <select
            className='w-1/3'
            name='minute'
            id='minute'
            placeholder='minute'
          >
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
        {isLoaded && (
          <Autocomplete onLoad={onLoad} onPlaceChanged={handlePlaceChange}>
            <input
              type='text'
              name='birthplace'
              id='birthplace'
              placeholder='Enter a location'
              defaultValue=''
              className='p-2'
            />
          </Autocomplete>
        )}
      </fieldset>

      <button type='submit' className='border border-cyan-500 p-4'>
        Submit
      </button>
    </form>
  );
};
export default NatalForm;
