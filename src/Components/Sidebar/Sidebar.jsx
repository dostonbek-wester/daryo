import React from 'react'
import './sidebar.css'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import MarkaziyData from '../Data/Markaziy'
import Card2 from '../Card2/Card'

const Sidebar = () => {
  const [Mydata, setMydata] = useState([])
  const location = useLocation()

  useEffect(() => {
    let filtered = MarkaziyData.filter((item, index) => {
      return ("/" + item.id.toLowerCase()).includes(location.pathname.toLowerCase())
    })
    setMydata(filtered)
  }, [location.pathname])
  return (
    <div className='side-container'>
      <h3>So‘nggi yangiliklarga o‘tish</h3>
      <div className='side-cards'>
        {
          Mydata.map((item, index) => (
            <Card2 item={item} key={index} />
          ))
        }
      </div>
    </div>
  )
}

export default Sidebar