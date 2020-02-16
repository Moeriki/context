import React, { ReactElement } from 'react';

import { Task } from '../tasks';
import * as styles from './gtd-view.module.css';
import Swiper from './swiper';

interface GtdViewProperties {
  currentTask: Task;
}

export default function GtdView({
  currentTask,
}: GtdViewProperties): ReactElement {
  return (
    <div className={styles.gtdViewContainer}>
      <Swiper task={currentTask} />
    </div>
  );
}
