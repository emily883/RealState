import React from 'react';
import About from '../../components/About/About';
import style from './Content.module.scss';

export default function Content() {
  return (
    <div className={style.ContentContainer}>
      <About />
    </div>
  );
}
