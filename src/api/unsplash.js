import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID 1ZgNpcLhAx07h3Yg2XbMlaE4Sa_hlKPRRBaJBA45McQ',
  },
});
