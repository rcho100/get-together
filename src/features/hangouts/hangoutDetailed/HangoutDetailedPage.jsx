import React from 'react';
import { Grid } from 'semantic-ui-react';
import HangoutDetailedHeader from './HangoutDetailedHeader';
import HangoutDetailedInfo from './HangoutDetailedInfo';
import HangoutDetailedSideBar from './HangoutDetailedSideBar';

export default function HangoutDetailedPage() {
  return (
    <Grid>
      <Grid.Column width={10}>
        <HangoutDetailedHeader />
        <HangoutDetailedInfo />
      </Grid.Column>
      <Grid.Column width={6}>
        <HangoutDetailedSideBar />
      </Grid.Column>
    </Grid>
  );
}
