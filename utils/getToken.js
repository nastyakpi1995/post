import { TOKEN_NAME } from '../constants/system';
import getCookie from './getCookie';

export default function getToken() {
  return getCookie(TOKEN_NAME);
}
