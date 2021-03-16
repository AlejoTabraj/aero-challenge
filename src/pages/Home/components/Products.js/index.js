import React,{ useEffect, useState } from 'react'
import getProducts from '../../../../services'
import { Card } from '../../../../components/Card'

export const Products = () => {
    const [ products, setProducts] = useState()
    const [loading, setLoading] = useState(true)


    useEffect( () => {
      const fetchData = async () => {
          setLoading(true)
      const result = await getProducts()
      console.log(result.data[0])
      setProducts(result.data);
    };
    fetchData()
    setLoading(false)
    }, [])

    return (    
        <div style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'space-between'}}>
            {
                loading ? 'loading...' : products && products.map( product => <Card key={product._id} {...product}/> )
            }
        </div>
    )
}
