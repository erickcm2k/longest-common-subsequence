import React from 'react';
import CodeSection from '../Components/CodeSection';
import ImplementationsText from '../Components/ImplementationsText';
import Hero from '../Components/Hero';
import Subsequence from '../Components/Subsequence';
import DescriptionSection from '../Components/DescriptionSection';
import { Container, Button, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <>
      <Container width={['100%', '90%', '90%', '90%']} maxW="90rem">
        <Hero />
        <Flex justifyContent="center" pt='5'>
          <Link to={`/lcs`}>
            <Button bg="brand.morningGlory" width='15rem' color="brand.stratos">
              Comenzar
            </Button>
          </Link>
        </Flex>
        <Subsequence />
        <DescriptionSection />
        <ImplementationsText />
        <CodeSection />
      </Container>
    </>
  );
};

export default Landing;
