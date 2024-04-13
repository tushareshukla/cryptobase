import React from 'react'
import './styles.css'
import AnchorTemporaryDrawer from './drawer'
import Button from '../Button'
import { Switch } from '@mui/material'

const Header = () => {

  return (
    <div className='navbar'>
        <h1 className='logo'>CryptoBase<span style ={{color:'var(--blue)'}}>.</span></h1>
       
        <div className='container'>
        
           <a href='/'> <p className='links'>Home</p></a>
          <a href='/'>    <p className='links'>Compare </p></a>
          <a href='/'>     <p className='links'>Watchlist</p></a>
          {/* <a href='/'>      <p className='links'>Dashboard</p></a> */}
          <a href ="/#">
            <Button  text ={'Dashboard'} onClick={() => console.log("Button Clicked")}/> </a>
            <Switch  defaultChecked  />
        </div>
        <div className='modileDrawer'>
          <AnchorTemporaryDrawer/>
        </div>
       

    </div>
  )
}

export default Header