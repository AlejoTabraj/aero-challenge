import React from 'react'
import banner from '../../../../mock/images/header-v3.png'
import { Img, SecondaryTitle, BannerContainer } from './styledBanner'

export const Banner = () => {
    return (
        <BannerContainer>
            <Img src={banner} alt='auricilares de color celeste'></Img>
            <SecondaryTitle>Electronics</SecondaryTitle>
        </BannerContainer>
    )
}
