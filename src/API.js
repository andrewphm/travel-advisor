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
            limit: '15',
          },
          headers: {
            'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
            'x-rapidapi-key':
              '692449dd6dmsh60fc95a85b6d88fp16581djsn3f44c421f747',
          },
        }
      );

      console.log(data);

      return data;
    } catch (error) {
      console.log(error);
    }
  },
};

export default apiSettings;
