import React from 'react';
import style from './About.module.scss';

export default function About() {
  return (
    <div className={style.AboutContainer}>
      <div className={style.OurStory}>
        <span>OUR STORY</span>
      </div>
      <div>
        <span className={style.OurStoryBackground}>OUR STORY</span>
        <div className={style.AboutText}>We Will Find the Best Option</div>
      </div>
      <div className={style.AboutText2}>
        Real estate is property consisting of land and the buildings on it, along with its natural resources such as
        crops, minerals or water, immovable property of this nature; an interest vested in this (also) an item of real
        property, (more generally) buildings or housing in general.
      </div>
      <div className={style.CardsInfo}>
        <div>
          <div className={style.YearsCard}>
            <span>15 Years</span>
            <span className={style.secondspan}>In Business</span>
          </div>
        </div>
        <div>
          <div className={style.MoneyCard}>
            <span>$1 Billion</span>
            <span className={style.secondspan}>Property Brokered</span>
          </div>
        </div>
        <div>
          <div className={style.TransactionsCard}>
            <span>10,000</span>
            <span className={style.secondspan}>Transactions</span>
          </div>
        </div>
      </div>
    </div>
  );
}
