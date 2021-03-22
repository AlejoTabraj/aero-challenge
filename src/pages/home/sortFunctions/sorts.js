//this function sets the págination for products
export const setProductsInPage = (state, globalState) => {
  const { sectionNumber, productsPerPage } = state;
  const { products } = globalState;
  const lastProductIndex = sectionNumber * productsPerPage;
  const firstPoductIndex = lastProductIndex - productsPerPage;
  const currentProducts = products.slice(firstPoductIndex, lastProductIndex);
  return currentProducts;
};



export const lastProductsOrder = (products) => {
    
};

export const minorPriceFirst = (products) => {
    const newOrder = products.sort((first, second) => {
        return first.cost - second.cost
    })
    return {type: 'SET_PRODUCTS', payload: newOrder}
};

export const mayorPriceFirst = (products) => {
    const newOrder = products.sort((first, second) => {
        return second.cost - first.cost
    })
    return {type: 'SET_PRODUCTS', payload: newOrder}
};
