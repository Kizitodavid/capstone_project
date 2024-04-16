import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

export const Item = (props) => {
  return (
    <div className='item'>
        <Link style={{textDecoration:'none'}} to={`/product/${props.id}`}>
          <img src={props.image} alt="" />
        </Link>
        <div className="description-cont">
          <div className="title">
            {props.title}
          </div>
          <div className="name">
            {props.author}
          </div>
          <div className="all">
            {props.price}
          </div>
        </div>
        <button>Add To Cart</button>
    </div>
  )
}
