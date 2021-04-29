/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import HangoutDashboard from '../../features/hangouts/hangoutDashboard/HangoutDashboard';
import HangoutDetailedPage from '../../features/hangouts/hangoutDetailed/HangoutDetailedPage';
import HangoutForm from '../../features/hangouts/hangoutForm/HangoutForm';
import Homepage from '../../features/home/Homepage';
import Navbar from '../../features/nav/NavBar';

export default function App() {
  const [formDisplayed, setFormDisplayed] = useState(false);
  const [selectedHangout, setSelectedHangout] = useState(null);

  const handleSelectHangout = (hangout) => {
    setSelectedHangout(hangout);
    setFormDisplayed(true);
  };

  const handleCreateFormDisplayed = () => {
    setSelectedHangout(null);
    setFormDisplayed(true);
  };

  return (
    <>
      <Navbar handleCreateFormDisplayed={handleCreateFormDisplayed} />
      <Container className="main">
        <Route exact path="/" component={Homepage} />
        <Route exact path="/hangouts" component={HangoutDashboard} />
        <Route path="/hangouts/:id" component={HangoutDetailedPage} />
        <Route path="/createHangout" component={HangoutForm} />
      </Container>
    </>
  );
}
