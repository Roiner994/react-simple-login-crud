import React from 'react';
import {Nav} from 'react-bootstrap';

const NavLinks = ({isAuthenticated, authLinks, guestLinks}) => {
  return (
    <Nav>
      {isAuthenticated ? authLinks : guestLinks}
    </Nav>
  );
};

export default NavLinks;