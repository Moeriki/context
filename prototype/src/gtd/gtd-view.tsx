import React, { ReactElement, useState } from 'react';
import { animated, useSpring } from 'react-spring';
import { useDrag } from 'react-use-gesture';

import { Task } from '../tasks';
import * as styles from './gtd-view.module.css';

interface GtdViewProperties {
  task: Task;
}

export default function GtdView({ task }: GtdViewProperties): ReactElement {
  const [activeTask, setActiveTask] = useState(task);
  if (activeTask == null && task != null) {
    setActiveTask(activeTask);
  }

  const [{ x }, set] = useSpring(() => ({ x: 0 }));
  const bind = useDrag(({ down, movement: [mx] }) => {
    set({ x: down ? mx : 0 });
  });

  return (
    <div className={styles.gtdViewContainer}>
      <animated.div className={styles.cardWrapper} style={{ x }} {...bind()}>
        <div className={styles.card}>
          <div className={styles.cardDescription}>{task.description}</div>
          <div className={styles.cardActions}>
            <button
              className={styles.cardActionCompleteTaskButton}
              type="button"
            >
              Complete
            </button>
          </div>
        </div>
      </animated.div>
    </div>
  );
}
