import styled from 'styled-components'

export const SetingTitle = styled.h3`
border: 1px dashed red;
border-radius: 10%;
text-align: center;
font-family:SourceSansPro-Regular;
background-color: #ededed;
font-size:18px;
color:#616161;
letter-spacing:-0.04px;
text-align:center;
margin: 1%;
flex: 0 0 12%;
font-size: 100%;
flex-flow: row wrap;

&:hover{
    cursor: pointer;
    background-color: #0ad4fa;
}
@media (max-width: 720px) {
    flex: 0 0 33%;
}

`