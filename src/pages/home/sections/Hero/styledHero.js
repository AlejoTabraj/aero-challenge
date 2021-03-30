import styled from 'styled-components';

export const BannerContainer = styled.div`
position: relative;
`

export const Img = styled.img`
max-width: 100%;
z-index: -1;

@media (max-width: 520px){
    height: 60vw;
    min-width: 200%;
    overflow-x: hidden;
}
`

export const SecondaryTitle = styled.h2`
position: absolute; 
top: 80%;
left: 8%;
`