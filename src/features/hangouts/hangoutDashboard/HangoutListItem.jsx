import React from 'react';
import {
  Button, Icon, Item, List, Segment,
} from 'semantic-ui-react';
import HangoutListAttendee from './HangoutListAttendee';

export default function HangoutListItem() {
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size="tiny" circular src="/assets/defaultUserImage.png" />
            <Item.Content>
              <Item.Header content="Hangout Title" />
              <Item.Description>
                Hosted by Rich
              </Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment secondary>
        <List horizontal>
          <HangoutListAttendee />
          <HangoutListAttendee />
          <HangoutListAttendee />
        </List>
      </Segment>
      <Segment>
        <span>
          <Icon name="clock" />
          {' '}
          Date
          <Icon name="marker" />
          {' '}
          Location
        </span>
      </Segment>
      <Segment clearing>
        <div>Description of Hangout</div>
        <Button color="teal" floated="right" content="View" />
      </Segment>
    </Segment.Group>
  );
}
