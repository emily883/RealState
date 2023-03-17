import Navbar from '../../components/Navbar/Navbar';
import style from './Header.module.sass';
import React from 'react';

export default function Header() {
  return (
    <div className={style.HeaderContainer}>
      <div className={style.BackgroundImage}>
        <Navbar />
      </div>
    </div>
  );
}
