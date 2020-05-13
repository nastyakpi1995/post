import { connect } from 'react-redux';
import React, { useEffect, useState } from 'react';
import Registration from '../components/Patient/Registration';

import getUser from '../redux/actions/userActions';

import InputPhone from '../components/view/ui/InputPhone';
import Input from '../components/view/ui/Input';
import { FieldLabel } from '../components/view/ui';
import Modal from '../components/view/ui/Modal';

function Home(props) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    props.getUser();
  }, []);
  return (
    <div className="container">
      <div className="mainContainer">
        {/* <Registration /> */}
        <button onClick={() => setOpen(!open)}>click</button>
        <Modal close={() => setOpen(false)} open={open}>
          123123123
        </Modal>
      </div>
    </div>
  );
}

export default connect(null, { getUser })(Home);
