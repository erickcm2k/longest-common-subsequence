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
import './table.css';

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
  const [table, setTable] = useState([]);

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
    empyTable[0][0] = '*';
    empyTable[0][1] = '*';
    empyTable[1][0] = '*';

    for (let i = 2; i < Y.length + 2; i++) {
      empyTable[0][i] = Y[i - 2];
    }

    // // Fill first column
    for (let i = 2; i < X.length + 2; i++) {
      empyTable[i][0] = X[i - 2];
    }

    // Fill with empty spaces.
    for (let i = 1; i < Y.length + 2; i++) {
      for (let j = 1; j < X.length + 2; j++) {
        empyTable[j][i] = ' ';
      }
    }
    setTable([...empyTable]);
    await sleep(1000);
    // Que el algoritmo se esté ejecutando sobre una copia del arreglo, al momento
    // de insertar elementos se inserten sobre la copia que se va a modificar
    const L = [];
    for (let i = 0; i < m + 1; i++) {
      L.push([]);
    }
    for (let i = 0; i <= m; i++) {
      for (let j = 0; j <= n; j++) {
        await sleep(100);
        setTable([...empyTable]);
        if (i === 0 || j === 0) {
          L[i][j] = 0;
          empyTable[i + 1][j + 1] = 0;
        } else if (X[i - 1] === Y[j - 1]) {
          L[i][j] = L[i - 1][j - 1] + 1;
          empyTable[i + 1][j + 1] = L[i - 1][j - 1] + 1;
        } else {
          L[i][j] = Math.max(L[i - 1][j], L[i][j - 1]);
          empyTable[i + 1][j + 1] = Math.max(L[i - 1][j], L[i][j - 1]);
        }
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

// const computeLCS = () => {
//   // Generate empty table
//   if (value.length === 0 || secondValue.length === 0) {
//     toast({
//       title: 'Hubo un error',
//       description: 'Ambas cadenas deben tener al menos un caracter.',
//       status: 'error',
//       duration: 4000,
//       isClosable: false,
//     });
//     return;
//   }
//   console.log(value);
//   console.log(secondValue);

//   let empyTable = [];

//   // Create columns
//   for (let i = 0; i < secondValue.length + 1; i++) {
//     empyTable.push([]);
//     // Fill first row
//     for (let i = 1; i < value.length + 1; i++) {
//       empyTable[0][i] = value[i - 1];
//     }
//   }
//   empyTable[0][0] = '*';

//   // // Fill first column
//   for (let i = 1; i < secondValue.length + 1; i++) {
//     empyTable[i][0] = secondValue[i - 1];
//   }

//   // Fill with zeros
//   for (let i = 1; i < value.length + 1; i++) {
//     for (let j = 1; j < secondValue.length + 1; j++) {
//       empyTable[j][i] = '0';
//     }
//   }
//   // console.log(empyTable);
//   setTable(empyTable);
// };

// const computeLCS = () => {
//   computeLCS();
// };
