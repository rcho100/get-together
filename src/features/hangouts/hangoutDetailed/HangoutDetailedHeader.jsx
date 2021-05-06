import React from 'react';
import {
  Segment, Item, Header, Button,
} from 'semantic-ui-react';

export default function HangoutDetailedHeader() {
  return (
    <Segment.Group>
      <Segment>
        <Item>
          <Item.Content>
            <Header size="huge" content="Hangout Title" />
            <p>Hangout Date</p>
            <p>
              Hosted by
              {' '}
              <strong>Host Name</strong>
            </p>
          </Item.Content>
        </Item>
      </Segment>

      <Segment>
        <Button>Cancel</Button>
        <Button color="teal">JOIN THIS HANGOUT</Button>
        <Button color="orange" floated="right">
          Manage Hangout
        </Button>
      </Segment>
    </Segment.Group>

  );
}
