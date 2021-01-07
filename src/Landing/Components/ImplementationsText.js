import React from 'react';
import { Flex, Box, Image, Text } from '@chakra-ui/react';
import codingSVG from '../../Assets/svg/coding.svg';

const ImplementationsText = () => {
  return (
      <section className="implementation">
      <Flex flexDir={['column', 'column', 'column', 'row']} py={["1","2","3","5"]}>
          <Box alignSelf={['inherit','inherit','inherit','center']}>
              <Text fontSize={['lg','lg', 'xl', '2xl']} color='brand.regalBlue' fontWeight='bold'>Implementaciones en C++</Text>
          </Box>
          <Box>
        <Image src={codingSVG}></Image>
          </Box>
      </Flex>
      </section>
  );
};
export default ImplementationsText;