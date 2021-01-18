import React, { useState } from 'react';
import {
  Container,
  Button,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
  useToast,
  Text,
  Box,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Flex,
} from '@chakra-ui/react';

import Table from './Table';
import DPCode from './DPCode';
import { sleep } from '../../Utils/sleep';
// Method: Iterative Bottom-Up
// Table fill: Top-Down

const MemoTable = () => {
  const toast = useToast();
  const [value, setValue] = useState('AGGTAB');
  const [secondValue, setSecondValue] = useState('GXTXAYB');
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = event => setValue(event.target.value.toUpperCase());

  const handleSecondChange = event =>
    setSecondValue(event.target.value.toUpperCase());
  const refreshPage = () => {
    window.location.reload();
  };
  // const [currentCodeLine, setCurrentCodeLine] = useState(0);
  const [table, setTable] = useState();
  const [longestCommonSubsequence, setLongestCommonSubsequence] = useState('');
  const [speed, setSpeed] = useState(50);

  // Auxiliary function for memoTableOperations
  const fillTable = (X, Y, auxMemoTable, memoTable) => {
    for (let i = 0; i < X.length + 1; i++) {
      memoTable[i] = [];
      for (let j = 0; j < Y.length + 1; j++) {
        memoTable[i][j] = -1;
      }
    }

    for (let i = 0; i < X.length + 2; i++) {
      auxMemoTable[i] = [];

      for (let j = 0; j < Y.length + 2; j++) {
        auxMemoTable[i][j] = {
          value: -1,
        };
      }
    }
    auxMemoTable[0][0] = { value: '*', isCurrent: false, arrowDir: '' };
    auxMemoTable[0][1] = { value: '*', isCurrent: false, arrowDir: '' };
    auxMemoTable[1][0] = { value: '*', isCurrent: false, arrowDir: '' };

    // // Fill first row with first string characters
    for (let i = 2; i < Y.length + 2; i++) {
      auxMemoTable[0][i] = {
        value: Y[i - 2],
        isCurrent: false,
        arrowDir: '',
      };
    }

    // // Fill first column with first string characters
    for (let i = 2; i < X.length + 2; i++) {
      auxMemoTable[i][0] = {
        value: X[i - 2],
        isCurrent: false,
        arrowDir: '',
      };
    }

    setTable([...auxMemoTable]);
  };

  // Auxiliary function for memoTableOperations
  const lcs = (S1, m, S2, n, memoTable, auxMemoTable) => {
    let finalResult;
    if (memoTable[m][n] > -1) {
      return memoTable[m][n];
    } else if (m === 0 || n === 0) {
      finalResult = 0;
      memoTable[m][n] = finalResult;
      auxMemoTable[m + 1][n + 1] = { value: finalResult };
      setTable([...auxMemoTable]);
    } else if (S1[m - 1] === S2[n - 1]) {
      finalResult = 1 + lcs(S1, m - 1, S2, n - 1, memoTable, auxMemoTable);
      memoTable[m][n] = finalResult;
      auxMemoTable[m + 1][n + 1] = { value: finalResult };
      setTable([...auxMemoTable]);
    } else {
      finalResult = Math.max(
        lcs(S1, m - 1, S2, n, memoTable, auxMemoTable),
        lcs(S1, m, S2, n - 1, memoTable, auxMemoTable)
      );
      memoTable[m][n] = finalResult;
      auxMemoTable[m + 1][n + 1] = { value: finalResult };
      setTable([...auxMemoTable]);
    }

    return finalResult;
  };

  // Auxiliary function for memoTableOperations
  const getLCS = async (X, Y, m, n, memoTable, auxMemoTable) => {
    let lcsString = '';
    let i = m;
    let j = n;

    while (i > 0 && j > 0) {
      if (X[i - 1] === Y[j - 1]) {
        lcsString = X[i - 1] + lcsString;
        await sleep(1000 * (speed / 50));
        setLongestCommonSubsequence(lcsString);
        i--;
        j--;
        auxMemoTable[0][j + 2].isTrack = true;
        auxMemoTable[i + 2][0].isTrack = true;
        auxMemoTable[i + 2][j + 2].isTrack = true;
        setTable([...auxMemoTable]);
      } else if (memoTable[i - 1][j] > memoTable[i][j - 1]) {
        await sleep(1000 * (speed / 50));
        i--;
        auxMemoTable[i + 2][j + 1].isTrack = true;
        setTable([...auxMemoTable]);
      } else {
        await sleep(1000 * (speed / 50));
        j--;
        auxMemoTable[i + 1][j + 2].isTrack = true;
        setTable([...auxMemoTable]);
      }
    }
    return lcsString;
  };

  const memoTableOperations = async () => {
    setLongestCommonSubsequence('');
    if (value.length === 0 || secondValue.length === 0) {
      toast({
        title: 'Hubo un error',
        description: 'Ambas cadenas deben tener al menos un caracter.',
        status: 'error',
        duration: 4000,
        isClosable: false,
      });
      return;
    }

    const X = value;
    const Y = secondValue;
    const m = X.length;
    const n = Y.length;

    let auxMemoTable = [];
    let memoTable = [];

    fillTable(X, Y, auxMemoTable, memoTable);
    lcs(X, m, Y, n, memoTable, auxMemoTable);
    await getLCS(X, Y, m, n, memoTable, auxMemoTable);
  };

  const handleAnimation = async () => {
    setIsLoading(true);
    await memoTableOperations();
    setIsLoading(false);
  };

  return (
    <>
      <Container>
        <Stack spacing={4}>
          <InputGroup minW="17rem" alignSelf="center">
            <InputLeftAddon
              children="Cadena 1"
              color="brand.stratos"
              fontWeight="bold"
            />
            <Input
              bg="white"
              maxLength="10"
              color="brand.stratos"
              value={value}
              onChange={handleChange}
              disabled={isLoading}
            />
          </InputGroup>
          <InputGroup minW="17rem" alignSelf="center">
            <InputLeftAddon
              children="Cadena 2"
              color="brand.stratos"
              fontWeight="bold"
            />
            <Input
              bg="white"
              maxLength="10"
              color="brand.stratos"
              value={secondValue}
              onChange={handleSecondChange}
              disabled={isLoading}
            />
          </InputGroup>

          <Text htmlFor="speedSlider"> Velocidad X{speed / 50}</Text>
          <Slider
            id="speedSlider"
            aria-label="slider-ex-1"
            defaultValue={speed}
            value={speed}
            disabled={isLoading}
            onChange={val => setSpeed(val)}
          >
            <SliderTrack bg="white">
              <SliderFilledTrack bg="brand.bondiBlue" />
            </SliderTrack>
            <SliderThumb />
          </Slider>
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
          {longestCommonSubsequence.length > 0 && (
            <Box
              bg="brand.morningGlory"
              borderRadius="1rem"
              p={['2', '3', '4', '5']}
            >
              <Text fontSize={['lg', 'lg', 'lg', 'xl']}>
                La subsecuencia común más larga es:
              </Text>
              <Text fontSize={['lg', 'lg', 'lg', 'xl']} fontWeight="bold">
                {longestCommonSubsequence}
              </Text>
            </Box>
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
          {/* <DPCode currentCodeLine={currentCodeLine} /> */}
        </Box>
      </Flex>
    </>
  );
};

export default MemoTable;
