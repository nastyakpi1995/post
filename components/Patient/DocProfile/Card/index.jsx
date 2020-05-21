import React from 'react';
import { Button } from '../../../view/ui/index';
import Avatar from '../../../assets/icons/AvatarDOC';
import styles from './style.module.scss';

export default function Card() {
  return (
    <div className={styles.card}>
      <section className={styles['card-doc_main']}>
        <Avatar />
        <div className={styles['card-body']}>
          <h1>Gene Stokes</h1>
          <p>Physiotherapist, Osteopath</p>

          <div className={styles['card-number']}>
            <span>Inami Number: </span>
            <p>53854004</p>
          </div>
          <Button className={styles['card-button']} text="conventional" />
        </div>
      </section>
    </div>
  );
}
