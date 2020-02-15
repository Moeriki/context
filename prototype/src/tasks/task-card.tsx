import * as React from 'react';

import * as styles from './task-card.module.css';

export default function TaskCard(properties: {
  description: string;
}): React.ReactElement {
  return <div className={styles.card}>{properties.description}</div>;
}
