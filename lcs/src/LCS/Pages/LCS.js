import React, { useState } from 'react';
import lcsAlgorithm from '../../Utils/lcsAlgorithm';
import { Button, Text, Box } from '@chakra-ui/react';

const LCS = () => {
  const X = 'AGGTAB';
  const Y = 'GXTXAYB';
  const m = X.length;
  const n = Y.length;
  const [lcs, setlcs] = useState('');

  const calcLCS = () => {
    setlcs(lcsAlgorithm(X, Y, m, n));
  };

  return (
    <>
      <div style={{ margin: '0 auto', textAlign: 'center' }}>
        <h1>Soy el componente LCS</h1>
        <h1 style={{ fontFamily: 'Quicksand, sans-serif', fontWeight: 'bold' }}>
          Soy el componente LCS
        </h1>
        <p>Cadena 1 = {X}</p>
        <p> Cadena 2 = {Y}</p>
        <p>{lcs}</p>
        <Button
          bg="brand.bondiBlue"
          color="white"
          _hover={{ bg: 'brand.stratos' }}
          _after={{ bg: 'brand.bondiBlue' }}
          onClick={calcLCS}
        >
          Calcular LCS
        </Button>
      </div>
    </>
  );
};

export default LCS;
