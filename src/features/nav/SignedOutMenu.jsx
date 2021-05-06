/* eslint-disable react/prop-types */
import React from 'react';
import { Button, Menu } from 'semantic-ui-react';

export default function SignedOutMenu({ setAuthenticated }) {
  return (
    <Menu.Item position="right">
      <Button onClick={() => setAuthenticated(true)} basic inverted content="Login" />
      <Button basic inverted content="Sign Up" style={{ marginLeft: '0.5em' }} />
    </Menu.Item>
  );
}
