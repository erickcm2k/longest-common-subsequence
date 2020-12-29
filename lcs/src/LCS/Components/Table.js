import React from 'react';
import { Grid, Box } from '@chakra-ui/react';
const Table = props => {
  return (
    <>
      {props.table.length > 0 ? (
        <Grid
          bg="brand.botticelli"
          mt="5"
          mb="5"
          templateColumns={`repeat(${props.table[0].length}, 1fr)`}
          templateRows={`repeat(${props.table.length - 1}, 1fr)`}
          gap={1}
        >
          {props.table.map(row =>
            row.map(cell => (
              <Box
                w="100%"
                h="10"
                color="brand.botticelli"
                bg="brand.stratos"
                textAlign="center"
                key={Math.random()}
              >
                {cell}
              </Box>
            ))
          )}
        </Grid>
      ) : null}
    </>
  );
};

export default Table;
