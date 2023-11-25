import React from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import "./index.css"

const Navbar = () => {
  return (
    <div className='bg-container'>
        <nav className='nav'>
            <h1 className='heading'>Recco</h1>
            <ul className='lists'>
                <li className='listItem'>Store</li>
                <li className='listItem'>Orders</li>     
                <li className='listItem'>Analytics</li>
                </ul>
                <div className='cart'>
                <ShoppingCartOutlinedIcon/> 
                </div>
                <p className='para'>Hello, James</p>
                
            
        </nav>
    </div>
  )
}

export default Navbar