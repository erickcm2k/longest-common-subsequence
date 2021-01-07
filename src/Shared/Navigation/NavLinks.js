import React from 'react';
import { ListItem, Button } from '@chakra-ui/react';
import { QuestionIcon } from '@chakra-ui/icons';
const NavLinks = props => {
  return (
    <>
      <ListItem
        my="2"
        mx="2"
        color={props.textColor || 'white'}
        listStyleType="none"
      >
        Acerca de
      </ListItem>
      <Button
        my="2"
        mx="2"
        rightIcon={<QuestionIcon />}
        bg="brand.morningGlory"
        color="brand.stratos"
      >
        Ayuda
      </Button>
    </>
  );
};
export default NavLinks;
