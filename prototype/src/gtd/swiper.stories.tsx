import { text, withKnobs } from '@storybook/addon-knobs';
import React from 'react';

import Swiper from './swiper';

const metadata = {
  decorators: [withKnobs],
  title: 'Swiper',
};

export default metadata;

export const withText = (): React.ReactElement => (
  <div style={{ margin: '1em', display: 'flex', justifyContent: 'center' }}>
    <Swiper
      task={{
        description: text('Description', 'The Unexpected Virtue of Ignorance'),
      }}
    />
  </div>
);
