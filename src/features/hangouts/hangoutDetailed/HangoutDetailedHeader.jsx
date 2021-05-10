/* eslint-disable react/prop-types */
import React from 'react';
import {
  Segment, Item, Header, Button,
} from 'semantic-ui-react';

export default function HangoutDetailedHeader({ selectedHangout }) {
  return (
    <Segment.Group>
      <Segment>
        <Item>
          <Item.Content>
            <Header size="huge" content={selectedHangout.title} />
            <p>{`Date: ${selectedHangout.date}`}</p>
            <p>
              Hosted by
              <strong>{` ${selectedHangout.hostedBy}`}</strong>
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
