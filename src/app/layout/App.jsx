/* eslint-disable no-unused-vars */
import React from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import HangoutDashboard from '../../features/hangouts/hangoutDashboard/HangoutDashboard';
import HangoutDetailedPage from '../../features/hangouts/hangoutDetailed/HangoutDetailedPage';
import HangoutForm from '../../features/hangouts/hangoutForm/HangoutForm';
import Homepage from '../../features/home/Homepage';
import Navbar from '../../features/nav/NavBar';

export default function App() {
  return (
    <>
      <Route exact path="/" component={Homepage} />
      {/* Using regex - any route with / and something else will render the following */}
      {/* Using this to remove navbar from homepage */}
      <Route
        path="/(.+)"
        render={() => (
          <>
            <Navbar />
            <Container className="main">
              <Route exact path="/hangouts" component={HangoutDashboard} />
              <Route path="/hangouts/:id" component={HangoutDetailedPage} />
              <Route path="/createHangout" component={HangoutForm} />
            </Container>
          </>
        )}
      />

    </>
  );
}
