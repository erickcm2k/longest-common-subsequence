import React from 'react';
import { Button, Link } from '@chakra-ui/react';
import { QuestionIcon } from '@chakra-ui/icons';
import userManual from '../../Assets/pdf/manual-lcs.pdf';
const NavLinks = props => {
  return (
    <>
      <Link
        href="https://github.com/erickcm2k/longest-common-subsequence"
        target="_blank"
      >
        <Button py="3" mx="2" color={props.textColor || 'white'} variant="link">
          Acerca de
        </Button>
      </Link>
      <Button
        py="3"
        mx="2"
        rightIcon={<QuestionIcon />}
        color={props.textColor || 'white'}
        variant="link"
        onClick={() => window.open(userManual)}
      >
        Ayuda
      </Button>
    </>
  );
};
export default NavLinks;
