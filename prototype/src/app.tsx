import React, { ReactElement } from 'react';

import styles from './app.module.css';
import { GtdView } from './gtd';

import './app.global.css';

export default function Root(): ReactElement {
  return (
    <div className={styles.appContainer}>
      <GtdView
        currentTask={{ description: 'The Unexpected Virtue of Ignorance' }}
      />
    </div>
  );
}
