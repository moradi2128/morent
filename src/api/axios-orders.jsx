import axios from 'axios';

const instance = axios.create({
    baseURL: "https://morent-2128-default-rtdb.firebaseio.com/"
});
console.log('first',  process.env)
export default instance;