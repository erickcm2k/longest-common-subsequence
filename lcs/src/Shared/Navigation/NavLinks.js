import React from 'react';
import { ListItem, Button } from '@chakra-ui/react';
const NavLinks = props => {
  return (
    <>
      <ListItem
        color={props.textColor || 'white'}
        pr="5"
        py={props.patop}
        listStyleType="none"
        fontSize={['md', 'md', 'md', 'lg']}
      >
        Acerca de
      </ListItem>
      <Button
        py={props.patop}
        bg="brand.morningGlory"
        color="brand.stratos"
        pr="5"
        fontSize={['md', 'md', 'md', 'lg']}
      >
        Ayuda
      </Button>
    </>
  );
};
export default NavLinks;
