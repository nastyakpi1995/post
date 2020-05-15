import apiCaller from '../utils/apiCaller';

// eslint-disable-next-line import/prefer-default-export
const loginApi = async (payload) => {
  const data = {
    ...payload,
    phone_number: `+${payload.phone_number}`,
  };
  return apiCaller({
    url: '/auth/login/',
    method: 'POST',
    data,
  });
};

export { loginApi };
