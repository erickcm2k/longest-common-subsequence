import React from 'react';
import { Container, Text, Button } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import InputReaders from '../Components/InputReaders';

const LCS = () => {
  return (
    <Container mt="3" width="90%" maxW={'90rem'}>
      <Link to={`/`}>
        <Button
          leftIcon={<ArrowBackIcon />}
          bg="brand.morningGlory"
          color="brand.stratos"
        >
          Volver
        </Button>
      </Link>
      <Text
        color="brand.stratos"
        fontSize={['xl', 'xl', '3xl', '4xl']}
        fontWeight="bold"
        textAlign="center"
      >
        Usando Programación Dinámica
      </Text>
      <Button bg="brand.stratos" color="white">
        Cambiar a recursividad
      </Button>
      <InputReaders />
    </Container>
  );
};

export default LCS;
