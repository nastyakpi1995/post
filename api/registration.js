import apiCaller from '../utils/apiCaller';

// eslint-disable-next-line import/prefer-default-export
export const sendGeneralInfo = async (data) => {
  return apiCaller({
    url: `/auth/signup/`,
    method: 'post',
    data,
  });
};

export const sendConfirmationInfo = async (data) => {
  return apiCaller({
    url: `/auth/confirm_phone/`,
    method: 'post',
    data,
  });
};

export const sendPersonalInfo = async (data) => {
  return apiCaller({
    url: `/auth/profile/`,
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${sessionStorage.token}`,
    },
    data,
  });
};
