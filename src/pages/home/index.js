import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import ProductsSection from './sections/ProductsSection'


export const Home = () => {
   

    return (
        <div>
            <Navbar />
            <Hero />
            <ProductsSection />
        </div>
    )
}
