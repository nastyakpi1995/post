import React from 'react';
import ContainerMap from './Map';
import ServiceBlock from './Service';
import styles from './styles.module.scss';

export default function Address({ className }) {
  return (
    <div className={styles.address}>
      <h1>Address and phone</h1>
      <p>Centre Naître et Devenir, Avenue Everard 7, Brussels</p>
      <span>330-364-0456</span>
      <ContainerMap />
      <div className={styles['address-payment']}>
        <h1 className={className}>Payment method</h1>
        <ul>
          <li>Cash</li>
          <li>Bank card</li>
          <li>Mobile payment</li>
        </ul>
      </div>
      <ServiceBlock className={className} />
    </div>
  );
}
