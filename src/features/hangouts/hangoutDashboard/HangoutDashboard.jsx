/* eslint-disable react/prop-types */
import React from 'react';
import { Grid } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import HangoutList from './HangoutList';

export default function HangoutDashboard() {
  const hangouts = useSelector(((state) => state.hangoutReducer.hangouts));

  return (
    <Grid>
      <Grid.Column width={10}>
        <HangoutList hangouts={hangouts} />
      </Grid.Column>
      <Grid.Column width={6}>
        <p>Temp Space</p>
      </Grid.Column>
    </Grid>
  );
}
