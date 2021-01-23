import React, { useState } from 'react';
import {
  Container,
  Button,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
  Text,
  Box,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from '@chakra-ui/react';
import MemoTable from './MemoTable';
import DPTable from './DPTable';
import useSessionStorageState from '../../Hooks/useSessionStorage';
const Dashboard = () => {
  const [value, setValue] = useSessionStorageState('s1', 'AGGTAB');
  const [secondValue, setSecondValue] = useSessionStorageState('s2', 'GXTXAYB');
  const [isLoading, setIsLoading] = useState(false);
  const [mode, setMode] = useSessionStorageState('mode', 'top-down');

  const [longestCommonSubsequence, setLongestCommonSubsequence] = useState('');
  const toggleMode = () => {
    setMode(mode === 'top-down' ? 'bottom-up' : 'top-down');
    setLongestCommonSubsequence('');
  };
  const handleChange = event => setValue(event.target.value.toUpperCase());
  const handleSecondChange = event =>
    setSecondValue(event.target.value.toUpperCase());
  const [speed, setSpeed] = useState(50);

  return (
    <>
      <Container>
        <Stack spacing={4} pt='2'>
          <Button
            bg="brand.morningGlory"
            color="brand.stratos"
            onClick={toggleMode}
            disabled={isLoading}
          >
            Cambiar a {mode === 'top-down' ? 'bottom-up' : 'top-down'}
          </Button>
          <Text
            color="brand.stratos"
            fontSize={['xl', 'xl', '3xl', '4xl']}
            fontWeight="bold"
            textAlign="center"
          >
            Modo: {mode === 'top-down' ? 'Top-Down' : 'Bottom-Up'}
          </Text>
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

          <Text htmlFor="speedSlider"> Velocidad animación</Text>
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

      {mode === 'top-down' ? (
        <MemoTable
          setLongestCommonSubsequence={setLongestCommonSubsequence}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          S1={value}
          S2={secondValue}
          speed={speed}
        />
      ) : (
        <DPTable
          setLongestCommonSubsequence={setLongestCommonSubsequence}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          S1={value}
          S2={secondValue}
          speed={speed}
        />
      )}
    </>
  );
};

export default Dashboard;
