/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Container, Menu } from 'semantic-ui-react';

export default function Navbar({ handleCreateFormDisplayed }) {
  return (
    <>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item as={NavLink} exact to="/" header>
            Hangout
          </Menu.Item>
          <Menu.Item as={NavLink} to="/hangouts">
            Hangouts
          </Menu.Item>
          <Menu.Item as={NavLink} to="/createHangout">
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
