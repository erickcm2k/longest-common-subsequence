import React from 'react';

import Navbar from './Navbar';
import NavLinks from './NavLinks';
import {
  UnorderedList,
  ListItem,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  IconButton,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

import { useDisclosure } from '@chakra-ui/react';
import useWindowSize from '../../Hooks/useWindowSize';
const MainNavigation = () => {
  const windowSize = useWindowSize();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <Navbar>
      <UnorderedList
        display="flex"
        flexDirection="row"
        alignItems="center"
        height="4rem"
      >
        <ListItem
          color="white"
          flex="1"
          listStyleType="none"
          fontWeight="bold"
          fontSize={['sm', 'xl', 'xl', 'xl']}
        >
          Subsecuencia Común Más Larga
        </ListItem>

        {windowSize.width > 768 ? (
          <NavLinks />
        ) : (
          <>
            <IconButton
              icon={<HamburgerIcon />}
              bg="brand.morningGlory"
              color="brand.stratos"
              ref={btnRef}
              onClick={onOpen}
            >
              Open
            </IconButton>
            <Drawer
              isOpen={isOpen}
              placement="right"
              onClose={onClose}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay>
                <DrawerContent>
                  <DrawerCloseButton />
                  <DrawerHeader></DrawerHeader>

                  <DrawerBody>
                    <UnorderedList
                      display="flex"
                      flexDirection="column"
                      justifyContent="flex-start"
                      height="100%"
                    >
                      <NavLinks textColor="brand.stratos" />
                    </UnorderedList>
                  </DrawerBody>
                </DrawerContent>
              </DrawerOverlay>
            </Drawer>
          </>
        )}
      </UnorderedList>
    </Navbar>
  );
};
export default MainNavigation;
