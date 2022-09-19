import axios from 'axios';

const url = 'http://localhost:5000/Events';

export const fetchEvent = () => axios.get(url)