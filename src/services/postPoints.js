import axiosAuth from "./axiosAuth"


const postPoints = () => {
    return axiosAuth.post('/user/points')
           .then( res => res)
           .catch( error => error)
}

export default postPoints;