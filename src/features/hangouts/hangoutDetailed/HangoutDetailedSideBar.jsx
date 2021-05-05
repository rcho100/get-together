import React from 'react';
import {
  Segment, Item,
} from 'semantic-ui-react';

export default function HangoutDetailedSideBar() {
  return (
    <>
      <Segment
        textAlign="center"
        style={{ border: 'none' }}
        attached
        inverted
        color="teal"
      >
        No. of People Going
      </Segment>
      <Segment attached>
        <Item.Group relaxed divided>
          <Item>
            <Item.Image size="tiny" circular src="/assets/defaultUserImage.png" />
            <Item.Content verticalAlign="middle">
              <Item.Header>
                <span>Attendee Name</span>
              </Item.Header>
            </Item.Content>
          </Item>
          <Item>
            <Item.Image size="tiny" circular src="/assets/defaultUserImage.png" />
            <Item.Content verticalAlign="middle">
              <Item.Header>
                Attendee Name
              </Item.Header>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
    </>
  );
}
