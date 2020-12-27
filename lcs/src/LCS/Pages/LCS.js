import React from 'react';
import { Container, Text, Button } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import InputReaders from '../Components/InputReaders';

const LCS = () => {
  return (
    <Container
      mt="3"
      border="1px solid red"
      width="90%"
      maxW={"90rem"}
    >
      <Link to={`/`}>
        <Button
          leftIcon={<ArrowBackIcon />}
          bg="brand.morningGlory"
          color="brand.stratos"
        >
          Volver
        </Button>
      </Link>
      <Text
        color="brand.stratos"
        fontSize={['xl', 'xl', '3xl', '4xl']}
        fontWeight="bold"
        textAlign="center"
      >
        Usando Programación Dinámica
      </Text>
      <Button bg="brand.stratos" color="white">
        Cambiar a recursividad
      </Button>
      <InputReaders />
    </Container>
  );
};
// const LCS = () => {
//   const X = 'AGGTAB';
//   const Y = 'GXTXAYB';
//   const m = X.length;
//   const n = Y.length;
//   const [lcs, setlcs] = useState('');

//   const calcLCS = () => {
//     setlcs(lcsAlgorithm(X, Y, m, n));
//   };

//   return (
//     <>
//       <div style={{ margin: '0 auto', textAlign: 'center' }}>
//         <h1>Soy el componente LCS</h1>
//         <h1 style={{ fontFamily: 'Quicksand, sans-serif', fontWeight: 'bold' }}>
//           Soy el componente LCS
//         </h1>
//         <p>Cadena 1 = {X}</p>
//         <p> Cadena 2 = {Y}</p>
//         <p>{lcs}</p>
//         <Button
//           bg="brand.bondiBlue"
//           color="white"
//           _hover={{ bg: 'brand.stratos' }}
//           _after={{ bg: 'brand.bondiBlue' }}
//           onClick={calcLCS}
//         >
//           Calcular LCS
//         </Button>
//       </div>
//     </>
//   );
// };

export default LCS;
