import React, { useContext, useState, useEffect } from "react";
import { GlobalContext, SetGlobalContext } from "../../../../../context/globalContext";
import { setProductsInPage, changePointsAfterBuy } from "../../../sortFunctions/sorts";
import { Card } from "../../../../../components/Card";
import { ProductsWrapper } from "./styledProducts";
import { postRedeemAction } from "../../../sortFunctions/httpFunctions";

const Products = ({pageState}) => {
  const globalState  = useContext(GlobalContext);
  const dispatch = useContext(SetGlobalContext)
  const [products, setProducts ] = useState()

  useEffect(() => {
    const cp = setProductsInPage(pageState, globalState)
    setProducts(cp)
  }, [pageState, globalState])


  const handleSubmitRedeem = (e) => {  
      const productId = e.target.id
      const cost = e.target.value
      const setPoints = changePointsAfterBuy(cost)
      postRedeemAction(productId)
      .then(res => {
          dispatch(setPoints)
      })
      .catch( err => {
          console.log(err)
      })
    }
  
  return <ProductsWrapper>
  {
      products && products.map( product => <Card key={product._id} {...product} handleSubmitRedeem={handleSubmitRedeem} />)
  }
  </ProductsWrapper>;
};

export default Products;
