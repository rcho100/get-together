/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Grid } from 'semantic-ui-react';
import HangoutForm from '../hangoutForm/HangoutForm';
import HangoutList from './HangoutList';
import { sampleData } from '../../../app/api/sampleData';

export default function HangoutDashboard({
  formDisplayed, setFormDisplayed, selectHangout, selectedHangout,
}) {
  const [hangouts, setHangouts] = useState(sampleData);

  const handleCreateHangout = (hangout) => {
    setHangouts([...hangouts, hangout]);
  };

  const handleUpdateHangout = (updatedHangout) => {
    setHangouts(hangouts.map((hangout) => (
      hangout.id === updatedHangout.id ? updatedHangout : hangout
    )));
    selectHangout(null);
  };

  const handleDeleteHangout = (hangoutID) => {
    setHangouts(hangouts.filter((hangout) => hangout.id !== hangoutID));
  };

  return (
    <Grid>
      <Grid.Column width={10}>
        <HangoutList
          hangouts={hangouts}
          selectHangout={selectHangout}
          deleteHangout={handleDeleteHangout}
        />
      </Grid.Column>
      <Grid.Column width={6}>
        {formDisplayed
        && (
        <HangoutForm
          key={selectedHangout ? selectedHangout.id : null}
          setFormDisplayed={setFormDisplayed}
          createHangout={handleCreateHangout}
          selectedHangout={selectedHangout}
          updateHangout={handleUpdateHangout}
        />
        )}
      </Grid.Column>
    </Grid>
  );
}
