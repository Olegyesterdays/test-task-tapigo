import axios from 'axios';

const baseURL: string = 'https://jsonplaceholder.typicode.com';

// const headers = {
//     Authorization: `Bearer ${ localStorage.getItem('authToken') }`
// }

const instance = axios.create({
  baseURL
  // headers
});

export default instance;
