import axios from "axios";

/**
 * @description 비동기 통신 컴포넌트
 */
const client = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

export default client;
