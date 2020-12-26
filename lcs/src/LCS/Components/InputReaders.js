import React from 'react';
import DPTable from './DPTable';
import {
  //   Slider,
  //   SliderTrack,
  //   SliderFilledTrack,
  //   SliderThumb,
  Text,
  Container,
  //   Button,
} from '@chakra-ui/react';

const InputReaders = () => {
  const [value, setValue] = React.useState(4);
  const [secondValue, setsecondValue] = React.useState(5);

  return (
    <>
      <Container>
        <DPTable />
      </Container>
    </>
  );
};

export default InputReaders;
