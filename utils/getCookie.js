import Cookies from 'js-cookie';

import isServer from './isServer';

export default function getCookie(name) {
  if (isServer()) {
    console.log('test');
  }
  return Cookies.get(name) || null;
}
