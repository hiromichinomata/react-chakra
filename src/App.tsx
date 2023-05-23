import './App.css';
import { Box, Center, Stack } from '@chakra-ui/react';

function App() {
  return (
    <Box>
      <Center bgColor="orange.500" color="white" p="4">
        This is the Box
      </Center>
      <Stack direction="row" spacing="12">
        <Box bgColor="orange.500" w="200px" h="50px" color="white" p="4">
          This is the Box
        </Box>
        <Box bgColor="starbucks.500" w="200px" h="50px" color="white" p="4" mt="4">
          This is the Box
        </Box>
      </Stack>
    </Box>
);
}

export default App;
