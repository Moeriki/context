import React, { ReactElement, useState } from 'react';
import { animated, useSpring } from 'react-spring';
import { useDrag } from 'react-use-gesture';

import { Task, TaskCard } from '../tasks';
import * as styles from './swiper.module.css';

interface SwiperProperties {
  task: Task;
}

export default function Swiper({ task }: SwiperProperties): ReactElement {
  const [activeTask, setActiveTask] = useState(task);
  if (activeTask == null && task != null) {
    setActiveTask(activeTask);
  }

  const [{ x, y }, set] = useSpring(() => ({ x: 0, y: 0 }));
  const bind = useDrag(({ down, movement: [mx, my] }) => {
    set({ x: down ? mx : 0, y: down ? my : 0 });
  });

  return (
    <div className={styles.viewContainer}>
      <div className={styles.cardContainer}>
        <animated.div {...bind()} style={{ x, y }}>
          <TaskCard task={activeTask} />
        </animated.div>
      </div>
    </div>
  );
}
