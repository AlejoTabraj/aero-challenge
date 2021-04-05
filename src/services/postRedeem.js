import axiosAuth from './axiosAuth'

const postRedeem = (productId) => {
    return axiosAuth.post('/redeem', { productId })
           .then( res => res)
           .catch( error => error)
}

export default postRedeem;