import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import MarkaziyData from '../Data/Markaziy'
import Card from '../Card/Card'

const Mahalliy = () => {
    const [Mydata, setMydata] = useState([])
    const location = useLocation()
    console.log(location)

    useEffect(() => {
      let filtered = MarkaziyData.filter((item,index)=>{
        return ("/" +item.id.toLowerCase()).includes(location.pathname.toLowerCase())
      })
      setMydata(filtered)
    }, [location.pathname])
    


    return (
        <div className='news-container'>
            {
                Mydata.map((item,index)=>(
                    <Card item={item} key={index} />
                ))
            }
        </div>
    )
}

export default Mahalliy