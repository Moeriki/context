import clamp from 'lodash/fp/clamp';
import React, { ReactElement, useState } from 'react';
import { animated, useSpring } from 'react-spring';
import { useDrag } from 'react-use-gesture';

import { Task } from '../tasks';
import * as styles from './gtd-view.module.css';

const X_BOUND_RIGHT = 20;
const X_TO_ANGLE = -0.25;

interface GtdViewProperties {
  task: Task;
}

export default function GtdView({ task }: GtdViewProperties): ReactElement {
  const [activeTask, setActiveTask] = useState(task);
  if (activeTask == null && task != null) {
    setActiveTask(activeTask);
  }

  const [{ x }, set] = useSpring(() => ({ x: 0 }));
  const bind = useDrag(
    ({ down, movement: [mx] }) => {
      set({ x: down ? mx : 0 });
    },
    {
      bounds: { left: 0, right: X_BOUND_RIGHT },
      rubberband: 0.125,
    },
  );

  return (
    <div className={styles.gtdViewContainer}>
      <animated.div
        className={styles.cardWrapper}
        style={{
          rotateY: x.interpolate(
            (v) => `${clamp(0, X_BOUND_RIGHT, v) * X_TO_ANGLE}deg`,
          ),
          x,
        }}
        {...bind()}
      >
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
