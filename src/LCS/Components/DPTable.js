import React, { useState } from 'react';
import {
  Container,
  Button,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
  useToast,
} from '@chakra-ui/react';
import Table from './Table';

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

  const sleep = time => {
    return new Promise(resolve => setTimeout(resolve, time));
  };

  const computeLCS = async () => {
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
      for (let j = 0; j <= n; j++) {
        // Just for setting arrow direction

        if (i === 0 || j === 0) {
          L[i][j] = 0;
          empyTable[i + 1][j + 1] = {
            value: 0,
            isCurrent: true,
            arrowDir: '',
          };
        } else if (X[i - 1] === Y[j - 1]) {
          L[i][j] = L[i - 1][j - 1] + 1;
          empyTable[i + 1][j + 1] = {
            value: L[i - 1][j - 1] + 1,
            isCurrent: true,
            arrowDir: 'corner',
          };
        } else if (L[i - 1][j] >= L[i][j - 1]) {
          L[i][j] = L[i - 1][j];
          empyTable[i + 1][j + 1] = {
            value: L[i - 1][j],
            isCurrent: true,
            arrowDir: 'up',
          };
        } else {
          L[i][j] = L[i][j - 1];
          empyTable[i + 1][j + 1] = {
            value: L[i][j - 1],
            isCurrent: true,
            arrowDir: 'left',
          };
        }

        await sleep(100);
        setTable([...empyTable]);
        await sleep(100);
        setTable([...empyTable]);
        empyTable[i + 1][j + 1].isCurrent = false;
      }
    }

    setTable(empyTable);
  };

  const handleAnimation = async () => {
    setIsLoading(true);
    await computeLCS();
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
              maxLength="10"
              color="brand.stratos"
              value={secondValue}
              onChange={handleSecondChange}
              disabled={isLoading}
            />
          </InputGroup>
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
      <Table table={table}></Table>
    </>
  );
};

export default DPTable;
