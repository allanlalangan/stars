import { getGeo, getPlanets } from '../api/natalAPI';
import { useEffect, useState } from 'react';
import axios from 'axios';
import useNatal from '../hooks/useNatal';

const NatalForm = ({ setActiveNatalChart }) => {
  const [birthplaceInput, setBirthplaceInput] = useState('');
  const { setBirthValues, birthValues } = useNatal();
  const [geoSearchResults, setGeoSearchResults] = useState([]);

  const handleValueChange = (e) => {
    setBirthValues({
      ...birthValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const userBirthData = {
      day: +formData.get('date'),
      month: +formData.get('month'),
      year: +formData.get('year'),
      hour: +formData.get('hour'),
      min: +formData.get('min'),
      lat: +birthValues.lat,
      lon: +birthValues.lon,
      tzone: +birthValues.tzone,
    };
    getPlanets(userBirthData).then((chartData) =>
      setActiveNatalChart(chartData)
    );
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
      lat: +res.latitude,
      lon: +res.longitude,
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
      className='m-auto flex max-w-screen-sm flex-col p-4'
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
                <option key={index} value={index}>
                  {index}
                </option>
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
                <option key={index} value={index}>{`${
                  index <= 9 ? '0' : ''
                }${index}`}</option>
              ))}
          </select>
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
            <ul className='absolute top-full left-1/2 z-10 w-1/2 bg-indigo-100'>
              {geoSearchResults.map((res, index) => (
                <li
                  key={index}
                  onClick={(e) => handleResultClick(res)}
                  className='cursor-pointer py-2 px-4 hover:bg-indigo-200 active:bg-indigo-300'
                >
                  {`${res.place_name}, ${res.country_code}, ${res.timezone_id}`}
                </li>
              ))}
            </ul>
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
