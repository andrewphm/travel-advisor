import axios from 'axios';

const API_URL_RESTAURANTS =
  'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

const options = {
  params: {
    bl_latitude: '11.847676',
    tr_latitude: '12.838442',
    bl_longitude: '109.095887',
    tr_longitude: '109.149359',
  },
  headers: {
    'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
    'x-rapidapi-key': '692449dd6dmsh60fc95a85b6d88fp16581djsn3f44c421f747',
  },
};

const apiSettings = {
  getPlacesData: async () => {
    try {
      const {
        data: { data },
      } = await axios.get(API_URL_RESTAURANTS, options);

      return data;
    } catch (error) {
      console.log(error);
    }
  },
};

export default apiSettings;
