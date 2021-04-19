import React from 'react';
import { Grid } from 'semantic-ui-react';
import HangoutForm from '../hangoutForm/HangoutForm';
import HangoutList from './HangoutList';
import { sampleData } from '../../../app/api/sampleData';

export default function HangoutDashboard() {
  return (
    <Grid>
      <Grid.Column width={10}>
        <HangoutList hangouts={sampleData} />
      </Grid.Column>
      <Grid.Column width={6}>
        <HangoutForm />
      </Grid.Column>
    </Grid>
  );
}
