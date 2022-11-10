import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createChart } from '../features/chartSlice';

import FormInput from './FormInput';
import { timezones } from '../util/timezones';
import { Autocomplete } from '@react-google-maps/api';

const NatalForm = () => {
  const dispatch = useDispatch();
  const form = useRef();
  const [values, setValues] = useState({
    name: '',
    birth_date: '',
    birth_time: '',
    birth_place: '',
    timezone: '',
  });
  const [coordinates, setCoordinates] = useState(null);
  const [birthPlace, setBirthPlace] = useState(null);
  const [autocomplete, setAutocomplete] = useState(null);
  const onLoad = (ac) => {
    setAutocomplete(ac);
  };

  const onPlaceChanged = () => {
    setCoordinates({
      lat: autocomplete.getPlace().geometry.location.lat(),
      lng: autocomplete.getPlace().geometry.location.lng(),
    });
    setBirthPlace(autocomplete.getPlace().formatted_address);
    setValues({
      ...values,
      birth_place: autocomplete.getPlace().formatted_address,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    const { name, birth_date, birth_time, timezone } = values;
    const month = birth_date.split('-')[1];
    const day = birth_date.split('-')[2];
    const year = birth_date.split('-')[0];
    const hour = birth_time?.split(':')[0] || 12;
    const minute = birth_time?.split(':')[1] || 0;
    const formData = {
      name,
      year: +year,
      month: +month,
      day: +day,
      hour: +hour,
      minute: +minute,
      longitude: coordinates.lng,
      latitude: coordinates.lat,
      city: birthPlace,
      timezone,
    };
    console.log(formData);
    dispatch(createChart(formData));
    setValues({
      name: '',
      birth_date: '',
      birth_time: '',
      birth_place: '',
      timezone: '',
    });
    setBirthPlace('');
  };

  const tzoneValid = timezones.indexOf(values.timezone) !== -1;

  const handleValueChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <form
      ref={form}
      onSubmit={handleSubmit}
      className='right-0 top-0 flex h-full flex-col rounded bg-slate-100 p-4 sm:absolute sm:z-20 sm:h-full sm:w-1/2'
    >
      <h4>Generate Natal Chart</h4>
      <FormInput
        onChange={handleValueChange}
        label='Name'
        type='text'
        name='name'
        id='name'
        value={values.name}
        placeholder='Name'
        errorMessage='Enter a name'
        required
      />
      <article className='flex w-full flex-col lg:flex-row'>
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
          errorMessage='Optional: Enter your Time of Birth'
        />
      </article>
      <fieldset className='relative mb-2 flex flex-col'>
        <label
          htmlFor='birth_place'
          className='w-full font-heading text-sm font-semibold'
        >
          Place of Birth
        </label>
        <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
          <input
            type='text'
            name='birth_place'
            value={values.birth_place}
            onChange={(e) =>
              setValues({ ...values, birth_place: e.target.value })
            }
            id='birth_place'
            placeholder='Place of Birth'
            className='input w-full rounded border border-primary-800 p-2'
            required
            pattern={birthPlace ? `${birthPlace}` : ''}
          />
        </Autocomplete>
        {birthPlace !== values.birth_place && (
          <span className='mt-1 text-xs font-medium text-primary-700'>
            Please select a location with valid coordinates
          </span>
        )}
      </fieldset>

      <fieldset className='relative mb-2 flex flex-col'>
        <label
          htmlFor='timezone'
          className='w-full font-heading text-sm font-semibold'
        >
          Timezone
        </label>
        {/* <input
          onChange={handleValueChange}
          // value={values.timezone}
          list='timezones'
          id='timezone'
          name='timezone'
          className='mb-2 w-full rounded border border-primary-800 p-2'
          placeholder='Birth Place Timezone'
          pattern={
            tzoneValid ? `${timezones[timezones.indexOf(values.timezone)]}` : ''
          }
          required
        /> */}

        {/* <datalist id='timezones'> */}
        <select
          name='timezone'
          id='timezone'
          onChange={handleValueChange}
          value={values.timezone}
          className='h-full w-full rounded border border-primary-800 p-2'
          required
        >
          {timezones?.map((tzone, i) => (
            <option key={i} value={tzone}>
              {tzone}
            </option>
          ))}
        </select>
        {/* </datalist> */}
        {!tzoneValid && (
          <span className='mt-1 text-xs font-medium text-primary-700'>
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
        className='rounded bg-slate-700 p-4 font-heading uppercase tracking-wider text-slate-50 shadow transition hover:bg-primary-700 hover:text-secondary-200 hover:shadow-primary-300'
      >
        Submit
      </button>
    </form>
  );
};
export default NatalForm;
