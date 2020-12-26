import React from 'react';
import { Container } from '@chakra-ui/react';

const Navbar = props => {
  return (
    <Container bg="brand.regalBlue" maxW="100%">
      {props.children}
    </Container>
  );
};

export default Navbar;
