import React from 'react';
import { Flex, Box, Text } from '@chakra-ui/react';

const DescriptionSection = () => {
  return (
      <section className="implementation">
      <Text fontSize={['lg','lg', 'xl', '2xl']} pt='5' textAlign='center' color='brand.regalBlue' fontWeight='bold'>Métodos de resolución</Text>
      <Flex flexDir={['column', 'column', 'row', 'row']} textAlign={["center","center","left","left"]}>      
          <Box width={["100%","100%","50%","50%"]} p={['0','0','5','5']}>              
            <Text fontSize={['lg','lg', 'xl', '2xl']} textAlign='center' pt={['2','2','0','0']} color='brand.regalBlue' fontWeight='bold'>Bottom Up</Text>
            <Text pt='2'>Para el modelo Bottom-Up, llenaremos nuestro arreglo bidimensional de forma iterativa.</Text>
            <Text pt='2'>Siguiendo este modelo, tendremos que calcular todas las posibles subsecuencias.</Text>
            <Text pt='2'>Siguiendo esta forma, la complejidad del algoritmo siempre será O(mn).</Text>
            
             {/*
            <Text pt='2'>Después tendremos que averiguar el que tiene la longitud máxima.</Text>
            <Text pt='2'>Ya hemos visto que hay 2^n subsecuencias de una cadena de longitud n . Tomaría años resolver el problema si nuestra n cruza 20-25 .</Text> */}
            
            {/* <Text pt='2'></Text> */}
          </Box>
          <Box width={["100%","100%","50%","50%"]} p={['0','0','5','5']}>   
              <Text fontSize={['lg','lg', 'xl', '2xl']} textAlign='center' pt={['2','2','0','0']} color='brand.regalBlue' fontWeight='bold'>Top Down</Text>                     
              <Text pt='2'>El modelo Top-Down surge como una optimización de la forma recursiva tradicional (fuerza bruta).</Text>
              <Text pt='2'>Lo que haremos será almacenar los cálculos que vayamos haciendo, para evitar tener que calcularnos nuevamente con cada ejecución del algoritmo recursivo. Esta técnica se conoce como memoización.</Text>              
              <Text pt='2'>Al evitar la repetición de cálculos, la complejidad de nuestro algoritmo decrece radicalmente. Pasando de una complejidad O(2<sup>n</sup>) a una complejidad O(mn).</Text>
          </Box>
      </Flex>
      </section>
  );
};
export default DescriptionSection;