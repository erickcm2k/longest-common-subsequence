import React from 'react';
import { Container, Text, Button } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import InputReaders from '../Components/InputReaders';

const LCS = () => {
  return (
    <Container border="1px solid red" maxW={['90%', '80%', '80%', '60%']}>
      <Text color="brand.stratos" fontSize={['xl', 'xl', 'xl', '2xl']}>
        Usando Programación Dinámica
      </Text>
      <Link to={`/`}>
        <Button
          leftIcon={<ArrowBackIcon />}
          bg="brand.morningGlory"
          color="brand.stratos"
        >
          Volver
        </Button>
      </Link>
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
