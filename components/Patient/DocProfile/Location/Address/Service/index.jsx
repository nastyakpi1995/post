import React from 'react';
import styles from './styles.module.scss';

const services = [
  { name: 'Abdominal rehabilitation', time: '30 min', cost: '40 €' },
  { name: 'Back Problem', time: '30 min', cost: '40 €' },
  { name: 'Crochetage', time: '30 min', cost: '40 €' },
  { name: 'Dry Needling', time: '30 min', cost: '40 €' },
  { name: 'Emergency', time: '30 min', cost: '40 €' },
  { name: 'Hand and wrist pains', time: '30 min', cost: '40 €' },
];

export default function Address({ className }) {
  return (
    <div>
      <h1 className={className}>Service availability</h1>
      {services.map((s) => (
        <div key={s.name} className={styles.service}>
          <h2>{s.name}</h2>
          <div className={styles['service-additional_information']}>
            <p>{s.time}</p>
            <p> {s.cost}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
