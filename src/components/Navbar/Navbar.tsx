import React, { useState } from 'react';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import style from './Navbar.module.scss';
import Fade from '@mui/material/Fade';

export default function Navbar() {
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
        <span>Constructor</span>
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
      <div className={style.Menuitem}>
        <Button
          className={style.ButtonPhoneContainer}
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          id="menu-button"
        >
          <MenuRoundedIcon className={style.ButtonPhone} />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
          transitionDuration={500}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleClose}>About</MenuItem>
          <MenuItem onClick={handleClose}>Services</MenuItem>
          <MenuItem onClick={handleClose}>Reviews</MenuItem>
          <MenuItem onClick={handleClose}>Contacts</MenuItem>
          <MenuItem onClick={handleClose}>Get in Touch</MenuItem>
        </Menu>
      </div>
    </div>
  );
}
