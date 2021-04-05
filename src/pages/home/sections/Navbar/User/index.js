import React, { useEffect, useContext } from 'react'
import { UserCard } from '../../../../../components/UserCard'
import { getUserReducer } from '../../../../../context/actions'
import { SetGlobalContext, GlobalContext } from '../../../../../context/globalContext'

export const User = ({ closeOpenModal }) => {
    const dispatch = useContext(SetGlobalContext)
    const { user }  = useContext(GlobalContext)

    useEffect(()=> {
        getUserReducer()
        .then( data => {
            console.log(data, dispatch)
            dispatch(data)
        })
        .catch( err => {
            console.log(err)
        })
    // eslint-disable-next-line
    }, [])

    
    return (        
            <UserCard {...user} btnCoinAction={closeOpenModal}/>
        )
}
