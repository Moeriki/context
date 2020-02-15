import * as React from 'react';

import { TaskCard } from './tasks';

import './app.css';

export default function Root(): React.ReactElement {
  return <TaskCard description="The Unexpected Virtue of Ignorance" />;
}
