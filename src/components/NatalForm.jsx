import { getGeo, getPlanets } from '../api/natalAPI';
import { useEffect, useState } from 'react';
import axios from 'axios';
import useNatal from '../hooks/useNatal';

const NatalForm = () => {
  const [birthplaceInput, setBirthplaceInput] = useState('');
  const { setBirthValues, birthValues } = useNatal();
  const [geoSearchResults, setGeoSearchResults] = useState([]);

  const handleValueChange = (e) => {
    console.log(e.target.name);
    setBirthValues({
      ...birthValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const userBirthData = {
      day: Number(formData.get('date')),
      month: Number(formData.get('month')),
      year: Number(formData.get('year')),
      hour: Number(formData.get('hour')),
      min: Number(formData.get('min')),
      lat: Number(birthValues.lat),
      lon: Number(birthValues.lon),
      tzone: Number(birthValues.tzone),
    };
    getPlanets(userBirthData);
  };

  const handleBirthplaceInputChange = (e) => {
    setBirthplaceInput(e.target.value);
  };

  const handleResultClick = (res) => {
    setGeoSearchResults([]);
    setBirthplaceInput(
      `${res.place_name}, ${res.country_code}, ${res.timezone_id}`
    );
    setBirthValues((prevValues) => ({
      ...prevValues,
      countryCode: res.country_code,
      lat: Number(res.latitude),
      lon: Number(res.longitude),
    }));
  };

  useEffect(() => {
    const source = axios.CancelToken.source();
    if (birthplaceInput.length >= 3) {
      getGeo(birthplaceInput, source).then(
        (data) => data !== undefined && setGeoSearchResults(data.geonames)
      );
    }
    return () => {
      source.cancel();
    };
  }, [birthplaceInput]);

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col p-4 md:mx-auto md:w-2/3 lg:w-1/2'
    >
      <h3>Generate Natal Chart</h3>
      <fieldset className='my-2 flex items-center'>
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
        />
      </fieldset>
      <fieldset className='my-2 flex items-center'>
        <label htmlFor='date' className='w-1/2'>
          Date
        </label>
        <input
          onChange={handleValueChange}
          type='number'
          name='date'
          id='date'
          min={1}
          max={31}
          placeholder='Date'
          className='w-1/2 p-2'
        />
      </fieldset>
      <fieldset className='my-2 flex items-center'>
        <label htmlFor='month' className='w-1/2'>
          Month
        </label>
        <input
          onChange={handleValueChange}
          type='number'
          name='month'
          id='month'
          min={1}
          max={12}
          placeholder='Month'
          className='w-1/2 p-2'
        />
      </fieldset>
      <fieldset className='my-2 flex items-center'>
        <label htmlFor='year' className='w-1/2'>
          Year
        </label>
        <input
          onChange={handleValueChange}
          type='number'
          name='year'
          id='year'
          placeholder='Year'
          className='w-1/2 p-2'
        />
      </fieldset>
      <fieldset className='my-2 flex items-center'>
        <label htmlFor='year' className='w-1/2'>
          Time
        </label>
        <section className='flex w-1/2 p-2'>
          <select
            onChange={handleValueChange}
            className='w-1/2'
            name='hour'
            id='hour'
            placeholder='hour'
          >
            <option value=''>Hour</option>
            {Array(24)
              .fill(0, 0, 24)
              .map((e, index) => (
                <option value={index}>{index}</option>
              ))}
          </select>
          <select
            onChange={handleValueChange}
            className='w-1/2'
            name='min'
            id='min'
            placeholder='min'
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
          {/* <select
            onChange={handleValueChange}
            value={birthValues.meridian}
            className='w-1/3'
            name='meridian'
            id='meridian'
          >
            <option value='am'>AM</option>
            <option value='pm'>PM</option>
          </select> */}
        </section>
      </fieldset>
      <fieldset className='relative my-2 flex items-center'>
        <label htmlFor='birthplace' className='w-1/2'>
          Place of Birth
        </label>
        <input
          type='text'
          onChange={handleBirthplaceInputChange}
          onFocus={() => {
            setBirthplaceInput('');
            setBirthValues((prev) => ({ ...prev, lat: null, lon: null }));
          }}
          value={birthplaceInput}
          name='birthplace'
          id='birthplace'
          placeholder='Enter a location'
          className='w-1/2 p-2'
        />
        {geoSearchResults?.length > 0 &&
          !geoSearchResults?.some((res) => res.timezone_id === '') && (
            <ul className='absolute top-full left-1/2 z-10 w-1/2 bg-sky-100'>
              {geoSearchResults.map((res) => (
                <li
                  onClick={(e) => handleResultClick(res)}
                  className='cursor-pointer py-2 px-4 hover:bg-sky-200 active:bg-sky-300'
                >
                  {`${res.place_name}, ${res.country_code}, ${res.timezone_id}`}
                </li>
              ))}
            </ul>
          )}
      </fieldset>

      <button type='submit' className='border border-cyan-500 p-4'>
        Submit
      </button>
    </form>
  );
};
export default NatalForm;
