import React from 'react';
import { Flex, List, ListItem, Box, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Flex
      minH="30vh"
      width="100%"
      backgroundColor="brand.regalBlue"
      flexDir="row"
      justify="space-evenly"
      align="center"
    >
      <Box alignSelf="center">
        <Text
          pb="1rem"
          fontWeight="bold"
          fontSize={['1rem', '1.2rem', '1.5rem', '1.5rem']}
          color="white"
        >
          Diseño y desarrollo
        </Text>
        <List styleType="disc">
          <ListItem color="white">Erick Castañeda Martínez</ListItem>
        </List>
      </Box>
    </Flex>
  );
};

export default Footer;
