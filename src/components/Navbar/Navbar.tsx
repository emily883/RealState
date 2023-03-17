import React from 'react';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import style from './Navbar.module.sass';

export default function Navbar() {
  return (
    <div className={style.NavBarContainer}>
      <div className={style.Constructor}>
        <MenuRoundedIcon />
        <span>Constructor</span>
      </div>
      <div className={style.Search}>
        <SearchRoundedIcon />
        <span>Search</span>
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
    </div>
  );
}
