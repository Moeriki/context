import { text, withKnobs } from '@storybook/addon-knobs';
import React from 'react';

import TaskCard from './task-card';

const metadata = {
  decorators: [withKnobs],
  title: 'Task Card',
};

export default metadata;

export const withText = (): React.ReactElement => (
  <TaskCard
    description={text('Description', 'The Unexpected Virtue of Ignorance')}
  />
);
