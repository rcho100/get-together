/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Container } from 'semantic-ui-react';
import HangoutDashboard from '../../features/hangouts/hangoutDashboard/HangoutDashboard';
import Navbar from '../../features/nav/NavBar';

export default function App() {
  const [formDisplayed, setFormDisplayed] = useState(false);
  const [selectedHangout, setSelectedHangout] = useState(null);

  const handleCreateFormDisplayed = () => {
    setSelectedHangout(null);
    setFormDisplayed(true);
  };

  return (
    <>
      <Navbar handleCreateFormDisplayed={handleCreateFormDisplayed} />
      <Container className="main">
        <HangoutDashboard
          formDisplayed={formDisplayed}
          setFormDisplayed={setFormDisplayed}
        />
      </Container>
    </>
  );
}
