import React, { ReactElement } from 'react';

import { Task } from './model';
import * as styles from './task-card.module.css';

interface TaskCardProperties {
  task: Task;
}

export default function TaskCard({ task }: TaskCardProperties): ReactElement {
  return <div className={styles.card}>{task.description}</div>;
}
