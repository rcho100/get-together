/* eslint-disable react/prop-types */
import React from 'react';
import { Image, List } from 'semantic-ui-react';

export default function HangoutListAttendee({ attendee }) {
  return (
    <List.Item>
      <Image size="mini" circular src={attendee.photoURL} />
    </List.Item>
  );
}
