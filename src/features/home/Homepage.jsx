/* eslint-disable react/prop-types */
import React from 'react';
import {
  Button, Container, Header, Icon, Segment,
} from 'semantic-ui-react';

export default function Homepage({ history }) {
  return (
    <Segment className="homepage" textAlign="center" vertical inverted>
      <Container>
        <Header as="h1" inverted>
          Hangout
        </Header>
        <Button onClick={() => history.push('/hangouts')} size="huge" inverted>
          See what&apos;s going on
          <Icon name="right arrow" inverted />
        </Button>
      </Container>
    </Segment>
  );
}
