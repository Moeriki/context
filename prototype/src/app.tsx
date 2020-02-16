import React, { ReactElement } from 'react';

import { TaskCard } from './tasks';

import './app.css';

export default function Root(): ReactElement {
  return (
    <TaskCard task={{ description: 'The Unexpected Virtue of Ignorance' }} />
  );
}
