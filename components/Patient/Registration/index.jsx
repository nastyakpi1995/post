import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Confirmation from './Confirmation';

export default function Registration() {
  const [page, setPage] = useState('Step1');

  switch (page) {
    case 'Step1':
      return <Step1 onHandleChangePage={setPage} />;
    case 'Step2':
      return <Step2 onHandleChangePage={setPage} />;
    case 'Confirmation':
      return <Confirmation onHandleChangePage={setPage} />;
    default:
      return null;
  }
}
