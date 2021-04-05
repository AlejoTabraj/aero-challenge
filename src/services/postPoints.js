import axiosAuth from "./axiosAuth"


const postPoints = (amount) => {
    
    return axiosAuth.post('/user/points', { amount: +amount })
        .then( res => res)
        .catch( error => error)
}

export default postPoints;