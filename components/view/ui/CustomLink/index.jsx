import types from 'prop-types';
import React from 'react';

// Components

import Link from 'next/link';
import Text from '../Text';

// Style

import styles from './style.module.scss';

// ----------------

export default function CustomLink({ href, children, color, size, medium }) {
  // Render

  return (
    <Link href="/about">
      <Text medium={medium} color={color}>
        <a className={styles['custom-link']}>{children}</a>
      </Text>
    </Link>
  );
}

// Type of props

CustomLink.propTypes = {
  children: types.node.isRequired,
  href: types.string,
};
