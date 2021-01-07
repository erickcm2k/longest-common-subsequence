import React from 'react';
import CodeSection from '../Components/CodeSection';
import ImplementationsText from '../Components/ImplementationsText';
import { Link } from 'react-router-dom';
import { Button, Container } from '@chakra-ui/react';
const Landing = () => {
  return (
    <>
      <Container width="90%" maxW="90rem">
        <Link to={`/lcs`}>
          <Button bg="brand.morningGlory" color="brand.stratos">
            Comenzar
          </Button>
        </Link>
        <ImplementationsText />
        <CodeSection />
      </Container>
    </>
  );
};

export default Landing;
