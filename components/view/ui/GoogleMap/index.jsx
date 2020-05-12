import React from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import styles from './google-map.module.scss';

const Marker = ({ text }) => <div>{text}</div>;

const GoogleMap = ({ height, width, lat, lng, zoom, text }) => {
  const center = {
    lat,
    lng,
  };

  return (
    <div
      style={{ height: `${height}`, width: `${width}` }}
      className={styles.map}
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.GOOGLE_MAPS_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <Marker lat={lat} lng={lng} text={text} />
      </GoogleMapReact>
    </div>
  );
};

Marker.propTypes = {
  text: PropTypes.string,
};

GoogleMap.defaultProps = {
  zoom: 11,
  lat: 59.955413,
  lng: 30.337844,
  height: '100vh',
  width: '100%',
  text: 'My location',
};

GoogleMap.propTypes = {
  text: PropTypes.string,
  zoom: PropTypes.number,
  lat: PropTypes.number,
  lng: PropTypes.number,
  height: PropTypes.string,
  width: PropTypes.string,
};

export default GoogleMap;
