import axios from "axios";
// 全局axios instance
const service = axios.create({
    baseURL: 'http://localhost:8081/badminton-community'
});
export default service;