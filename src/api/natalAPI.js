import axios from 'axios';

const configBase = {
  method: 'POST',
  url: `https://json.astrologyapi.com/v1/`,
  headers: {
    authorization:
      'Basic ' +
      btoa(
        process.env.REACT_APP_ASTROLOGY_API_USER_ID +
          ':' +
          process.env.REACT_APP_ASTROLOGY_API_KEY
      ),
    'Content-Type': 'application/json',
  },
};

export const getGeo = async (value, source) => {
  try {
    const config = {
      ...configBase,
      cancelToken: source.token,
      method: 'POST',
      url: `https://json.astrologyapi.com/v1/geo_details`,
      data: {
        place: value,
        maxRows: 5,
      },
    };

    const { data } = await axios.post(config.url, config.data, config);

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getTimeZone = async (value) => {
  try {
    const config = {
      ...configBase,
      method: 'POST',
      url: 'https://json.astrologyapi.com/v1/timezone_with_dst',
      data: value,
    };

    const { data } = await axios.post(config.url, config.data, config);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getPlanets = async (birthData) => {
  try {
    const config = {
      ...configBase,
      method: 'POST',
      url: 'https://json.astrologyapi.com/v1/planets/tropical',
      data: {
        ...birthData,
      },
    };

    const { data } = await axios.post(config.url, config.data, config);
    console.log(data);
    // return data;
  } catch (error) {
    console.log(error);
  }
};
