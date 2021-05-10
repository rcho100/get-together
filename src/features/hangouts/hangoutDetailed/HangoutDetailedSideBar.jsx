/* eslint-disable react/prop-types */
import React from 'react';
import {
  Segment, Item,
} from 'semantic-ui-react';

export default function HangoutDetailedSideBar({ attendees }) {
  const numOfAttendees = attendees.length;

  return (
    <>
      <Segment
        textAlign="center"
        style={{ border: 'none' }}
        attached
        inverted
        color="teal"
      >
        {numOfAttendees === 1 ? `${numOfAttendees} Person Going` : `${numOfAttendees} People Going`}
      </Segment>
      <Segment attached>
        <Item.Group relaxed divided>
          {attendees.map((attendee) => (
            <Item key={attendee.id}>
              <Item.Image size="tiny" circular src={attendee.photoURL || '/assets/defaultUserImage.png'} />
              <Item.Content verticalAlign="middle">
                <Item.Header>
                  <span>{attendee.name}</span>
                </Item.Header>
              </Item.Content>
            </Item>
          ))}
        </Item.Group>
      </Segment>
    </>
  );
}
