import React, { useState, useContext } from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import ProductsSection from './sections/ProductsSection'
import Modal from '../../components/Modal'
import { UserCard } from '../../components/UserCard'
import { postPointsAction } from './sortFunctions/httpFunctions'
import { SetGlobalContext } from '../../context/globalContext'
import { changePointsUser } from './sortFunctions/sorts'


export const Home = () => {
    const [modal, setModal] = useState(false)
    const dispatch = useContext(SetGlobalContext)
   
    const closeOpenModal = () => {
        setModal(!modal)
    }

    const handlePostPoints = (e) => {
        
        const amount  = e.target.value
        const setPoints = changePointsUser(amount)
        postPointsAction(amount)
        .then(res => {
            console.log(res)
            dispatch(setPoints)
        })
        .catch( err => {
            console.error(err)
        })
    }
    return (
        <div>
            <Navbar closeOpenModal={closeOpenModal}/>
            <Hero />
            <ProductsSection />
            <Modal display={modal} closeOpenModal={closeOpenModal}>
                <UserCard points={1000} btnCoinAction={handlePostPoints}/>
                <UserCard points={5000} btnCoinAction={handlePostPoints}/>
                <UserCard points={7500} btnCoinAction={handlePostPoints}/>
            </Modal>
        </div>
    )
}
