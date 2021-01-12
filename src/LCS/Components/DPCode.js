import React from 'react';
import { Tbody, Table, Tr, Td, Text } from '@chakra-ui/react';

const DPCode = ({ currentCodeLine }) => {
  return (
    <Table
      size="xs"
      variant="simple"
      bg="brand.morningGlory"
      borderRadius="0.3rem"
      p="3"
    >
      <Tbody>
        <Tr bg={currentCodeLine === 1 && 'brand.bondiBlue'}>
          <Td>
            <Text
              color="brand.stratos"
              fontSize={['0.8rem', '1rem', '1rem', '1rem']}
            >
              {'for (let i = 0; i <= m; i++) {'}
            </Text>
          </Td>
        </Tr>
        <Tr bg={currentCodeLine === 2 && 'brand.bondiBlue'}>
          <Td>
            <Text
              color="brand.stratos"
              pl={['0.5rem', '0.5rem', '1rem', '1rem']}
              fontSize={['0.8rem', '1rem', '1rem', '1rem']}
            >{`for (let j = 0; j <= n; j++) {`}</Text>
          </Td>
        </Tr>
        <Tr bg={currentCodeLine === 3 && 'brand.bondiBlue'}>
          <Td>
            <Text
              color="brand.stratos"
              pl={['1rem', '1rem', '2rem', '2rem']}
              fontSize={['0.8rem', '1rem', '1rem', '1rem']}
            >
              {'if (i === 0 || j === 0) {'}
            </Text>
          </Td>
        </Tr>
        <Tr bg={currentCodeLine === 4 && 'brand.bondiBlue'}>
          <Td>
            <Text
              color="brand.stratos"
              pl={['1.5rem', '1.5rem', '3rem', '3rem']}
              fontSize={['0.8rem', '1rem', '1rem', '1rem']}
            >
              {'L[i][j] = 0;'}
            </Text>
          </Td>
        </Tr>
        <Tr bg={currentCodeLine === 5 && 'brand.bondiBlue'}>
          <Td>
            <Text
              color="brand.stratos"
              pl={['1rem', '1rem', '2rem', '2rem']}
              fontSize={['0.8rem', '1rem', '1rem', '1rem']}
            >
              {'} else if (X[i - 1] === Y[j - 1]) {'}
            </Text>
          </Td>
        </Tr>

        <Tr bg={currentCodeLine === 6 && 'brand.bondiBlue'}>
          <Td>
            <Text
              color="brand.stratos"
              pl={['1.5rem', '1.5rem', '3rem', '3rem']}
              fontSize={['0.8rem', '1rem', '1rem', '1rem']}
            >
              {'L[i][j] = L[i - 1][j - 1] + 1;'}
            </Text>
          </Td>
        </Tr>
        <Tr bg={currentCodeLine === 7 && 'brand.bondiBlue'}>
          <Td>
            <Text
              color="brand.stratos"
              pl={['1rem', '1rem', '2rem', '2rem']}
              fontSize={['0.8rem', '1rem', '1rem', '1rem']}
            >
              {'} else L[i][j] = Math.max(L[i - 1][j], L[i][j - 1]);'}
            </Text>
          </Td>
        </Tr>
        <Tr bg={currentCodeLine === 8 && 'brand.bondiBlue'}>
          <Td>
            <Text
              color="brand.stratos"
              pl={['0.5rem', '0.5rem', '1rem', '1rem']}
              fontSize={['0.8rem', '1rem', '1rem', '1rem']}
            >
              {'} '}
            </Text>
          </Td>
        </Tr>
        <Tr>
          <Td>
            <Text
              color="brand.stratos"
              fontSize={['0.8rem', '1rem', '1rem', '1rem']}
            >
              {'}'}
            </Text>
          </Td>
        </Tr>
      </Tbody>
    </Table>
  );
};

export default DPCode;
