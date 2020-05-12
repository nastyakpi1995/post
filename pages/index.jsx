import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import Registration from '../components/Patient/Registration';

import getUser from '../redux/actions/userActions';

import InputNumber from '../components/view/ui/InputNumber';

function Home(props) {
  useEffect(() => {
    props.getUser();
  }, []);
  return (
    <div className="container">
      <div className="mainContainer">
        {/* <Registration /> */}
        <InputNumber />
      </div>
    </div>
  );
}

export default connect(null, { getUser })(Home);
