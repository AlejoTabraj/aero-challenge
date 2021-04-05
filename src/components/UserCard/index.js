import React from 'react'
import coin from '../../mock/icons/coin.svg'
import { UserCardWrapper, CoinButton, Paragraph } from './styledUserCard'

export const UserCard = ({name, points, btnCoinAction}) => {
    return (
        <UserCardWrapper>
             <Paragraph>{name}</Paragraph>            
             <CoinButton value={points} onClick={btnCoinAction}>{points}<img src={coin} alt='coin'></img></CoinButton>
        </UserCardWrapper>
    )
}
