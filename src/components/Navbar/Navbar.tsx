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
      <div>
        <button>About</button>
        <button>Services</button>
        <button>Reviews</button>
        <button>Contacts</button>
      </div>
      <div>
        <button>Get in Touch</button>
      </div>
    </div>
  );
}
