import axios from 'axios';

export const getGeo = async (value, source) => {
  try {
    const config = {
      cancelToken: source.token,
      method: 'POST',
      url: `https://json.astrologyapi.com/v1/geo_details`,
      data: {
        place: value,
        maxRows: 5,
      },
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

    const { data } = await axios.post(config.url, config.data, config);

    return data;
  } catch (error) {
    console.log(error);
  }
};
