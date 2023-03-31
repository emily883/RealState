import React from 'react';
import Content from '../../Layouts/Content/Content';
import Header from '../../Layouts/Header/Header';
import style from './Home.module.scss';

export default function Home() {
  return (
    <div className={style.HomeContainer}>
      <div className={style.HeaderContainer}>
        <Header />
      </div>
      <div className={style.ContentComponent}>
        <Content />
      </div>
    </div>
  );
}
