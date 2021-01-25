import React from 'react';
import { Flex, Box, Text } from '@chakra-ui/react';

const Subsequence = () => {
    const lcss = `{ "A" , "B" , "C" , "AB" , "AC" , "BC" , "ABC" , "" }`
  return (
      <section className="implementation">
      <Text fontSize={['lg','lg', 'xl', '2xl']} pt='5' textAlign='center' color='brand.regalBlue' fontWeight='bold'>Subsecuencia</Text>
      <Flex flexDir={['column', 'column', 'row', 'row']} textAlign={["center","center","left","left"]}>      
          <Box width={["100%","100%","50%","50%"]} p={['0','0','5','5']}>              
              <Text pt='2'>Digamos que tenemos una cadena “ABC”.</Text>
              <Text pt='2'>Si borramos cero, uno o más caracteres de esta cadena, obtenemos una subsecuencia de esta cadena. </Text>
              <Text pt='2'>Así que las subsecuencias de la cadena ABC serán: {lcss} </Text>
              <Text pt='2'>La cadena vacía también es una subsecuencia.</Text>
              <Text pt='2'>Para averiguar la subsecuencia, para cada carácter de una cadena, tenemos dos opciones: tomamos el carácter o no. </Text>
          </Box>
          <Box width={["100%","100%","50%","50%"]} p={['0','0','5','5']}>                        
              <Text pt='2'>Para nuestra cadena “ABC”, tenemos 2<sup>3</sup> = 8 subsecuencias</Text>
              <Text pt='2'>Entonces, si la longitud de la cadena es n, existen 2<sup>n</sup> subsecuencias de esa cadena.</Text>
              <Text pt='2'>Para nuestra cadena "ABC", la subsecuencia más larga es "ABC"</Text>
              <Text pt='2'><strong>Ejemplo:</strong> Las subsecuencias comunes entre "HELLOM" y "HMLD" son "H" , "HL" , "HM", etc.</Text>
              <Text pt='2'>Aquí "HLL" es la subsecuencia común más larga entre las cadenas "HELLOM" y HMLD.</Text>
          </Box>
      </Flex>
      </section>
  );
};
export default Subsequence;