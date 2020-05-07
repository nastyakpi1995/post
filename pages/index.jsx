import { connect } from 'react-redux';
import { useEffect } from 'react';
import Registration from '../components/Patient/Registration/Step1/Step1';

import getUser from '../redux/actions/userActions';

function Home(props) {
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
