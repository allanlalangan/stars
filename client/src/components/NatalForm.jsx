import { useEffect, useState } from 'react';
import FormInput from './FormInput';
import { timezones } from '../util/timezones';
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
    console.log(values);
  };

  const tzoneValid = timezones.indexOf(values.timezone) !== -1;

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
      <fieldset className='relative mb-2 flex flex-col'>
        <label htmlFor='timezone'>Timezone</label>
        <input
          onChange={handleValueChange}
          list='timezones'
          id='timezone'
          name='timezone'
          className='my-2 w-full p-2'
          pattern={
            tzoneValid ? `${timezones[timezones.indexOf(values.timezone)]}` : ''
          }
          required
        />

        <datalist id='timezones'>
          {timezones?.map((tzone, i) => (
            <option key={i} value={tzone}>
              {tzone}
            </option>
          ))}
        </datalist>
        {!tzoneValid && (
          <span className='text-xs font-medium tracking-wide text-red-500'>
            {timezones.indexOf(values.timezone) === -1
              ? 'Please select a valid timezone'
              : `${
                  timezones[timezones.indexOf(values.timezone)]
                } is valid option`}
          </span>
        )}
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
