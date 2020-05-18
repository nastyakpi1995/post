import React, { useState } from 'react';
import { Confirmation, GeneralInfo, PersonalInfo } from './components';
import { STEPS_MAP } from './constants';

export default function Registration() {
  const [page, setPage] = useState(STEPS_MAP.GENERAL_INFO);

  switch (page) {
    case STEPS_MAP.GENERAL_INFO:
      return (
        <GeneralInfo
          onHandleChangePage={() => setPage(STEPS_MAP.CONFIRMATION)}
        />
      );
    case STEPS_MAP.CONFIRMATION:
      return (
        <Confirmation
          onHandleChangePage={() => setPage(STEPS_MAP.PERSONAL_INFO)}
        />
      );
    case STEPS_MAP.PERSONAL_INFO:
      return (
        <PersonalInfo onHandleChangePage={() => setPage(STEPS_MAP.SUCCESS)} />
      );
    case STEPS_MAP.SUCCESS:
      return <div>success</div>;
    default:
      return null;
  }
}
