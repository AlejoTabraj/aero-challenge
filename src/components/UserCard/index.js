import React from 'react'
import coin from '../../mock/icons/coin.svg'
import { UserCardWrapper, CoinButton } from './styledUserCard'

export const UserCard = ({name, points}) => {
    return (
        <UserCardWrapper>
    <p>{name}</p>            
    <CoinButton>{points}<img src={coin} alt='coin'></img></CoinButton>
        </UserCardWrapper>
    )
}
