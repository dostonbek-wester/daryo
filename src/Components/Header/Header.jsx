import React from 'react'
import logo from '../../assets/logo.svg'
import './Header.css'
import MarkaziyData from '../Data/Markaziy'
import { Button, Dropdown } from 'antd'
import { NavLink } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { Search } from '@mui/icons-material'




const items = [
  {
    key: '1',
    label: (
      <NavLink to='/Afgoniston'>Afgoniston</NavLink>
    ),
  },
  {
    key: '2',
    label: (
      <NavLink to='/Tojikiston'>Tojikiston</NavLink>
    ),
  },
  {
    key: '3',
    label: (
      <NavLink to='/Turkmaniston'>Turkmaniston</NavLink>
    ),
  },
  {
    key: '4',
    label: (
      <NavLink to='/Qirgiziston'>Qirgiziston</NavLink>
    ),
  },
  {
    key: '5',
    label: (
      <NavLink to='/Qozogiston'>Qozogiston</NavLink>
    ),
  },
 
];



const Header = () => {
  return (
    <div className='Header-div'>
      <div className='logo-div'>
      <NavLink to={'/'}>  <img className='img-logo'  src={logo} alt="" /></NavLink>
      </div>
      <div className='header-end'>
      <NavLink className="navlink" to='/Mahalliy'>Mahalliy</NavLink>
       
        <Dropdown
          menu={{
            items
          }}
          placement="bottomLeft"
          arrow
        >
          <Button style={{background:"black",color:"white",border:"none",fontSize:"20px",marginTop:"-12px"}}>Markaziy Osiyo</Button>
        </Dropdown>
        
       
        <NavLink className="navlink" to='/Moliya'>Moliya</NavLink>
        <NavLink className="navlink"to='/Boshqa'>Boshqa</NavLink>
        <NavLink className="navlink" to='/Dunyo'>Dunyo</NavLink>
        <NavLink className="navlink" to='/Kino'>Kino</NavLink>
        <NavLink className="navlink" to='/Iqtisodiyot'>Iqtisodiyot</NavLink>
        
        <div className='icon'>
        <DarkModeIcon className='dark'/>
        <SearchIcon   className='search' /> 
        
        <FormatListBulletedIcon/>

        </div>

      </div>
    </div>
  )
}

export default Header