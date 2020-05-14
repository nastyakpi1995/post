import { connect } from 'react-redux';
import React, { useEffect, useState } from 'react';
import Registration from './auth/signup';

import getUser from '../redux/actions/userActions';

function Home(props) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    props.getUser();
  }, []);
  return (
    <div className="container">
      <div className="mainContainer">
        <Registration />
      </div>
    </div>
  );
}

export default connect(null, { getUser })(Home);
