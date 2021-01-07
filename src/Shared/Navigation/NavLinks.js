import React from 'react';
import { ListItem, Button } from '@chakra-ui/react';
import { QuestionIcon } from '@chakra-ui/icons';
const NavLinks = props => {
  return (
    <>
      <Button
        my="2"
        mx="2"
        rightIcon={<QuestionIcon />}
        bg="brand.morningGlory"
        color="brand.stratos"
      >
        Ayuda
      </Button>
      <ListItem
        my="2"
        mx="2"
        color={props.textColor || 'white'}
        listStyleType="none"
      >
        Acerca de
      </ListItem>
    </>
  );
};
export default NavLinks;
