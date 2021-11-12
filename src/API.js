import axios from 'axios';

const apiSettings = {
  getPlacesData: async (type, sw, ne) => {
    try {
      const {
        data: { data },
      } = await axios.get(
        `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
        {
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
            limit: '30',
          },
          headers: {
            'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
            'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
          },
        }
      );

      return data;
    } catch (error) {
      console.log(error);
    }
  },

  getWeatherData: async () => {},
};

export default apiSettings;
