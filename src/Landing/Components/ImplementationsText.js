import React from 'react';
import { Flex, Box, Image, Text } from '@chakra-ui/react';
import codingSVG from '../../Assets/svg/coding.svg';

const ImplementationsText = () => {
  return (
    <section className="implementation">
      <Flex
        flexDir={['column', 'column', 'column', 'row']}
        pt="5"
        justifyContent="space-evenly"
      >
        <Box
          alignSelf={['inherit', 'inherit', 'inherit', 'center']}
          py={['4', '4', '4', '0']}
        >
          <Text
            fontSize={['lg', 'lg', 'xl', '2xl']}
            color="brand.regalBlue"
            fontWeight="bold"
          >
            Implementaciones en C++
          </Text>
        </Box>
        <Box
          maxW={['sm', 'sm', 'lg', '3xl']}
          alignSelf={['center', 'center', 'flex-end', 'flex-end']}
        >
          <Image src={codingSVG}></Image>
        </Box>
      </Flex>
    </section>
  );
};
export default ImplementationsText;
