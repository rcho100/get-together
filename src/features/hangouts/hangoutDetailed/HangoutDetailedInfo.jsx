import React from 'react';
import {
  Segment, Grid, Icon,
} from 'semantic-ui-react';

export default function HangoutDetailedInfo() {
  return (
    <Segment.Group>
      <Segment>
        <Grid verticalAlign="middle">
          <Grid.Column>
            <Icon size="large" color="teal" name="info" />
          </Grid.Column>
          <Grid.Column>
            <p>Hangout Description</p>
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment>
        <Grid verticalAlign="middle">
          <Grid.Column>
            <Icon name="calendar" size="large" color="teal" />
          </Grid.Column>
          <Grid.Column>
            <span>Hangout Date</span>
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment>
        <Grid verticalAlign="middle">
          <Grid.Column>
            <Icon name="marker" size="large" color="teal" />
          </Grid.Column>
          <Grid.Column>
            <span>Hangout Venue</span>
          </Grid.Column>
        </Grid>
      </Segment>
    </Segment.Group>
  );
}
