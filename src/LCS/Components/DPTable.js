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

// Method: Iterative Bottom-Up
// Table fill: Top-Down

const DPTable = () => {
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
  const [table, setTable] = useState();
  const [longestCommonSubsequence, setLongestCommonSubsequence] = useState('');
  const [speed, setSpeed] = useState(50);
  const [currentCodeLine, setCurrentCodeLine] = useState(0);
  const sleep = time => {
    return new Promise(resolve => setTimeout(resolve, time));
  };

  const generateDPTable = async () => {
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

    let empyTable = [];

    // Create columns
    for (let i = 0; i < X.length + 2; i++) {
      empyTable.push([]);
    }
    // Fill first row
    empyTable[0][0] = { value: '*', isCurrent: false, arrowDir: '' };
    empyTable[0][1] = { value: '*', isCurrent: false, arrowDir: '' };
    empyTable[1][0] = { value: '*', isCurrent: false, arrowDir: '' };

    for (let i = 2; i < Y.length + 2; i++) {
      empyTable[0][i] = {
        value: Y[i - 2],
        isCurrent: false,
        arrowDir: '',
      };
    }

    // // Fill first column
    for (let i = 2; i < X.length + 2; i++) {
      empyTable[i][0] = {
        value: X[i - 2],
        isCurrent: false,
        arrowDir: '',
      };
    }

    // Fill with empty spaces.
    for (let i = 1; i < Y.length + 2; i++) {
      for (let j = 1; j < X.length + 2; j++) {
        empyTable[j][i] = { value: '', isCurrent: false, arrowDir: '' };
      }
    }
    setTable([...empyTable]);

    // Que el algoritmo se esté ejecutando sobre una copia del arreglo, al momento
    // de insertar elementos se inserten sobre la copia que se va a modificar
    const L = [];
    for (let i = 0; i < m + 1; i++) {
      L.push([]);
    }
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
          empyTable[i + 1][j + 1] = {
            value: 0,
            isCurrent: true,
          };
        } else if (X[i - 1] === Y[j - 1]) {
          setCurrentCodeLine(5);
          await sleep(150 * (speed / 50));
          setCurrentCodeLine(6);
          // Animate comparison
          empyTable[i][j + 1].isBeingCompared = true;
          empyTable[i + 1][j].isBeingCompared = true;
          setTable([...empyTable]);
          await sleep(150 * (speed / 50));
          empyTable[i][j + 1].isBeingCompared = false;
          empyTable[i + 1][j].isBeingCompared = false;

          // Assing value and arrow direction
          L[i][j] = L[i - 1][j - 1] + 1;
          empyTable[i + 1][j + 1] = {
            value: L[i - 1][j - 1] + 1,
            isCurrent: true,
            arrowDir: 'corner',
          };
        } else if (L[i - 1][j] >= L[i][j - 1]) {
          setCurrentCodeLine(7);
          await sleep(150 * (speed / 50));
          setCurrentCodeLine(8);
          // Animate comparison
          empyTable[i][j + 1].isBeingCompared = true;
          empyTable[i + 1][j].isBeingCompared = true;
          setTable([...empyTable]);
          await sleep(150 * (speed / 50));
          empyTable[i][j + 1].isBeingCompared = false;
          empyTable[i + 1][j].isBeingCompared = false;

          // Assing value and arrow direction
          L[i][j] = L[i - 1][j];
          empyTable[i + 1][j + 1] = {
            value: L[i - 1][j],
            isCurrent: true,
            arrowDir: 'up',
          };
        } else {
          setCurrentCodeLine(7);
          await sleep(150 * (speed / 50));
          setCurrentCodeLine(8);
          // Animate comparison
          empyTable[i][j + 1].isBeingCompared = true;
          empyTable[i + 1][j].isBeingCompared = true;
          setTable([...empyTable]);
          await sleep(150 * (speed / 50));
          empyTable[i][j + 1].isBeingCompared = false;
          empyTable[i + 1][j].isBeingCompared = false;

          // Assing value and arrow direction
          L[i][j] = L[i][j - 1];
          empyTable[i + 1][j + 1] = {
            value: L[i][j - 1],
            isCurrent: true,
            arrowDir: 'left',
          };
        }
        await sleep(150 * (speed / 50));
        setCurrentCodeLine(0);
        setTable([...empyTable]);
        await sleep(200 * (speed / 50));

        // Animate current value
        setTable([...empyTable]);
        empyTable[i + 1][j + 1].isCurrent = false;
      }
    }

    /*
    
    Get the LCS
    
    */

    let lcsStr = [];

    let index = L[m][n];
    let i = m,
      j = n;
    setCurrentCodeLine(11);
    await sleep(1000 * (speed / 50));
    while (i > 0 && j > 0) {
      if (X[i - 1] === Y[j - 1]) {
        lcsStr[index - 1] = X[i - 1];
        setCurrentCodeLine(22);
        await sleep(1000 * (speed / 50));
        setCurrentCodeLine(33);

        setLongestCommonSubsequence(lcsStr);
        i--;
        j--;
        index--;
        setTable([...empyTable]);
        empyTable[0][j + 2].isTrack = true;
        empyTable[i + 2][0].isTrack = true;
        empyTable[i + 2][j + 2].isTrack = true;
      } else if (L[i - 1][j] > L[i][j - 1]) {
        setCurrentCodeLine(44);
        await sleep(1000 * (speed / 50));
        setCurrentCodeLine(55);
        i--;
        empyTable[i + 2][j + 1].isTrack = true;
      } else {
        setCurrentCodeLine(66);
        await sleep(1000 * (speed / 50));
        setCurrentCodeLine(77);
        j--;
        empyTable[i + 1][j + 2].isTrack = true;
      }
      await sleep(1000 * (speed / 50));
      setCurrentCodeLine(11);
      await sleep(1000 * (speed / 50));
    }
    setCurrentCodeLine(0);

    toast({
      title: 'Cálculo terminado',
      description:
        lcsStr.length > 0
          ? ''
          : 'No existe un LCS para las cadenas ingresadas.',
      status: lcsStr.length > 0 ? 'success' : 'warning',
      duration: lcsStr.length > 0 ? 3000 : 6500,
      isClosable: false,
    });
    return lcsStr;
  };

  const handleAnimation = async () => {
    setIsLoading(true);
    await generateDPTable();
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
          <DPCode currentCodeLine={currentCodeLine} />
        </Box>
      </Flex>
    </>
  );
};

export default DPTable;
