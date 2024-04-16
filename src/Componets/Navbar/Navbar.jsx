import React from 'react'
import './Navbar.css'
import { TiHomeOutline } from "react-icons/ti";
import { FaSwatchbook } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { MdLiveHelp } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { Link } from 'react-router-dom';
import { eventWrapper } from '@testing-library/user-event/dist/utils';

const Navbar = () => {
  return (
    <div className='navbar home'>
        <div className="top">
            <div className="top--left">
                <h1>Dk Bookstore</h1>
            </div>
            <div className="main--nav top--right">
                <div className="col">
                    <Link style={{textDecoration: 'none', color: '#fff'}} to='/' className='colle'><TiHomeOutline className='ico-nav'/>Home</Link>
                </div>
                <div className="col">
                    <Link style={{textDecoration: 'none', color: '#fff'}} to='/books' className='colle'><FaSwatchbook className='ico-nav'/>Product</Link>
                </div>
                <button>Login</button>
                <button>Sign Up</button>
            </div>
            <Link style={{textDecoration: 'none'}} to='/cart'><TiShoppingCart className='ico-nav cart'/></Link>
        </div>
    </div>
  )
}

export default Navbar;