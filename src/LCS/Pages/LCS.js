import React from 'react';
import { Container, Button } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import DashBoard from '../Components/Dashboard';
const LCS = () => {
  return (
    <Container pt="3" width="90%" maxW="90rem">
      <Link to={`/`}>
        <Button
          leftIcon={<ArrowBackIcon />}
          bg="brand.morningGlory"
          color="brand.stratos"
        >
          Volver
        </Button>
      </Link>
      <DashBoard />
    </Container>
  );
};

export default LCS;
