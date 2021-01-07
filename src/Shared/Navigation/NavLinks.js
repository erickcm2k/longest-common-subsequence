import React from 'react';
import { Button } from '@chakra-ui/react';
import { QuestionIcon } from '@chakra-ui/icons';
const NavLinks = props => {
  return (
    <>
      <Button py="3" mx="2" color={props.textColor || 'white'} variant="link">
        Acerca de
      </Button>
      <Button
        py="3"
        mx="2"
        rightIcon={<QuestionIcon />}
        color={props.textColor || 'white'}
        variant="link"
      >
        Ayuda
      </Button>
    </>
  );
};
export default NavLinks;
