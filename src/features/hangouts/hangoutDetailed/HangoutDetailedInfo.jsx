/* eslint-disable react/prop-types */
import React from 'react';
import {
  Segment, Grid, Icon,
} from 'semantic-ui-react';

export default function HangoutDetailedInfo({ selectedHangout }) {
  return (
    <Segment.Group>
      <Segment>
        <Grid verticalAlign="middle">
          <Grid.Column width={1}>
            <Icon size="large" color="teal" name="info" />
          </Grid.Column>
          <Grid.Column width={15}>
            <p>{`${selectedHangout.description}`}</p>
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment>
        <Grid verticalAlign="middle">
          <Grid.Column width={1}>
            <Icon name="calendar" size="large" color="teal" />
          </Grid.Column>
          <Grid.Column width={15}>
            <span>{`Date: ${selectedHangout.date}`}</span>
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment>
        <Grid verticalAlign="middle">
          <Grid.Column width={1}>
            <Icon name="marker" size="large" color="teal" />
          </Grid.Column>
          <Grid.Column width={15}>
            <span>{`Venue: ${selectedHangout.venue}`}</span>
          </Grid.Column>
        </Grid>
      </Segment>
    </Segment.Group>
  );
}
