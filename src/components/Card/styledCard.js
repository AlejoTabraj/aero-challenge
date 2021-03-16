import styled from 'styled-components'

export const CardContainer = styled.div`
    width: 20vw;
    height: 20vw;
    margin: 1% 0;
    box-shadow: 2px 2px 4px 0;
    
    &:hover {
	    box-shadow: 4px 4px 8px black;
    }
`

export const CoinContainer = styled.div`
    background-color: rgb(61,61,61,.5);
	border-radius: 100px;
	padding-left: 4%;
	display: none;
	position: absolute;
	top: 5%;
	right: 5%;
	transform: translate(-5%, 5%);	
`
export const CoinParagraph = styled.p`
    color: white;
	font-size: 1.1vw;
`
export const CoinImage = styled.img`
    margin-top: 2%;
	width: 20%;
`
export const CoinBuyImage = styled.img`
    width: 15%;
	height: auto;
	position: absolute;
	top: 5%;
	right: 5%;
	transform: translate(-5%, 5%);
`
export const ImageContainer = styled.div`
    height: 70%;
	width: 100%;
	position: relative;
	display: flex;
	justify-content: center;
    flex-flow: row wrap;
    
    &:hover ${CoinContainer}{
        display: flex;
	    align-items: center;
    }
    &:hover ${CoinBuyImage}{
        display: none;        
    }
`
export const ProductImage = styled.img`
    width: 90%;
	height: auto;
`
export const DescriptionContainer = styled.div`
   padding-top: 2%;
   padding-bottom:2%;
	padding-left: 10%;
`
export const DescriptionTag = styled.p`
    color: #a3a3a3;
	letter-spacing:-0.04px;
	width: 100%;
	font-size: 16px;
`
export const DescriptionName = styled.h3`
    color: #616161;
	font-size: 18px;
`

export const Line = styled.hr`
    width: 80%;
	margin-left: 10%;
`