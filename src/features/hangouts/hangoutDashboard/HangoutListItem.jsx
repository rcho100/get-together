import React from 'react';
import { Item, Segment } from 'semantic-ui-react';

export default function HangoutListItem() {
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Content>
              <Item.Header content="Hangout Title" />
              <Item.Description>
                Hosted by Rich
              </Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
    </Segment.Group>
  );
}
