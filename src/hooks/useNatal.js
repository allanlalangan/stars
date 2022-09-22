import { useEffect, useState } from 'react';
import { getTimeZone } from '../api/natalAPI';

const useNatal = () => {
  const [birthValues, setBirthValues] = useState({
    date: null,
    month: null,
    year: null,
    hour: null,
    min: null,
    meridian: 'am',
    lat: null,
    lon: null,
    countryCode: null,
    tzone: null,
  });

  useEffect(() => {
    if (!birthValues.lat && !birthValues.lon) {
      setBirthValues((prev) => ({ ...prev, countryCode: null, tzone: null }));
    }
  }, [birthValues.lat, birthValues.lon]);

  useEffect(() => {
    getTimeZone(birthValues.countryCode)
      .then((data) => {
        setBirthValues((prev) => ({ ...prev, tzone: data.timezone || null }));
      })
      .catch((e) => console.log(e));
  }, [birthValues.countryCode]);

  return { setBirthValues, birthValues };
};

export default useNatal;
