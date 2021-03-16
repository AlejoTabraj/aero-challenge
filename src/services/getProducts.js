import axiosAuth from './axiosAuth';

export const getProducts = () => {
    return axiosAuth.get('/products')
    .then( res => res)
    .catch( err => console.log(err));
};

