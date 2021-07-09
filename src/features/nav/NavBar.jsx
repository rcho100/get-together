/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Button, Container, Menu } from 'semantic-ui-react';
import SignedInMenu from './SignedInMenu';
import SignedOutMenu from './SignedOutMenu';

export default function Navbar() {
  const [authenticated, setAuthenticated] = useState(false);
  const history = useHistory();

  const handleSignOut = () => {
    setAuthenticated(false);
    history.push('/');
  };

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
          <Menu.Item as={NavLink} to="/sandbox">
            Sandbox
          </Menu.Item>
          {authenticated && (
            <Menu.Item as={NavLink} to="/createHangout">
              <Button positive inverted content="Create a Hangout" />
            </Menu.Item>
          )}
          {authenticated
            ? (<SignedInMenu signOut={handleSignOut} />)
            : (<SignedOutMenu setAuthenticated={setAuthenticated} />)}
        </Container>
      </Menu>
    </>
  );
}
