import * as React from 'react';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import Button from '../Button'
import { Drawer} from '@mui/material';
import  {useState} from 'react' 
import './styles.css'
// import Button from '@mui/material/Button';  
export default function AnchorTemporaryDrawer() {
    const [open , notOpen] = useState(false)    
    return (
    <div >
        <button onClick={()=> notOpen(true)} className='links' style={{backgroundColor:'transparent',border:'none',outline:'none'}}>
            <MenuRoundedIcon  className='links'/>
        </button>
        <Drawer
            anchor='right'
            open={open}
            onClose={()=> notOpen(false)}>
                <div className='containerMobile'>
           <a href='/'> <p className='links'>Home</p></a>
          <a href='/'>    <p className='links'>Compare </p></a>
          <a href='/'>     <p className='links'>Watchlist</p></a>
          {/* <a href='/'>      <p className='links'>Dashboard</p></a> */}
          <a href ="/">
            <Button text ={'Dashboard'}/> </a>
      
        </div>
                </Drawer>
    </div>
    )
}