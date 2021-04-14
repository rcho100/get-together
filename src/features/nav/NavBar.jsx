import React from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';

function Navbar() {
  return (
    <>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item header>
            Get Together
          </Menu.Item>
          <Menu.Item>
            Get Togethers
          </Menu.Item>
          <Menu.Item>
            <Button positive inverted content="Create a Get Together" />
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

export default Navbar;
