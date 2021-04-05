import styled from 'styled-components'

export const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background-color: rgb(0,0,0,0.3);

    display: flex;
    justify-content: center;
    align-items: center;

`

export const ModalBody = styled.div`
    position: absolute;
    background-color: #FFFFFF;
    min-width: 70%;
    min-height: 20vh;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
    box-shadow: 0 0 1rem rgb(0,0,0,0.9);
`

export const ModalBtn = styled.button`
    position: absolute;
    top: 1rem;
    right: 1rem;
    border: none;
`