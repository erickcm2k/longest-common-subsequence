import React from 'react';
import { Tbody, Table, Tr, Td, Text, Box } from '@chakra-ui/react';

const DPCode = ({ currentCodeLine }) => {
  return (
    <Box display="flex" flexDir={['column', 'column', 'row', 'column']}>
      <Box p={['0', '0', '2', '0']}>
        <Text
          color="brand.stratos"
          textAlign="center"
          fontWeight="bold"
          fontSize={['1rem', '1.2rem', '1.2rem', '1.2rem']}
        >
          Llenado de tabla
        </Text>
        <Table size="xs" variant="simple" bg="brand.morningGlory" p="3">
          <Tbody>
            <Tr bg={currentCodeLine === 1 && 'brand.bondiBlue'}>
              <Td>
                <Text fontSize={['0.8rem', '1rem', '0.8rem', '0.8rem']}>
                  {'for (let i = 0; i <= m; i++) {'}
                </Text>
              </Td>
            </Tr>
            <Tr bg={currentCodeLine === 2 && 'brand.bondiBlue'}>
              <Td>
                <Text
                  pl={['0.5rem', '0.5rem', '1rem', '1rem']}
                  fontSize={['0.8rem', '1rem', '0.8rem', '0.8rem']}
                >{`for (let j = 0; j <= n; j++) {`}</Text>
              </Td>
            </Tr>
            <Tr bg={currentCodeLine === 3 && 'brand.bondiBlue'}>
              <Td>
                <Text
                  pl={['1rem', '1rem', '2rem', '2rem']}
                  fontSize={['0.8rem', '1rem', '0.8rem', '0.8rem']}
                >
                  {'if (i === 0 || j === 0) {'}
                </Text>
              </Td>
            </Tr>
            <Tr bg={currentCodeLine === 4 && 'brand.successGreen'}>
              <Td>
                <Text
                  pl={['1.5rem', '1.5rem', '3rem', '3rem']}
                  fontSize={['0.8rem', '1rem', '0.8rem', '0.8rem']}
                >
                  {'L[i][j] = 0;'}
                </Text>
              </Td>
            </Tr>
            <Tr bg={currentCodeLine === 5 && 'brand.bondiBlue'}>
              <Td>
                <Text
                  pl={['1rem', '1rem', '2rem', '2rem']}
                  fontSize={['0.8rem', '1rem', '0.8rem', '0.8rem']}
                >
                  {'} else if (X[i - 1] === Y[j - 1]) {'}
                </Text>
              </Td>
            </Tr>

            <Tr bg={currentCodeLine === 6 && 'brand.successGreen'}>
              <Td>
                <Text
                  pl={['1.5rem', '1.5rem', '3rem', '3rem']}
                  fontSize={['0.8rem', '1rem', '0.8rem', '0.8rem']}
                >
                  {'L[i][j] = L[i - 1][j - 1] + 1;'}
                </Text>
              </Td>
            </Tr>
            <Tr bg={currentCodeLine === 7 && 'brand.bondiBlue'}>
              <Td>
                <Text
                  pl={['1rem', '1rem', '2rem', '2rem']}
                  fontSize={['0.8rem', '1rem', '0.8rem', '0.8rem']}
                >
                  {'} else {'}
                </Text>
              </Td>
            </Tr>
            <Tr bg={currentCodeLine === 8 && 'brand.successGreen'}>
              <Td>
                <Text
                  pl={['1rem', '1rem', '2rem', '2rem']}
                  fontSize={['0.8rem', '1rem', '0.8rem', '0.8rem']}
                >
                  {'L[i][j] = Math.max(L[i - 1][j], L[i][j - 1]);'}
                </Text>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Text
                  pl={['1rem', '1rem', '2rem', '2rem']}
                  fontSize={['0.8rem', '1rem', '0.8rem', '0.8rem']}
                >
                  {'} '}
                </Text>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Text
                  pl={['0.5rem', '0.5rem', '1rem', '1rem']}
                  fontSize={['0.8rem', '1rem', '0.8rem', '0.8rem']}
                >
                  {'}'}
                </Text>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Text fontSize={['0.8rem', '1rem', '0.8rem', '0.8rem']}>
                  {'}'}
                </Text>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>

      <Box p={['0', '0', '2', '0']}>
        <Text
          color="brand.stratos"
          textAlign="center"
          fontWeight="bold"
          fontSize={['1rem', '1.2rem', '1.2rem', '1.2rem']}
        >
          Obtención de LCS
        </Text>
        <Table size="xs" variant="simple" bg="brand.morningGlory" p="3">
          <Tbody>
            <Tr bg={currentCodeLine === 11 && 'brand.bondiBlue'}>
              <Td>
                <Text fontSize={['0.8rem', '1rem', '0.8rem', '0.8rem']}>
                  {'while (i > 0 && j > 0) {'}
                </Text>
              </Td>
            </Tr>
            <Tr bg={currentCodeLine === 22 && 'brand.bondiBlue'}>
              <Td>
                <Text
                  pl={['0.5rem', '0.5rem', '1rem', '1rem']}
                  fontSize={['0.8rem', '1rem', '0.8rem', '0.8rem']}
                >{`if (X[i - 1] === Y[j - 1]) {`}</Text>
              </Td>
            </Tr>
            <Tr bg={currentCodeLine === 33 && 'brand.successGreen'}>
              <Td>
                <Text
                  pl={['1rem', '1rem', '2rem', '2rem']}
                  fontSize={['0.8rem', '1rem', '0.8rem', '0.8rem']}
                >
                  {'lcsString = X[i - 1] + lcsString; i--; j--;'}
                </Text>
              </Td>
            </Tr>
            <Tr bg={currentCodeLine === 44 && 'brand.bondiBlue'}>
              <Td>
                <Text
                  pl={['0.5rem', '0.5rem', '1rem', '1rem']}
                  fontSize={['0.8rem', '1rem', '0.8rem', '0.8rem']}
                >
                  {'} else if (dpTable[i - 1][j] > dpTable[i][j - 1]) {'}
                </Text>
              </Td>
            </Tr>
            <Tr bg={currentCodeLine === 55 && 'brand.successGreen'}>
              <Td>
                <Text
                  pl={['1rem', '1rem', '2rem', '2rem']}
                  fontSize={['0.8rem', '1rem', '0.8rem', '0.8rem']}
                >
                  {'i--;'}
                </Text>
              </Td>
            </Tr>

            <Tr bg={currentCodeLine === 66 && 'brand.bondiBlue'}>
              <Td>
                <Text
                  pl={['0.5rem', '0.5rem', '1rem', '1rem']}
                  fontSize={['0.8rem', '1rem', '0.8rem', '0.8rem']}
                >
                  {'} else { '}
                </Text>
              </Td>
            </Tr>
            <Tr bg={currentCodeLine === 77 && 'brand.successGreen'}>
              <Td>
                <Text
                  pl={['1rem', '1rem', '2rem', '2rem']}
                  fontSize={['0.8rem', '1rem', '0.8rem', '0.8rem']}
                >
                  {'j--;'}
                </Text>
              </Td>
            </Tr>
            <Tr bg={currentCodeLine === 88 && 'brand.bondiBlue'}>
              <Td>
                <Text
                  pl={['0.5rem', '0.5rem', '1rem', '1rem']}
                  fontSize={['0.8rem', '1rem', '0.8rem', '0.8rem']}
                >
                  {'} '}
                </Text>
              </Td>
            </Tr>
            <Tr bg={currentCodeLine === 99 && 'brand.bondiBlue'}>
              <Td>
                <Text fontSize={['0.8rem', '1rem', '0.8rem', '0.8rem']}>
                  {'} '}
                </Text>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};

export default DPCode;
