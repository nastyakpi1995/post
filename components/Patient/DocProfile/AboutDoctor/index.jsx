import React from 'react';
import { Button } from '../../../view/ui/index';
import ArrowDownSmall from '../../../assets/icons/ArrowDownSmall';
import styles from './style.module.scss';

const languages = [
  { language: 'Français' },
  { language: 'English' },
  { language: 'Nederlands' },
  { language: 'Italiano' },
];
export default function AboutDoctor() {
  return (
    <div className={styles.doctor}>
      <div className={styles['doctor-information']}>
        <h1>About</h1>
        <p>
          I have hinted that I would often jerk poor Queequeg from between the
          whale and the ship—where he would occasionally fall, from the
          incessant rolling and swaying of both. But this was not the only…
        </p>
        <Button
          text="show more"
          className={styles['doctor-button-show']}
          Icon={ArrowDownSmall}
        />
      </div>
      <div>
        <h1>Languages</h1>

        <ul className="ul">
          {languages.map((ln) => (
            <li key={ln.language}>{ln.language}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
