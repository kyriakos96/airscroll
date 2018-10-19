import axios from 'axios';

export const testGet = () => {
    const request = axios.get('/api/summary');
    return {
        type: "TEST_PLAY",
        payload: request
    };
};
