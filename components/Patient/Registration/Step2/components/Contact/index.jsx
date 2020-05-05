import React from 'react';
import Input from '../../../../../view/ui/Input';
import styles from './style.module.scss';

export default function Contact() {
  return (
    <div className={styles['validation-contact']}>
      <p className={styles['validation-description']}>Contact information</p>
      <div className={styles['contact-wrapper']}>
        <div className={styles['contact-country']}>
          <label className={styles.helper}>
            country
            <select className={styles.select} id="country">
              <option>Belgium</option>
              <option>Ukraine</option>
            </select>
          </label>
        </div>
        <div className={styles['contact-city']}>
          <label className={styles.helper}>
            city
            <select className={styles.select} id="city">
              <option>Brussels</option>
              <option>Kyiv</option>
            </select>
          </label>
        </div>
      </div>
      <div className={styles['contact-direction']}>
        <label className={styles.helper}>
          direction
          <Input
            type="text"
            placeholder="Rue Montagne aux Herbes Potagères"
            id="direction"
          />
        </label>
      </div>
      <div className={styles['contact-optional']}>
        <div className={styles['contact-house']}>
          <label className={styles.helper}>
            house number
            <Input type="number" placeholder="26" id="house" />
          </label>
        </div>
        <div className={styles['contact-apartment']}>
          <label className={styles.helper}>
            apartment number
            <Input type="number" placeholder="3" id="apartment" />
          </label>
        </div>
        <div className={styles['contact-floor']}>
          <label className={styles.helper}>
            floor (optional)
            <Input type="number" placeholder="2" id="floor" />
          </label>
        </div>
      </div>
      <div className={styles['contact-zip']}>
        <label className={styles.helper}>
          zip code
          <Input type="number" placeholder="1000" id="zipCode" />
        </label>
      </div>
      <div className={styles['contact-email']}>
        <label className={styles.helper}>
          email
          <Input type="text" placeholder="rowe.shana@mina.biz" id="email" />
        </label>
      </div>
    </div>
  );
}
