import React from 'react'
import { ModalWrapper, ModalBody, ModalBtn } from './styledModal'

const Modal = (props) => {
    return (props.display)?(
        <ModalWrapper>
            <ModalBody>
                <ModalBtn onClick={props.closeOpenModal}>x</ModalBtn>
                {props.children} 
            </ModalBody>            
        </ModalWrapper>
    ): null
}

export default Modal
