import React from 'react'
import './Card.css'

const Card = ({ item }) => {
  return (
    <div className='big'>
      <div className='news-card'>
        <div className='cont'>
          <div className='rasm-div'>
            <img className='img' src={item.img} alt="" />
            <button className='button-card' >{item.id}</button>
          </div>
          <div className='three-gap'>
            <h3 className='h1'>{item.category}</h3>
            <div>{item.desc}</div>
            <p>{item.comp}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card