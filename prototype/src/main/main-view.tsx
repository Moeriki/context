import React, { ReactElement } from 'react';

import { GtdView } from '../gtd';
import { Task } from '../tasks';
import * as styles from './main-view.module.css';

interface MainViewProperties {
  currentTask: Task;
}

export default function MainView({
  currentTask,
}: MainViewProperties): ReactElement {
  return (
    <div className={styles.mainViewContainer}>
      <GtdView task={currentTask} />
    </div>
  );
}
