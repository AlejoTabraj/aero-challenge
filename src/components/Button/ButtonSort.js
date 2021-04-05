import React from 'react'
import { Button } from './styledButtonSort'

export const ButtonSort = ({action, description}) => {
    return (
        <Button onClick={action}>
           {description}
        </Button>
    )
}
