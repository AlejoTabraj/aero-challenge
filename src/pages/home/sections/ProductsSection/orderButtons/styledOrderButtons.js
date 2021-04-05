import styled from 'styled-components'

export const Paragraph = styled.p`
    border-right: 1px solid gray;
    padding: 1% 2% 1% 0;

    @media (max-width: 520px){
        flex-basis: 30%
    }
`

export const Paragraph2 = styled.p`
    padding: 1% 2%;

    @media (max-width: 520px){
        flex-basis: 30%
    }
`
export const SortsWrapper = styled.div`
    margin-top: 2vw;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
`