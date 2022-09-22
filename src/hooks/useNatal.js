import { useEffect, useState } from 'react';

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
    tzone: null,
  });

  useEffect(() => {
    if (birthValues.lat && birthValues.lon) {
      console.log(birthValues.lat, birthValues.lon);
    }
  }, [birthValues]);

  return { setBirthValues, birthValues };
};

export default useNatal;
