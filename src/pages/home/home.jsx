import { Box, Container, Flex } from '@chakra-ui/react';

import Feedposts from '../../components/Feedpost/Feedposts';
const Home = () => {
  return (
    <Container maxW={'container.lg'}>
      <Flex gap={20}>
        <Box flex={2} py={10}>
          <Feedposts></Feedposts>
        </Box>
        <Box
          flex={3}
          mr={20}
          display={{ base: 'none', lg: 'block' }}
          maxW={'300px'}
          border={'1px solid red'}
        >
          Suggest
        </Box>
      </Flex>
    </Container>
  );
};

export default Home;
