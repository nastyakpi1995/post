import apiCaller from '../utils/apiCaller';

// eslint-disable-next-line import/prefer-default-export
export const getUserApi = async () => {
  return apiCaller({
    url: 'https://jsonplaceholder.typicode.com/users/1',
    params: { test: 1 },
    data: {},
  });
};
