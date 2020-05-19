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

  const fullConfig = {
    baseURL:
      process.env.API_URL ||
      'https://docwoo-back-dev.scenario-projects.com/api/v1',
    method: 'get',
    ...config,
    headers: { ...config.headers, ...defaultHeaders },
  };

  // Request

  try {
    const res = await axios(fullConfig);
    if (after) {
      return after(res.data);
    }

    return res.data;
  } catch (err) {
    if (err.response) {
      throw err.response.data || err.response.statusText;
    }
    return Promise.reject(err);
  }
}
