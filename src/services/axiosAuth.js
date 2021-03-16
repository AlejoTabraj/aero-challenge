import axios from 'axios'

const axiosAuth = axios.create({
    baseURL: process.env.REACT_APP_URL,
    headers: {
        Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`
    }
})

export default axiosAuth;