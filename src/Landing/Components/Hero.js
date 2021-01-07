import React from 'react';
import { Flex, Box, Image, Text } from '@chakra-ui/react';
import thinkingSVG from '../../Assets/svg/thinking.svg';

const Hero = () => {
  return (
      <section className="implementation">
      <Flex flexDir={['column', 'column', 'column', 'row']} pt="6">
          <Box alignSelf={['inherit','inherit','inherit','center']}>
              <Text fontSize={['lg','lg', 'xl', '2xl']} color='brand.regalBlue' fontWeight='bold'>¿Qué es la subsecuencia común más larga?</Text>
              <Text pt="2">Como el nombre sugiere, la subsecuencia común más larga (LCS, por sus siglas en inglés) es la subsecuencia de mayor longitud entre dos cadenas. </Text>
              <Text>Necesitamos definir qué es una <strong>subsecuencia.</strong></Text>
          </Box>
          <Box maxW="sm" alignSelf='center'>
        <Image src={thinkingSVG}></Image>
          </Box>
      </Flex>
      </section>
  );
};
export default Hero;