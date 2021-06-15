/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button, Icon, Item, List, Segment,
} from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { format } from 'date-fns';
import HangoutListAttendee from './HangoutListAttendee';
import { deleteHangout } from '../hangoutActions';

export default function HangoutListItem({ hangout }) {
  const dispatch = useDispatch();

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
            <HangoutListAttendee key={attendee.id} attendee={attendee} />
          ))}
        </List>
      </Segment>
      <Segment>
        <span>
          <Icon name="clock" />
          {format(hangout.date, 'MMMM d, yyyy h:mm a')}
          <Icon name="marker" />
          {hangout.venue}
        </span>
      </Segment>
      <Segment clearing>
        <div>Description of Hangout</div>
        <p>{hangout.description}</p>
        <Button
          onClick={() => dispatch(deleteHangout(hangout.id))}
          color="red"
          floated="right"
          content="Delete"
        />
        <Button as={Link} to={`/hangouts/${hangout.id}`} color="teal" floated="right" content="View" />
      </Segment>
    </Segment.Group>
  );
}
