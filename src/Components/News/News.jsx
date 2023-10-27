import React from 'react'
import MarkaziyData from '../Data/Markaziy'
import Card from '../Card/Card'
import './News.css'

const News = () => {
  return (
    <div className='news-container'>
      {
        MarkaziyData.map((item, index) => (
          <Card item={item} />
        ))
      }
    </div>
  )
}

export default News