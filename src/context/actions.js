import { getProducts } from "../services/getProducts";
import getUser  from "../services/getUser";

export const getProductsReducer = () => {
  return getProducts()
    .then(({data}) => ({ type: "SET_PRODUCTS", payload: data }))
    .catch(error => error);
};

export const getUserReducer = () => {
  return getUser()
    .then(({data}) => ({ type: "SET_USER", payload: data }))
    .catch(error => error);
};
