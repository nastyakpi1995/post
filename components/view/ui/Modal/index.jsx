import cn from 'classnames';
import types from 'prop-types';
import usePortal from 'react-useportal';
import React, { useEffect } from 'react';
import Dialog from '@material-ui/core/Dialog';

// Style

import styles from './style.module.scss';

export default function Modal({ open, children }) {
  const { openPortal, isOpen, Portal } = usePortal({
    isOpen: open,
    closeOnOutsideClick: true,
  });

  return (
    <>
      {open && (
        <Portal>
          <Dialog aria-labelledby="simple-dialog-title" open={open}>
            <div className={styles.modal}>{children}</div>
          </Dialog>
        </Portal>
      )}
    </>
  );
}

// Type of props

Modal.propTypes = {
  open: types.bool,
  children: types.node,
};
