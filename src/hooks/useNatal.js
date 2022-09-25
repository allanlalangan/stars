import { useEffect, useState } from 'react';
import { getTimeZone } from '../api/natalAPI';

const useNatal = () => {
  const [birthValues, setBirthValues] = useState({
    date: null,
    month: null,
    year: null,
    hour: null,
    min: null,
    lat: null,
    lon: null,
    tzone: null,
  });

  useEffect(() => {
    if (!birthValues.lat && !birthValues.lon) {
      setBirthValues((prev) => ({ ...prev, tzone: null }));
    }

    if (birthValues.date && birthValues.month && birthValues.year) {
      getTimeZone({
        latitude: +birthValues.lat,
        longitude: +birthValues.lon,
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
