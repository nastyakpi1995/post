import axios from 'axios';

// Utils

// ----------------

export default async function apiCaller(config, after = false) {
  // Set default headers


  // Data preparation

  const fullConfig = {
    baseURL: 'https://simple-blog-api.crew.red',
    method: 'get',
    ...config,
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
