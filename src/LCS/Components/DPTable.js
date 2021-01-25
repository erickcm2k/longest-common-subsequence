import React, { useState } from 'react';
import {
  Container,
  Button,
  Stack,
  useToast,
  Box,
  Flex,
} from '@chakra-ui/react';

import Table from './Table';
import DPCode from './DPCode';
import { sleep } from '../../Utils/sleep';
// Method: Bottom-Up
// Table fill: Top-Down

const DPTable = ({
  S1,
  S2,
  isLoading,
  setIsLoading,
  speed,
  setLongestCommonSubsequence,
  longestCommonSubsequence,
}) => {
  const toast = useToast();
  const refreshPage = () => {
    window.location.reload();
  };
  const [table, setTable] = useState();

  const [currentCodeLine, setCurrentCodeLine] = useState(0);

  // Auxiliary function for dPTableOperations
  const fillTable = (X, Y, auxDPTable, dpTable) => {
    // Create columns
    for (let i = 0; i < X.length + 2; i++) {
      auxDPTable.push([]);
    }
    // Fill first row
    auxDPTable[0][0] = { value: '*', isCurrent: false, arrowDir: '' };
    auxDPTable[0][1] = { value: '*', isCurrent: false, arrowDir: '' };
    auxDPTable[1][0] = { value: '*', isCurrent: false, arrowDir: '' };

    for (let i = 2; i < Y.length + 2; i++) {
      auxDPTable[0][i] = {
        value: Y[i - 2],
        isCurrent: false,
        arrowDir: '',
      };
    }

    // // Fill first column
    for (let i = 2; i < X.length + 2; i++) {
      auxDPTable[i][0] = {
        value: X[i - 2],
        isCurrent: false,
        arrowDir: '',
      };
    }

    // Fill with empty spaces.
    for (let i = 1; i < Y.length + 2; i++) {
      for (let j = 1; j < X.length + 2; j++) {
        auxDPTable[j][i] = { value: '', isCurrent: false, arrowDir: '' };
      }
    }
    setTable([...auxDPTable]);

    for (let i = 0; i < X.length + 1; i++) {
      dpTable.push([]);
    }
  };

  // Auxiliary function for dPTableOperations
  const lcs = async (X, m, Y, n, L, auxDPTable) => {
    for (let i = 0; i <= m; i++) {
      setCurrentCodeLine(1);
      await sleep(150 * (speed / 50));

      for (let j = 0; j <= n; j++) {
        setCurrentCodeLine(2);
        await sleep(150 * (speed / 50));
        // Just for setting arrow direction
        if (i === 0 || j === 0) {
          setCurrentCodeLine(3);
          await sleep(150 * (speed / 50));
          setCurrentCodeLine(4);

          L[i][j] = 0;
          auxDPTable[i + 1][j + 1] = {
            value: 0,
            isCurrent: true,
          };
        } else if (X[i - 1] === Y[j - 1]) {
          setCurrentCodeLine(5);
          await sleep(150 * (speed / 50));
          setCurrentCodeLine(6);
          // Animate comparison
          // auxDPTable[i][j + 1].isBeingCompared = true;
          // auxDPTable[i + 1][j].isBeingCompared = true;
          // setTable([...auxDPTable]);
          // await sleep(150 * (speed / 50));
          // auxDPTable[i][j + 1].isBeingCompared = false;
          // auxDPTable[i + 1][j].isBeingCompared = false;

          auxDPTable[0][j + 1].isBeingCompared = true;
          auxDPTable[i + 1][0].isBeingCompared = true;
          setTable([...auxDPTable]);
          await sleep(150 * (speed / 50));
          auxDPTable[0][j + 1].isBeingCompared = false;
          auxDPTable[i + 1][0].isBeingCompared = false;

          // Assing value and arrow direction
          L[i][j] = L[i - 1][j - 1] + 1;
          auxDPTable[i + 1][j + 1] = {
            value: L[i - 1][j - 1] + 1,
            isCurrent: true,
            arrowDir: 'corner',
          };
        } else if (L[i - 1][j] >= L[i][j - 1]) {
          setCurrentCodeLine(7);
          await sleep(150 * (speed / 50));
          setCurrentCodeLine(8);
          // Animate comparison
          auxDPTable[i][j + 1].isBeingCompared = true;
          auxDPTable[i + 1][j].isBeingCompared = true;
          setTable([...auxDPTable]);
          await sleep(150 * (speed / 50));
          auxDPTable[i][j + 1].isBeingCompared = false;
          auxDPTable[i + 1][j].isBeingCompared = false;

          // Assing value and arrow direction
          L[i][j] = L[i - 1][j];
          auxDPTable[i + 1][j + 1] = {
            value: L[i - 1][j],
            isCurrent: true,
            arrowDir: 'up',
          };
        } else {
          setCurrentCodeLine(7);
          await sleep(150 * (speed / 50));
          setCurrentCodeLine(8);
          // Animate comparison
          auxDPTable[i][j + 1].isBeingCompared = true;
          auxDPTable[i + 1][j].isBeingCompared = true;
          setTable([...auxDPTable]);
          await sleep(150 * (speed / 50));
          auxDPTable[i][j + 1].isBeingCompared = false;
          auxDPTable[i + 1][j].isBeingCompared = false;

          // Assing value and arrow direction
          L[i][j] = L[i][j - 1];
          auxDPTable[i + 1][j + 1] = {
            value: L[i][j - 1],
            isCurrent: true,
            arrowDir: 'left',
          };
        }
        await sleep(150 * (speed / 50));
        setCurrentCodeLine(0);
        setTable([...auxDPTable]);
        await sleep(200 * (speed / 50));

        // Animate current value
        setTable([...auxDPTable]);
        auxDPTable[i + 1][j + 1].isCurrent = false;
      }
    }
  };
  // Auxiliary function for dpTableOperations
  const getLCS = async (X, Y, m, n, dpTable, auxDPTable) => {
    let lcsString = '';
    let i = m;
    let j = n;

    while (i > 0 && j > 0) {
      setCurrentCodeLine(11);
      await sleep(750 * (speed / 50));

      if (X[i - 1] === Y[j - 1]) {
        lcsString = X[i - 1] + lcsString;
        setCurrentCodeLine(22);
        await sleep(750 * (speed / 50));
        setCurrentCodeLine(33);
        setLongestCommonSubsequence(lcsString);
        i--;
        j--;
        auxDPTable[0][j + 2].isTrack = true;
        auxDPTable[i + 2][0].isTrack = true;
        auxDPTable[i + 2][j + 2].isTrack = true;
        setTable([...auxDPTable]);
      } else if (dpTable[i - 1][j] > dpTable[i][j - 1]) {
        setCurrentCodeLine(44);
        await sleep(750 * (speed / 50));
        setCurrentCodeLine(55);
        i--;
        auxDPTable[i + 2][j + 1].isTrack = true;
        setTable([...auxDPTable]);
      } else {
        setCurrentCodeLine(66);
        await sleep(750 * (speed / 50));
        setCurrentCodeLine(77);
        j--;
        auxDPTable[i + 1][j + 2].isTrack = true;
        setTable([...auxDPTable]);
      }
      await sleep(750 * (speed / 50));
    }
    setCurrentCodeLine(0);
    toast({
      title: 'Cálculo terminado',
      description:
        lcsString.length === 0
          ? 'No existe un LCS para las cadenas ingresadas'
          : '',
      status: lcsString.length === 0 ? 'warning' : 'success',
      duration: lcsString.length === 0 ? 4000 : 2000,
      isClosable: false,
    });
  };

  const dpTableOperations = async () => {
    setLongestCommonSubsequence('');
    if (S1.length === 0 || S2.length === 0) {
      toast({
        title: 'Hubo un error',
        description: 'Ambas cadenas deben tener al menos un caracter.',
        status: 'error',
        duration: 4000,
        isClosable: false,
      });
      return;
    }
    const X = S1;
    const Y = S2;
    const m = X.length;
    const n = Y.length;

    let auxDPTable = [];
    let dpTable = [];

    fillTable(X, Y, auxDPTable, dpTable);
    await lcs(X, m, Y, n, dpTable, auxDPTable);
    await getLCS(X, Y, m, n, dpTable, auxDPTable);
  };

  const handleAnimation = async () => {
    setIsLoading(true);
    await dpTableOperations();
    setIsLoading(false);
  };

  return (
    <>
      <Container>
        <Stack spacing={4} pt="4">
          <Button
            colorScheme="green"
            fontWeight="bold"
            onClick={handleAnimation}
            disabled={isLoading}
          >
            Calcular
          </Button>
          {isLoading && (
            <Button colorScheme="red" fontWeight="bold" onClick={refreshPage}>
              Interrumpir
            </Button>
          )}
        </Stack>
      </Container>
      <Flex
        width="100%"
        alignContent="center"
        flexDir={['column', 'column', 'column', 'row']}
      >
        <Table table={table}></Table>
        <Box p="2" alignSelf="center">
          <DPCode currentCodeLine={currentCodeLine} />
        </Box>
      </Flex>
    </>
  );
};

export default DPTable;
