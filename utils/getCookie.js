import Cookies from 'js-cookie';
import globalObject from '../global';
import isServer from './isServer';

export default function getCookie(name) {
  if (isServer()) {
    return globalObject.cookie[name] || null;
  }
  return Cookies.get(name) || null;
}
