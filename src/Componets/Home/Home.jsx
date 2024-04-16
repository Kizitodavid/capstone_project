import React, {useState} from 'react';
import data_product from '../Assets/data';
import { Item } from '../Item/Item';
import './Home.css';




export const Home = () => {
  const [searchTerm,setSearchTerm] = useState("");
  return (
    <div className='home'>
        <div className="container">
          <div className="bottom">
              <div className="search--bar">
                  <input type="text" placeholder='Type here' onChange={(event)=>{
                      setSearchTerm(event.target.value)
                  }}/>
              </div>
          </div>
            <h2>Find the Book You hava been looking for</h2>
            <div className="menu-item">
              {data_product.filter((item)=>{
                if(searchTerm === '') {
                  return item;
                } else if(item.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())){
                  return item;
                }
              }).map((item,i)=>{
                      return <Item className='item' key={i} id={item.id} title={item.title} image={item.image} author={item.author} decsription={item.description}/>
                  })}
            </div>
        </div>
    </div>
  )
}
