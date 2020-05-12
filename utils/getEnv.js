import getConfig from 'next/config';
import isServer from './isServer';

export default function getENV() {
  const dev = 'development';

  if (isServer()) {
    return process.env.HOST_ENV || dev;
  }
  return getConfig().publicRuntimeConfig.MODE || dev;
}
