import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID 8fU5q6ouy74wR0mhwLxQJgqDY2LnohU5ga8gm26P12k',
  },
});
