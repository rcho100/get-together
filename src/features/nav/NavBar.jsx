/* eslint-disable react/prop-types */
import React from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';

export default function Navbar({ handleCreateFormDisplayed }) {
  return (
    <>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item header>
            Hangout
          </Menu.Item>
          <Menu.Item>
            Hangouts
          </Menu.Item>
          <Menu.Item>
            <Button onClick={handleCreateFormDisplayed} positive inverted content="Create a Hangout" />
          </Menu.Item>
          <Menu.Item position="right">
            <Button basic inverted content="Login" />
            <Button basic inverted content="Sign Up" style={{ marginLeft: '0.5em' }} />
          </Menu.Item>
        </Container>
      </Menu>
    </>
  );
}
