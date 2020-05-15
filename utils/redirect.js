import Router from 'next/router';
import isServer from './isServer';
import globalObject from '../global';

// Constants

import { TOKEN_NAME } from '../constants/system';

// eslint-disable-next-line consistent-return
export default function redirect(path, deleteToken) {
  if (isServer()) {
    const { res } = globalObject;

    res.writeHead(302, {
      Location: path,
      ...(deleteToken
        ? {
            'Set-Cookie': `${TOKEN_NAME}=deleted; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`,
          }
        : {}),
    });
    res.end();
  } else {
    return Router.replace(path);
  }
}
