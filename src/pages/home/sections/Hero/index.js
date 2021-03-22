import React from 'react'
import banner from '../../../../mock/images/header-v3.png'
import { Img, SecondaryTitle, BannerContainer } from './styledHero'

const Hero = () => {
    return (
        <BannerContainer>
            <Img src={banner} alt='auricilares de color celeste'></Img>
            <SecondaryTitle>Electronics</SecondaryTitle>
        </BannerContainer>
    )
}

export default Hero;