import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../../../../../context/globalContext";
import { setProductsInPage } from "../../../sortFunctions/sorts";
import { Card } from "../../../../../components/Card";
import { ProductsWrapper } from "./styledProducts";

const Products = ({pageState}) => {
  const globalState  = useContext(GlobalContext);
  const [products, setProducts ] = useState()

  useEffect(() => {
    const cp = setProductsInPage(pageState, globalState)
    setProducts(cp)
  }, [pageState, globalState])
  
  return <ProductsWrapper>
  {
      products && products.map( product => <Card key={product._id} {...product} />)
  }
  </ProductsWrapper>;
};

export default Products;
