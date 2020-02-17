import React, { ReactElement } from 'react';

import { Task } from './model';
import * as styles from './task-card.module.css';

interface TaskCardProperties {
  task: Task;
}

export default function TaskCard({ task }: TaskCardProperties): ReactElement {
  return (
    <div className={styles.card}>
      <div className={styles.cardDescription}>{task.description}</div>
      <div className={styles.cardActions}>
        <button className={styles.cardActionCompleteTaskButton} type="button">
          Complete
        </button>
      </div>
    </div>
  );
}
