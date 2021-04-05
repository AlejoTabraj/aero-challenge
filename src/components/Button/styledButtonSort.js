import styled from 'styled-components'

export const Button = styled.button`
    border: none;
	border-radius: 100px;
	padding: 1% 2%;
    font-size: 1.3rem;
    
     &:hover {
        background-color: #04d4fa;
        cursor: pointer;
    }

    @media (max-width: 520px){
        flex-basis: 30%;
    }
`