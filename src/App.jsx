import React from 'react'
import Header from './Components/Header/Header'
import Seidbar from './Components/Seidbar/Seidbar'
import News from './Components/News/News'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dunyo from './Components/Navlink/Dunyo'
import Layfstayl from './Components/Navlink/Layfstayl'
import Kolumnitslar from './Components/Navlink/Kolumnitslar'
import Mahalliy from './Components/Navlink/Mahalliy'
import Sidebar from './Components/Sidebar/Sidebar'
import Kino from './Components/Navlink/Kino'
import Moliya from './Components/Navlink/Moliya'
import Qirgiziston from './Components/Navlink/Qirgiziston'
import Qozogiston from './Components/Navlink/Qozogiston'
import Turkmaniston from './Components/Navlink/Turkmaniston'
import Afgoniston from './Components/Navlink/Afgoniston'
import Tojikiston from './Components/Navlink/Tojigiston'
import Iqtisodiyot from './Components/Navlink/Iqtisodiyot'
import Boshqa from './Components/Navlink/Boshqa'







const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="home-wrapper">
        <div className="left-bar">
          <Routes>
            <Route path='/' element={<News />} />
            <Route path='/dunyo' element={<Dunyo />} />
            <Route path='/lifestyle' element={<Layfstayl />} />
            <Route path='/columnits' element={<Kolumnitslar />} />
            <Route path='/mahalliy' element={<Mahalliy />} />
            <Route path='/kino' element={< Kino />} />
            <Route path='/Moliya' element={< Moliya />} />
            <Route path='/Qirgiziston' element={< Qirgiziston />} />
            <Route path='/qozogiston' element={< Qozogiston />} />
            <Route path='/turkmaniston' element={< Turkmaniston />} />
            <Route path='/Afgoniston' element={< Afgoniston />} />
            <Route path='/Tojikiston' element={< Tojikiston />} />
            <Route path='/sport' element={< Turkmaniston />} />
            <Route path='/iqtisodiyot' element={< Iqtisodiyot />} />
            <Route path='/boshqa' element={< Boshqa />} />
            
          </Routes>
        </div>
        <Sidebar />

      
      </div>
      <Seidbar />
    </BrowserRouter>

    



  )
}

export default App