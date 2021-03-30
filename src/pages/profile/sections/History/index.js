import React, { useEffect, useState } from 'react'
import { Card } from '../../../../components/Card'
import getHistory from '../../../../services/getHistory'

export const History = () => {

    const [history, setHistory ] = useState([])

    useEffect(() => {
        getHistory()
        .then(data => {
            console.log(data)
        })
        .catch(err => err)

    })
    return (
        <div>
            <Card {...history} setHistory={setHistory}/>
        </div>
    )
}
