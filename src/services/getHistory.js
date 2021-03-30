import axiosAuth from './axiosAuth'

const getHistory = () => {
    return axiosAuth.get('/user/history')
            .then( res => res)
            .catch( err => err)
}

export default getHistory;