import React, { ReactElement, useState } from 'react';

import { Task, TaskCard } from '../tasks';

interface SwiperProperties {
  task: Task;
}

export default function Swiper({ task }: SwiperProperties): ReactElement {
  const [activeTask, setActiveTask] = useState(task);
  if (activeTask == null && task != null) {
    setActiveTask(activeTask);
  }
  return (
    <div>
      <TaskCard task={activeTask} />
    </div>
  );
}
