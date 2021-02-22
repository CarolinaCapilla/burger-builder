import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burger-builder-50dc5-default-rtdb.firebaseio.com/',
});

export default instance;
