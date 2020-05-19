import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Confirmation, GeneralInfo, PersonalInfo } from './components';
import { STEPS_MAP } from './constants';

export default function Registration() {
  const userType = useRouter().query.type;
  const [page, setPage] = useState(STEPS_MAP.GENERAL_INFO);

  switch (page) {
    case STEPS_MAP.GENERAL_INFO:
      return (
        <GeneralInfo
          onHandleChangePage={() => setPage(STEPS_MAP.CONFIRMATION)}
          type={userType}
        />
      );
    case STEPS_MAP.CONFIRMATION:
      return (
        <Confirmation
          onHandleChangePage={() => setPage(STEPS_MAP.PERSONAL_INFO)}
          type={userType}
        />
      );
    case STEPS_MAP.PERSONAL_INFO:
      return (
        <PersonalInfo
          onHandleChangePage={() => setPage(STEPS_MAP.SUCCESS)}
          type={userType}
        />
      );
    case STEPS_MAP.SUCCESS:
      return <div>success</div>;
    default:
      return null;
  }
}
