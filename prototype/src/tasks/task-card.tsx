import * as React from 'react';

export default function TaskCard(properties: {
  description: string;
}): React.ReactElement {
  return <div>{properties.description}</div>;
}
