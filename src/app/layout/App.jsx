import React from 'react';
import { Container } from 'semantic-ui-react';
import HangoutDashboard from '../../features/hangouts/hangoutDashboard/HangoutDashboard';
import Navbar from '../../features/nav/NavBar';

function App() {
  return (
    <>
      <Navbar />
      <Container className="main">
        <HangoutDashboard />
      </Container>
    </>
  );
}

export default App;
