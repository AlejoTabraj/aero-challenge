import styled from 'styled-components'

export const CardWrapper =styled.div`
    position: relative;
    margin-bottom: 0.5rem;
`
export const CardContainer = styled.div`
    width: 20vw;
    height: 20vw;
    margin: 1% 0;
    box-shadow: 2px 2px 4px 0;
    
    &:hover {
	    box-shadow: 4px 4px 8px black;
    }

    @media (max-width: 520px){
        width: 84vw;
        height: 84vw;
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
	font-size: 1.4rem;
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

/*the redeem part bellow*/
/*------------------*/

export const RedeemContainer = styled.div`
    display: none;
    position: absolute;
    top: -150%;
    left: 0%;
    background-image:linear-gradient(-180deg, #0ad4fa 0%, #25bbf1 100%);
    width: 100%; 
    height: 250%;
    flex-flow: row wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`

export const RedeemParagraph= styled.p`
    font-size: 1.8rem;
    display: flex;
    align-items: center;
`

export const RedeemButton = styled.button`
    border-radius: 100px;
    background-color: #FFFFFF;
    padding: 1rem 2rem;
    font-size: 1.6rem;
    border: none;
    &:hover {
        cursor: pointer;
    }
`

/*---------------*/


export const SectionDisplay = styled.div`
    position: absolute;
    height: 40%;
    width: 100%;
    top: 60%;

    &:hover ${RedeemContainer}{
        display: flex;
        cursor: pointer;
    }
`
