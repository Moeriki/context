import React, { ReactElement } from 'react';

import styles from './app.module.css';
import { MainView } from './main';

import './app.global.css';

export default function Root(): ReactElement {
  return (
    <div className={styles.appContainer}>
      <MainView
        currentTask={{ description: 'The Unexpected Virtue of Ignorance' }}
      />
    </div>
  );
}
