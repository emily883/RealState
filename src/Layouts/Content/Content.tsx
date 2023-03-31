import React from 'react';
import About from '../../components/About/About';
import Services from '../../components/Services/Services';
import style from './Content.module.scss';

export default function Content() {
  return (
    <div className={style.ContentContainer}>
      <About />
      <Services />
    </div>
  );
}
