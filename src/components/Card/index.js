import React from 'react'
import buyBlue from '../../mock/icons/buy-blue.svg'
import coin from '../../mock/icons/coin.svg'
import { CardContainer, ImageContainer, CoinContainer, CoinParagraph, CoinImage, ProductImage, CoinBuyImage, Line, DescriptionContainer, DescriptionTag, DescriptionName, RedeemContainer, RedeemParagraph, RedeemButton, CardWrapper, SectionDisplay } from './styledCard'


export const Card = ({category, cost, img, name, _id}) => {
    
    return (
    <CardWrapper>
	<CardContainer >
		<ImageContainer >
			<ProductImage src={img && img.url} alt='' />
			<CoinBuyImage src={buyBlue} alt='' />			
			<CoinContainer>
            <CoinParagraph>you need {cost}</CoinParagraph>
				<CoinImage src={coin} alt=''/>
			</CoinContainer>
		</ImageContainer>
		<Line />
		<DescriptionContainer>
            <DescriptionTag>{category}</DescriptionTag>
            <DescriptionName>{name}</DescriptionName>
		</DescriptionContainer>
	</CardContainer>
    <SectionDisplay>
        
    <RedeemContainer>
        <RedeemParagraph>12000 <img src={coin} alt='hola'></img></RedeemParagraph>
        <RedeemButton>Redeem now</RedeemButton>
    </RedeemContainer>
    </SectionDisplay>
    </CardWrapper>
    )
}


