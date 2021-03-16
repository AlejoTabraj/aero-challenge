import styled, { css } from 'styled-components';


/*[class*='butto']*/

const RepetedStyle = css`
	font-size: 1.3vw;
	display: flex;
	align-items: center;
	justify-content: center;
	//border: 1px dashed red;
`

export const SortContainer = styled.div`
    display: flex;
	display: grid;
`
export const Button = styled.button`
    border: none;
	border-radius: 100px;
	padding: 8% 15%;
    font-size: 1.3vw;
    
     &:hover {
        background-color: #04d4fa;
        cursor: pointer;
    }
`

export const SortSection1 = styled.div`
    ${RepetedStyle}
    border-right: 1px solid gray;
    color: #616161;
    justify-content: flex-start;
    grid-column: 1/2;
    
    @media (max-width: 768px) {
        font-size: 2vw;
        grid-column: 1/2;
	    grid-row: 1/2;        
    }
`
export const SortSection2 = styled.div`
    ${RepetedStyle}
    grid-column: 2/3;
	color: #a3a3a3;
    text-align: center;
    
    @media (max-width: 768px) {
        font-size: 2vw;
        grid-column: 2/3;
	grid-row: 1/2;       
    }
`
export const SortSection3 = styled.div`
    ${RepetedStyle}
    grid-column: 3/4;

    @media (max-width: 768px) {
        font-size: 2vw;
        grid-column: 3/4;
	grid-row: 1/2;      
    }
`
export const SortSection4 = styled.div`
    ${RepetedStyle}
    grid-column: 4/5;

    @media (max-width: 768px) {
        font-size: 2vw;
        grid-column: 1/2;
	grid-row: 2/3;        
    }
`
export const SortSection5 = styled.div`
    ${RepetedStyle}
    grid-column: 5/6;

    @media (max-width: 768px) {
        font-size: 2vw;
        grid-column: 2/3;	
        grid-row: 2/3;        
    }
`
export const SortSection6 = styled.div`
    ${RepetedStyle}
    grid-column: 6/10;
    padding:0 30%;
    display: flex;
    justify-content: space-around;	

    @media (max-width: 768px) {
        font-size: 2vw;
        grid-column: 3/4;      
    }
`
export const ArrowButton = styled.button`
    border: none;
    outline: none;
    background-color: transparent;
    &:hover {
        cursor: pointer;
    }
`
export const ArrowImage = styled.img`
border-radius: 50%;
    &:hover {
        box-shadow: 0 0 3px #04d4fa;
    
    }
`