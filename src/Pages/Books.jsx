import React, {useState} from 'react'
import products from '../Componets/Assets/Products';
import adventure from '../Componets/Assets/Quotes';
import data from '../Componets/Assets/data';
import { ItemOp } from '../Componets/Item_op/ItemOp';
import '../Componets/Home/Home.css'

export const Books = () => {
  const [searchTerm,setSearchTerm] = useState("");
  return (
    <div className='Books'>
        <div className="container">
          <div className="bottom">
              <div className="search--bar">
                  <input type="text" placeholder='Type here' onChange={(event)=>{
                      setSearchTerm(event.target.value)
                  }}/>
              </div>
          </div>
            <h2>All category</h2>
            <div className='menu-item'>
                {products.filter((item)=>{
                  if(searchTerm === '') {
                    return item;
                  } else if(item.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())){
                    return item;
                  }
                }).map((item,i)=>{
                        return <ItemOp key={i} id={item.id} title={item.title} image={item.image} author={item.author} price={item.price}/>
                    })}
            </div>
            <h2>Adventure</h2>
            <div className='menu-item'>
                {adventure.filter((item)=>{
                  if(searchTerm === '') {
                    return item;
                  } else if(item.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())){
                    return item;
                  }
                }).map((item,i)=>{
                        return <ItemOp key={i} id={item.id} title={item.title} image={item.image} author={item.author} price={item.price}/>
                    })}
            </div>
            <h2>Action</h2>
            <div className='menu-item'>
                {data.filter((item)=>{
                  if(searchTerm === '') {
                    return item;
                  } else if(item.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())){
                    return item;
                  }
                }).map((item,i)=>{
                        return <ItemOp key={i} id={item.id} title={item.title} image={item.image} author={item.author} price={item.price}/>
                    })}
            </div>
        </div>
    </div>
  )
}
