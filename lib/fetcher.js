import axios from 'axios';

const fetcher = async url => await axios(url).then(res => res.data);

export default fetcher;
