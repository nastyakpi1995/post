// eslint-disable-next-line global-require
require('dotenv').config();
const express = require('express');
const next = require('next');
const nextI18NextMiddleware = require('next-i18next/middleware').default;

const nextI18next = require('./i18n');

const env = process.env.NODE_ENV || 'development';
const port = process.env.PORT || 3000;

const dev = env !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

(async () => {
  await app.prepare();
  const server = express();

  await nextI18next.initPromise;
  server.use(nextI18NextMiddleware(nextI18next));

  server.get('*', (req, res) => handle(req, res));

  try {
    const httpServer = await server.listen(port);

    if (!dev) {
      console.log(`--> Ready on http://localhost:${httpServer.address().port}`);
    }
  } catch (error) {
    console.error(error);
  }
})();
