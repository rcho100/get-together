/* eslint-disable react/prop-types */
import React from 'react';
import {
  Button, Icon, Item, List, Segment,
} from 'semantic-ui-react';
import HangoutListAttendee from './HangoutListAttendee';

export default function HangoutListItem({ hangout }) {
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size="tiny" circular src={hangout.hostPhotoURL} />
            <Item.Content>
              <Item.Header content={hangout.title} />
              <Item.Description content={`Hosted by ${hangout.hostedBy}`} />
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment secondary>
        <List horizontal>
          {hangout.attendees.map((attendee) => (
            <HangoutListAttendee attendee={attendee} key={attendee.id} />
          ))}
        </List>
      </Segment>
      <Segment>
        <span>
          <Icon name="clock" />
          {hangout.date}
          <Icon name="marker" />
          {hangout.venue}
        </span>
      </Segment>
      <Segment clearing>
        <div>Description of Hangout</div>
        <p>{hangout.description}</p>
        <Button color="teal" floated="right" content="View" />
      </Segment>
    </Segment.Group>
  );
}
