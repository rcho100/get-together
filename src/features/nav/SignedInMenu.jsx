/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Image, Dropdown } from 'semantic-ui-react';

export default function SignedInMenu({ signOut }) {
  return (
    <Menu.Item position="right">
      <Image avatar spaced="right" src="/assets/defaultUserImage.png" />
      <Dropdown pointing="top left" text="Rich">
        <Dropdown.Menu>
          <Dropdown.Item as={Link} to="/createHangout" text="Create Hangout" icon="plus" />
          <Dropdown.Item text="My profile" icon="user" />
          <Dropdown.Item onClick={signOut} text="Sign out" icon="power" />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
}
