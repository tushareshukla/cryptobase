import React from 'react'
import './styles.css'
import AnchorTemporaryDrawer from './drawer'
import Button from '../Button'
import { Switch } from '@mui/material'
import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <div className='navbar'>
        <h1 className='logo'>Crypt0Base<span style ={{color:'var(--blue)'}}>.</span></h1>
       
        <div className='container'>
        
           <Link to='/'> <p className='links'>Home</p></Link>
          <Link to='/compare'>    <p className='links'>Compare </p></Link>
          <Link to='/watchlist'>     <p className='links'>Watchlist</p></Link>
          {/* <a href='/'>      <p className='links'>Dashboard</p></a> */}
          <Link to ="/dashboard">
            <Button  text ={'Dashboard'} onClick={() => console.log("Button Clicked")}/> </Link>
            <Switch  defaultChecked  />
        </div>
        <div className='modileDrawer'>
          <AnchorTemporaryDrawer/>
        </div>
       

    </div>
  )
}

export default Header