import axios from 'axios';
import getToken from './getToken';

// Utils

// ----------------

export default async function apiCaller(config, after = false, token = true) {
  let userToken = null;

  if (token) {
    userToken = getToken();
  }

  // Set default headers

  const defaultHeaders = {
    ...(token && userToken ? { Authorization: `JWT ${userToken}` } : {}),
  };

  // Data preparation

  console.log('1', process.env.API_URL);

  const fullConfig = {
    // TODO || _ENV.api
    baseURL: process.env.API_URL,
    method: 'get',
    ...config,
    headers: { ...config.headers, ...defaultHeaders },
    // data,
  };

  // Request

  try {
    const res = await axios(fullConfig);
    if (after) {
      return after(res.data);
    }

    return res.data;
  } catch (err) {
    return {};
  }
}
