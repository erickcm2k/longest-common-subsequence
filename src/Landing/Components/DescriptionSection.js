import React from 'react';
import { Flex, Box, Text } from '@chakra-ui/react';

const DescriptionSection = () => {
  return (
      <section className="implementation">
      <Text fontSize={['lg','lg', 'xl', '2xl']} pt='5' textAlign='center' color='brand.regalBlue' fontWeight='bold'>Métodos de resolución</Text>
      <Flex flexDir={['column', 'column', 'row', 'row']} textAlign={["center","center","left","left"]}>      
          <Box width={["100%","100%","50%","50%"]} p={['0','0','5','5']}>              
            <Text fontSize={['lg','lg', 'xl', '2xl']} textAlign='center' pt={['2','2','0','0']} color='brand.regalBlue' fontWeight='bold'>Bottom Up</Text>
            <Text pt='2'>Podemos generar todas las subsecuencias de dos cadenas usando recursividad. </Text>
            <Text pt='2'>Luego podemos compararlos para descubrir las subsecuencias comunes.</Text>
            <Text pt='2'>Después tendremos que averiguar el que tiene la longitud máxima.</Text>
            <Text pt='2'>Ya hemos visto que hay 2^n subsecuencias de una cadena de longitud n . Tomaría años resolver el problema si nuestra n cruza 20-25 .</Text>
            {/* <Text pt='2'></Text> */}
          </Box>
          <Box width={["100%","100%","50%","50%"]} p={['0','0','5','5']}>   
              <Text fontSize={['lg','lg', 'xl', '2xl']} textAlign='center' pt={['2','2','0','0']} color='brand.regalBlue' fontWeight='bold'>Top Down</Text>                     
              <Text pt='2'>Para nuestra cadena “ABC”, tenemos 2<sup>3</sup> = 8 subsecuencias</Text>
              <Text pt='2'>Entonces, si la longitud de la cadena es n, existen 2<sup>n</sup> subsecuencias de esa cadena.</Text>
              <Text pt='2'>Para nuestra cadena "ABC", la subsecuencia más larga es "ABC"</Text>
              <Text pt='2'>Las subsecuencias comunes entre "HELLOM" y "HMLD" son "H" , "HL" , "HM", etc.</Text>
              <Text pt='2'>Aquí "HLL" es la subsecuencia común más larga que tiene la longitud 3.</Text>
          </Box>
      </Flex>
      </section>
  );
};
export default DescriptionSection;