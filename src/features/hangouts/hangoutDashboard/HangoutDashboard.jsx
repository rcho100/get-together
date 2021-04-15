import React from 'react';
import { Grid } from 'semantic-ui-react';
import HangoutList from './HangoutList';

export default function HangoutDashboard() {
  return (
    <Grid>
      <Grid.Column width={10}>
        <HangoutList />
      </Grid.Column>
      <Grid.Column width={6}>
        <h2>Right Column</h2>
      </Grid.Column>
    </Grid>
  );
}
