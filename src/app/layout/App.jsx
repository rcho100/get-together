import React, { useState } from 'react';
import { Container } from 'semantic-ui-react';
import HangoutDashboard from '../../features/hangouts/hangoutDashboard/HangoutDashboard';
import Navbar from '../../features/nav/NavBar';

export default function App() {
  const [formDisplayed, setFormDisplayed] = useState(false);

  return (
    <>
      <Navbar setFormDisplayed={setFormDisplayed} />
      <Container className="main">
        <HangoutDashboard formDisplayed={formDisplayed} setFormDisplayed={setFormDisplayed} />
      </Container>
    </>
  );
}
