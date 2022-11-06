import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getNatalData } from '../features/chartSlice';

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
    dispatch(getNatalData(formData));
  };

  const tzoneValid = timezones.indexOf(values.timezone) !== -1;

  const handleValueChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <form
      ref={form}
      onSubmit={handleSubmit}
      className='m-auto flex flex-col p-4 md:w-1/2'
    >
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
        label='Time of Birth (Optional)'
        type='time'
        name='birth_time'
        value={values.birth_time}
        placeholder=''
        errorMessage='Optional: Enter your Time of Birth'
      />
      <fieldset className='relative mb-2 flex flex-col'>
        <label htmlFor='birth_place' className='w-1/2'>
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
            className='input my-2 w-full p-2'
            required
            pattern={birthPlace ? `${birthPlace}` : ''}
          />
        </Autocomplete>
        {birthPlace !== values.birth_place && (
          <span className='text-xs font-medium tracking-wide text-slate-500'>
            Please select a location with valid coordinates
          </span>
        )}
      </fieldset>

      <fieldset className='relative mb-2 flex flex-col'>
        <label htmlFor='timezone'>Timezone</label>
        <input
          onChange={handleValueChange}
          list='timezones'
          id='timezone'
          name='timezone'
          className='my-2 w-full p-2'
          placeholder='Birth Place Timezone'
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
          <span className='text-xs font-medium tracking-wide text-slate-500'>
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
