import React, { useState, useEffect } from 'react';
import {
  Container,
  Button,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
  Grid,
  GridItem,
  Box,
  useToast,
} from '@chakra-ui/react';
import { ArrowUpIcon } from '@chakra-ui/icons';
import './table.css';

const DPTable = () => {
  const toast = useToast();
  const [value, setValue] = useState('AGGTAB');
  const [secondValue, setSecondValue] = useState('GXTXAYB');

  const handleChange = event => setValue(event.target.value.toUpperCase());

  const handleSecondChange = event =>
    setSecondValue(event.target.value.toUpperCase());

  const [table, setTable] = useState([]);

  const createEmptyTable = () => {
    // Generate empty table
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
    console.log(value);
    console.log(secondValue);

    let empyTable = [];

    // Create columns
    for (let i = 0; i < secondValue.length + 1; i++) {
      empyTable.push([]);
      // Fill first row
      for (let i = 1; i < value.length + 1; i++) {
        empyTable[0][i] = value[i - 1];
      }
    }
    empyTable[0][0] = '*';

    // // Fill first column
    for (let i = 1; i < secondValue.length + 1; i++) {
      empyTable[i][0] = secondValue[i - 1];
    }

    // Fill with zeros
    for (let i = 1; i < value.length + 1; i++) {
      for (let j = 1; j < secondValue.length + 1; j++) {
        empyTable[j][i] = '0';
      }
    }
    // console.log(empyTable);
    setTable(empyTable);
  };

  const computeLCS = () => {
    createEmptyTable();
  };

  console.log(table);

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
            />
          </InputGroup>
          <Button colorScheme="green" fontWeight="bold" onClick={computeLCS}>
            Calcular
          </Button>
        </Stack>
      </Container>
      {table.length > 0 ? (
        <Grid
          bg="brand.botticelli"
          mt="5"
          templateColumns={`repeat(${table[0].length}, 1fr)`}
          templateRows={`repeat(${table.length - 1}, 1fr)`}
          gap={1}
        >
          {table.map(row =>
            row.map(cell => (
              <Box
                w="100%"
                h="10"
                color="brand.botticelli"
                bg="brand.stratos"
                key={Math.random()}
              >
                <ArrowUpIcon /> {cell}
              </Box>
            ))
          )}
        </Grid>
      ) : null}
    </>
  );
};

export default DPTable;
