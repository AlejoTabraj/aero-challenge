import React from 'react'
import coin from '../../mock/icons/coin.svg'
import { UserCardWrapper, CoinButton, Paragraph } from './styledUserCard'

export const UserCard = ({name, points}) => {
    return (
        <UserCardWrapper>
             <Paragraph>{name}</Paragraph>            
             <CoinButton>{points}<img src={coin} alt='coin'></img></CoinButton>
        </UserCardWrapper>
    )
}
