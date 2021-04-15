import React from 'react';
import { Image, List } from 'semantic-ui-react';

export default function HangoutListAttendee() {
  return (
    <List.Item>
      <Image size="mini" circular src="/assets/defaultUserImage.png" />
    </List.Item>
  );
}
