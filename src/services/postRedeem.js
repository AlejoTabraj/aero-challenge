import axiosAuth from './axiosAuth'

const postRedeem = (data) => {
    return axiosAuth.post('/redeem')
           .then( res => res)
           .catch( error => error)
}

export default postRedeem;