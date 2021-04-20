/* eslint-disable react/prop-types */
import React from 'react';
import { Grid } from 'semantic-ui-react';
import HangoutForm from '../hangoutForm/HangoutForm';
import HangoutList from './HangoutList';
import { sampleData } from '../../../app/api/sampleData';

export default function HangoutDashboard({ formDisplayed, setFormDisplayed }) {
  return (
    <Grid>
      <Grid.Column width={10}>
        <HangoutList hangouts={sampleData} />
      </Grid.Column>
      <Grid.Column width={6}>
        {formDisplayed
        && <HangoutForm setFormDisplayed={setFormDisplayed} />}
      </Grid.Column>
    </Grid>
  );
}
