import React, { useState } from 'react';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import style from './Navbar.module.scss';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function NavBar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={style.NavBarContainer}>
      <div className={style.Constructor}>
        <div className={style.Menuitem}></div>
        <span>Constructor.</span>
      </div>
      <div className={style.NavButtons}>
        <button className={style.Button}>About</button>
        <button className={style.Button}>Services</button>
        <button className={style.Button}>Reviews</button>
        <button className={style.Button}>Contacts</button>
      </div>
      <div>
        <button className={style.Button}>Get in Touch</button>
      </div>
      <div className={style.Menuitem}></div>
    </div>
  );
}
