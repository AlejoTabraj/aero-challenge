import React, { useEffect, useContext, useState } from "react";
import { SetGlobalContext } from "../../../../context/globalContext";
import Products from "./products/Products";
import { getProductsReducer } from "../../../../context/actions";
import Pagination from "./pagination/Pagination";
import { OrderProductsSection } from "./orderButtons/OrderProductsSection";
import { ProductsSectionWrapper } from "./styledProductsSection";

const ProductsSection = () => {
  const dispatch = useContext(SetGlobalContext);
  const [pageState, setPageState] = useState({
    sectionNumber: 1,
    productsPerPage: 12,
    currentProducts: []
  });
  
  useEffect(() => {
    getProductsReducer()
      .then(data => {
        dispatch(data);
      })
      .catch(error => {
        console.log("error", error);
      });
      // eslint-disable-next-line
  },[]);

  return (
    <ProductsSectionWrapper>
      <OrderProductsSection dispatch={dispatch} pageState={pageState} setPageState={setPageState}/>
      <Pagination pageState={pageState} setPageState={setPageState} />
      <Products pageState={pageState} />
      <Pagination pageState={pageState} setPageState={setPageState} />
    </ProductsSectionWrapper>
  );
};

export default ProductsSection;
