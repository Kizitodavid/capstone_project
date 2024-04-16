import React from 'react'

export default function Hero() {
  return (
    <div>
        <div className="bottom">
            <div className="search--bar">
            <input type="text" placeholder='Type here' onChange={(event)=>{
                setSearchTerm(event.target.value)
                }}/>
            </div>
        </div>
    </div>
  )
}


