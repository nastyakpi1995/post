import React from 'react';
import styles from './styles.module.scss';
import GoogleMap from '../../../../../view/ui/GoogleMap/index';

export default function Map() {
  return (
    <div className={styles.map}>
      <GoogleMap height="100%" />
    </div>
  );
}
