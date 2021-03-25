import styled from 'styled-components'

export const PaginationWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
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