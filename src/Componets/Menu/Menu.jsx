import React from 'react'
import './Menu.css'
import products from '../Assets/Products'
import { Item } from '../Item/Item'

export const Menu = () => {
  return (
    <div className='menu'>
        <h1>FOODS Menu</h1>
        <hr />
        <div className="menu-item">
            {products.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}