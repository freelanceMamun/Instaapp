import { Box, Container, Flex, Image, VStack } from '@chakra-ui/react';
import AuthFrom from '../../components/AuthForm/AuthFrom';

const Authpage = () => {
  

  return (
    <Flex minH={'100vh'} alignItems={'center'} justifyContent={'center'} px={4}>
      <Container maxW={'container.lg'} padding={0}>
        <Flex justifyContent={'center'} alignItems={'center'} gap={10}>
          {/* Left hand-side */}

          <Box display={{ base: 'none', md: 'block' }}>
            <Image src="/Loginimage.png" h={500} alt="phone img"></Image>
          </Box>

          {/* Right hand-side */}

          <VStack spacing={4} align={'stretch'}>
            <AuthFrom></AuthFrom>
            <Box textAlign={'center'}>Get the app.</Box>
            <Flex gap={5} justifyContent={'center'}>
              <Image
                h={'14'}
                src="/playstore.png"
                alt="
            "
              ></Image>

              <Image
                h={'16'}
                src="/AppleLogo.png"
                alt="
            "
              ></Image>
            </Flex>
          </VStack>
        </Flex>
      </Container>
    </Flex>
  );
};

export default Authpage;
