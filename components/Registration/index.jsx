import React, { useState, useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import { USER_TYPES } from 'constants/system';
import { Confirmation, GeneralInfo, PersonalInfo } from './components';
import { STEPS_MAP } from './constants';

export default function Registration() {
  const {
    query: { type },
    pathname,
  } = useRouter();
  const userType = type || USER_TYPES.CUS;
  const onLoginHandler = () =>
    Router.push({
      pathname: userType === USER_TYPES.CUS ? '/auth/login' : '/auth/doctor',
    });
  const [page, setPage] = useState(STEPS_MAP.GENERAL_INFO);

  useEffect(() => {
    setPage(STEPS_MAP.GENERAL_INFO);
  }, [pathname]);

  switch (page) {
    case STEPS_MAP.GENERAL_INFO:
      return (
        <GeneralInfo
          onHandleChangePage={() => setPage(STEPS_MAP.CONFIRMATION)}
          type={userType}
          onLoginHandler={onLoginHandler}
        />
      );
    case STEPS_MAP.CONFIRMATION:
      return (
        <Confirmation
          onHandleChangePage={() => setPage(STEPS_MAP.PERSONAL_INFO)}
          type={userType}
          onLoginHandler={onLoginHandler}
        />
      );
    case STEPS_MAP.PERSONAL_INFO:
      return (
        <PersonalInfo
          onHandleChangePage={() => Router.push('/success')}
          type={userType}
        />
      );
    default:
      return null;
  }
}
