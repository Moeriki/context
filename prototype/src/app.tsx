import React, { ReactElement } from 'react';

import { Swiper } from './gtd';

import './app.css';

export default function Root(): ReactElement {
  return (
    <Swiper task={{ description: 'The Unexpected Virtue of Ignorance' }} />
  );
}
