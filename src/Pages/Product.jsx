import React, { useContext } from 'react'
import { BooksContext } from '../Context/BooksContext'
import { useParams } from 'react-router-dom'
import { ProductDisplay } from '../Componets/ProductDisplay/ProductDisplay'

export const Product = () => {
  const {Products} = useContext(BooksContext)
  const {productId} = useParams()
  const product = Products.find((e)=> e.id ===Number(productId))
  return (
    <div>
      <ProductDisplay product={product}/>
    </div>
  )
}
