import { useState } from 'react';
import FormInputText from './FormInputText';

const NatalForm = () => {
  const [nameValue, setNameValue] = useState('');
  const [searchInputValue, setSearchInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleDateChange = (e) => {
    console.log(e.target.value);
  };

  const handleTimeChange = (e) => {
    console.log(e.target.value);
  };

  const handleSearchInputChange = (e) => {
    setSearchInputValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className='m-auto flex flex-col p-4 md:w-1/2'>
      {/* <fieldset className='my-2 flex items-center'>
        <label htmlFor='date' className='w-1/2'>
          Name
        </label>
        <input
          type='text'
          name='name'
          id='name'
          placeholder='Enter a name'
          defaultValue=''
          className='w-1/2 p-2'
          required
        />
      </fieldset> */}
      <FormInputText
        onChange={(e) => setNameValue(e.target.value)}
        label='Name'
        type='text'
        name='name'
        value={nameValue}
        placeholder='name'
        errorMessage='Enter a name'
        required
      />
      <fieldset className='flex items-center'>
        <label htmlFor='birthdate' className='w-1/2'>
          Date of Birth
        </label>
        <input
          required
          onChange={handleDateChange}
          type='date'
          name='birth_date'
          id='birth_date'
          className='my-2 w-1/2 p-2 text-center'
        />
      </fieldset>
      <fieldset className='flex items-center'>
        <label htmlFor='birthdate' className='w-1/2'>
          Time of Birth
        </label>
        <input
          required
          onChange={handleTimeChange}
          type='time'
          name='birth_time'
          id='birth_time'
          className='my-2 w-1/2 p-2 text-center'
        />
      </fieldset>
      <fieldset className='relative my-2 flex items-center'>
        <label htmlFor='birthplace' className='w-1/2'>
          Place of Birth
        </label>
        <input
          type='text'
          onChange={handleSearchInputChange}
          value={searchInputValue}
          name='birth_place'
          id='birth_place'
          placeholder='Enter a location'
          className='w-1/2 p-2 text-center'
        />
      </fieldset>

      <button
        type='submit'
        className='border border-indigo-200 p-4 font-heading uppercase transition hover:bg-indigo-200'
      >
        Submit
      </button>
    </form>
  );
};
export default NatalForm;
