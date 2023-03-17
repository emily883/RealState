import Navbar from '../../components/Navbar/Navbar';
import style from './Header.module.sass';
import React from 'react';
import NearMeRoundedIcon from '@mui/icons-material/NearMeRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';

export default function Header() {
  return (
    <div className={style.HeaderContainer}>
      <div className={style.BackgroundImage}>
        <Navbar />
        <div className={style.CenterInfo}>
          <div>
            <span>Real Estate</span>
          </div>
          <div>
            <span>Invest on Real Estate with Our Company</span>
          </div>
          <div>
            <div className={style.Info}>
              <div>
                <NearMeRoundedIcon />
                <span>225 S 1st St Brooklyn, NY 11211</span>
              </div>
              <div>
                <LocalPhoneRoundedIcon />
                <span>(929) 356-0147</span>
              </div>
              <div>
                <EmailRoundedIcon />
                <span>anEmail@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
