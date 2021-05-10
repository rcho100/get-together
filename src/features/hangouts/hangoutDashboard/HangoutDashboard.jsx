/* eslint-disable react/prop-types */
import React from 'react';
import { Grid } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import HangoutList from './HangoutList';

export default function HangoutDashboard() {
  const hangouts = useSelector(((state) => state.hangouts));

  // coming back to these:
  // const handleCreateHangout = (hangout) => {
  //   setHangouts([...hangouts, hangout]);
  // };

  // const handleUpdateHangout = (updatedHangout) => {
  //   setHangouts(hangouts.map((hangout) => (
  //     hangout.id === updatedHangout.id ? updatedHangout : hangout
  //   )));
  // };

  // const handleDeleteHangout = (hangoutID) => {
  //   setHangouts(hangouts.filter((hangout) => hangout.id !== hangoutID));
  // };

  return (
    <Grid>
      <Grid.Column width={10}>
        <HangoutList
          hangouts={hangouts}
          // deleteHangout={handleDeleteHangout}
        />
      </Grid.Column>
      <Grid.Column width={6}>
        <p>Temp Space</p>
      </Grid.Column>
    </Grid>
  );
}
