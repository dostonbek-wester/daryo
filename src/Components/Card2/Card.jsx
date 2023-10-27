import React from 'react'
import './Card.css'

const Card2 = ({ item }) => {
  return (
    <div className='big'>
      <div className='news-card'>
        <div className='cont' style={{display:"flex",justifyContent:"space-between"}}>
          <div className='three-gap' style={{width:250}}>
            <h3 className='h1' style={{backgroundColor:"white"}}>{item.category}</h3>
            <div>{item.desc}</div>
          </div>
          <div className='rasm-div' style={{width:150,height:100}}>
            <img className='img' style={{width:"100%",height:100}} src={item.img} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card2