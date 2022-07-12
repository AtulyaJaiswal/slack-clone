import React from 'react';
import './Header.css';
import { Avatar } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { useStateValue } from './StateProvider';

function Header() {

  const[{user}] =useStateValue();

  return (
    <div className='header'>
        <div className='header_left'>
            {/* Avatar */}
            <Avatar
            className="header_avatar"
            alt={user?.displayName}
            src={user?.photoURL}
            />
            {/* Icon */}
            <AccessTimeIcon/>
        </div>
        <div className='header_search'>
            <SearchIcon/>
            <input
            placeholder='Search'
            />
        </div>
        <div className='header_right'>
            <HelpOutlineIcon/>
        </div>
    </div>
  )
}

export default Header;