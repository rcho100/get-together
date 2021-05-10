/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import HangoutDetailedHeader from './HangoutDetailedHeader';
import HangoutDetailedInfo from './HangoutDetailedInfo';
import HangoutDetailedSideBar from './HangoutDetailedSideBar';

export default function HangoutDetailedPage({ match }) {
  const selectedHangout = useSelector((state) => (
    state.hangouts.find((hangout) => hangout.id === match.params.id)
  ));
  return (
    <Grid>
      <Grid.Column width={10}>
        <HangoutDetailedHeader selectedHangout={selectedHangout} />
        <HangoutDetailedInfo selectedHangout={selectedHangout} />
      </Grid.Column>
      <Grid.Column width={6}>
        <HangoutDetailedSideBar />
      </Grid.Column>
    </Grid>
  );
}
