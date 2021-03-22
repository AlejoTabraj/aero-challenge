import axiosAuth from './axiosAuth'

const getUser = () => {
    return axiosAuth.get('/user/me')
           .then(
               res => res
           )
           .catch( err => err)
}

export default getUser;