import { useEffect, useState } from 'react';
import FormInput from './FormInput';

const NatalForm = () => {
  const [values, setValues] = useState({
    name: '',
    birth_date: '',
    birth_time: '',
    birth_place: '',
    timezone: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleValueChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className='m-auto flex flex-col p-4 md:w-1/2'>
      <FormInput
        onChange={handleValueChange}
        label='Name'
        type='text'
        name='name'
        id='name'
        value={values.name}
        placeholder='name'
        errorMessage='Enter a name'
        required
      />
      <FormInput
        onChange={handleValueChange}
        label='Date of Birth'
        type='date'
        name='birth_date'
        id='birth_date'
        value={values.birth_date}
        placeholder=''
        errorMessage='Enter your Date of Birth'
        required
      />
      <FormInput
        onChange={handleValueChange}
        label='Time of Birth'
        type='time'
        name='birth_time'
        value={values.birth_time}
        placeholder=''
        errorMessage='Enter your Time of Birth'
        required
      />
      <FormInput
        onChange={handleValueChange}
        label='Place of Birth'
        type='text'
        name='birth_place'
        value={values.birth_place}
        placeholder=''
        errorMessage='Enter your Place of Birth'
        required
      />
      <FormInput
        onChange={handleValueChange}
        label='Timezone'
        type='text'
        name='timezone'
        value={values.timezone}
        placeholder='Search Timezone'
        errorMessage='Enter a Timezone'
        required
      />
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
