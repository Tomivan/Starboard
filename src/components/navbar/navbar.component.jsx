import React from 'react';
import Avatar from '../../assets/images/Avatar.svg';
import Logo from '../../assets/images/starboard.svg';
import './navbar.component.css';

const Navbar = () => {
    return(
        <div className='navbar'>
            <ul>
                <li>Deal Overview</li>
                <li>Workshop</li>
                <li>Pipeline</li>
                <li>Settings</li>
            </ul>
            <div className="search">
                <img src={Avatar} alt='' className='avatar'/>
                <input type='search' placeholder='Ask me anything' className='search' />
            </div>
            <img src={Logo} alt='' className='logo' />
        </div>
    )
}

export default Navbar;