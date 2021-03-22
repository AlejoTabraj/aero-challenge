import React, { useContext } from 'react'
import { GlobalContext } from '../../../../../context/globalContext'
import { minorPriceFirst, mayorPriceFirst } from '../../../sortFunctions/sorts'
import { ButtonSort } from '../../../../../components/Button/ButtonSort'
import { Paragraph, SortsWrapper, Paragraph2 } from './styledOrderButtons'
import { getProductsReducer } from '../../../../../context/actions'


export const OrderProductsSection = ({dispatch, pageState, setPageState}) => {
    const { products } = useContext(GlobalContext)


    
    const handleMinorButton = () => {
        const setNewOrder = minorPriceFirst(products)
        setPageState({...pageState, sectionNumber: 1})
        return dispatch(setNewOrder)
    }

    const handleMayorButton = () => {
        const setNewOrder = mayorPriceFirst(products)
        setPageState({...pageState, sectionNumber: 1})
        return dispatch(setNewOrder)
    }

    const handleLastButton = () => {
        getProductsReducer()
        .then(data => {
            dispatch(data)
            setPageState({...pageState, sectionNumber: 1})
        })
        .catch( error => console.log(error))
        
    }

    const { sectionNumber, productsPerPage } = pageState;
    const currentNumber = sectionNumber * productsPerPage > products.length ? products.length :sectionNumber * productsPerPage;
    return (
        <SortsWrapper>
        <Paragraph>{currentNumber} de {products.length} productos</Paragraph>
        <Paragraph2>sort by:</Paragraph2>
        <ButtonSort action={handleLastButton} description={'Most Recent'}/>
        <ButtonSort action={handleMinorButton} description={'Lowest Price'}/>
        <ButtonSort action={handleMayorButton} description={'Highest Price'}/>
        </SortsWrapper>

    )
}
