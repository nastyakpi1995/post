import React from 'react';
import { Button } from '../../../../view/ui/index';
import LocationGreen from '../../../../assets/icons/LocationGreen';
import LocationOrange from '../../../../assets/icons/LocationOrange';
import Home from '../../../../assets/icons/Home';
import styles from './style.module.scss';

export default function LocationButtons() {
  return (
    <div className={styles.buttons}>
      <Button Icon={LocationOrange} text="Clinique Sainte-Anne Saint-Rémi" />
      <Button Icon={LocationGreen} text="Clinique Saint-Jean" />
      <Button Icon={Home} text="Homecare service" />
    </div>
  );
}
