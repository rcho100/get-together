/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Button, Container, Menu } from 'semantic-ui-react';
import SignedInMenu from './SignedInMenu';
import SignedOutMenu from './SignedOutMenu';

export default function Navbar() {
  const { authenticated } = useSelector((state) => state.authReducer);

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
            ? (<SignedInMenu />)
            : (<SignedOutMenu />)}
        </Container>
      </Menu>
    </>
  );
}
