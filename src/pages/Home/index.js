import React from 'react'
import  Navbar from './components/Navbar'
import { Banner } from './components/Banner'
import { SetingsSearch } from './components/SetingSearch'
import { Products } from './components/Products.js'

export const Home = () => {

    return (
        <div>
            <Navbar />
            <Banner />   
            <SetingsSearch />  
            <Products />      
        </div>
    )
}
