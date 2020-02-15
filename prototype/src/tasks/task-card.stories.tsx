import React from 'react';

import TaskCard from './task-card';

const metadata = { title: 'Task Card' };

export default metadata;

export const withText = (): React.ReactElement => <TaskCard />;
