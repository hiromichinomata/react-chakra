import './App.css';
import { Box } from '@chakra-ui/react';

function App() {
  return (
    <Box>
      <Box bgColor="orange.500" w="200px" h="50px" color="white" p="4">
        This is the Box
      </Box>
      <Box bgColor="starbucks.500" w="200px" h="50px" color="white" p="4" mt="4">
        This is the Box
      </Box>
    </Box>
);
}

export default App;
