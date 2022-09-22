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
    if (birthValues.date && birthValues.month && birthValues.year) {
      getTimeZone({
        latitude: Number(birthValues.lat),
        longitude: Number(birthValues.lon),
        date: `${birthValues.month}-${birthValues.date}-${birthValues.year}`,
      })
        .then((data) => {
          setBirthValues((prev) => ({ ...prev, tzone: data.timezone || null }));
        })
        .catch((e) => console.log(e));
    }
  }, [
    birthValues.lat,
    birthValues.lon,
    birthValues.date,
    birthValues.month,
    birthValues.year,
  ]);

  return { setBirthValues, birthValues };
};

export default useNatal;
