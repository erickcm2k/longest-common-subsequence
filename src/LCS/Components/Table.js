import React from 'react';
import { Grid, Box, Flex } from '@chakra-ui/react';
import {
  BsArrowUp as ArrowUp,
  BsArrowLeft as ArrowLeft,
  BsArrowUpLeft as ArrowCorner,
} from 'react-icons/bs';
// Determines cell icon.
const getArrowIcon = direction => {
  let arrowIcon;
  switch (direction) {
    case 'up':
      arrowIcon = <ArrowUp />;
      break;
    case 'left':
      arrowIcon = <ArrowLeft />;
      break;
    case 'corner':
      arrowIcon = <ArrowCorner />;
      break;
    default:
      arrowIcon = null;
      break;
  }

  return arrowIcon;
};

// Determines cell background color.
const getBgColor = cell => {
  let bgColor = 'brand.stratos';

  // Sets the zero border to a different color.
  if (!cell.arrowDir && cell.value === 0) {
    bgColor = 'brand.regalBlue';
  }

  if (cell.isCurrent) {
    bgColor = 'tomato';
  }

  if (cell.isBeingCompared) {
    bgColor = 'brand.botticelli';
  }

  if (cell.isTrack) {
    bgColor = 'orange.500';
  }

  return bgColor;
};

// Renders dp table
const Table = props => {
  return (
    <Flex
      width={['100%', '100%', '100%', '70%']}
      style={{
        // paddingBottom: props.table ? '10rem' : '35rem',
        display: 'block',
      }}
    >
      {/* Ensures that a table exists */}
      {props.table ? (
        <Grid
          bg="brand.botticelli"
          mt="5"
          mb="5"
          p="2"
          templateColumns={`repeat(${props.table[0].length}, 1fr)`}
          templateRows={`repeat(${props.table.length - 1}, 1fr)`}
          gap={1}
        >
          {props.table.map((row, i) =>
            row.map((cell, j) => (
              <Box
                h="12"
                color="white"
                bg={getBgColor(cell)}
                textAlign="center"
                key={`${i}${j}`}
              >
                {getArrowIcon(cell.arrowDir)} {cell.value}
              </Box>
            ))
          )}
        </Grid>
      ) : null}
    </Flex>
  );
};

export default Table;
