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
      url: `https://json.astrologyapi.com/v1/timezone`,
      data: {
        country_code: value,
        isDst: true,
      },
    };

    const { data } = await axios.post(config.url, config.data, config);
    return data;
  } catch (error) {
    console.log(error);
  }
};
