import {
  Box,
  VStack,
  Image,
  Input,
  Text,
  Button,
  Flex,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const AuthFrom = () => {
  const [islogin, setisLogin] = useState(true);

  const [inputs, setInputs] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();

  const handelAuth = () => {
    if (!inputs.email || !inputs.password || !inputs.confirmPassword) {
      alert('Please Login');
      return;
    }
    navigate('/');
  };

  return (
    <>
      <Box border={'1px solid gray'} borderRadius={5} padding={4}>
        <VStack spacing={4}>
          <Image
            w={200}
            h={75}
            borderRadius={5}
            objectFit={'cover'}
            src="/instagramLogo.png"
            alt="Instagram-logo "
            cursor={'pointer'}
          ></Image>

          <Input
            value={inputs.email}
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
            borderRadius={3}
            placeholder="Email"
            type="email"
            fontSize={14}
          ></Input>
          <Input
            value={inputs.password}
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
            borderRadius={3}
            placeholder="password"
            type="password"
            fontSize={14}
          ></Input>

          {!islogin ? (
            <Input
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
              borderRadius={3}
              placeholder="Confim Password"
              type="password"
              fontSize={14}
            ></Input>
          ) : null}

          <Button
            onClick={handelAuth}
            borderRadius={3}
            _hover={{ background: '#fff' }}
            w={'full'}
            fontSize={14}
            colorScheme="blue"
          >
            {islogin ? 'Login' : 'Sign Up'}
          </Button>

          <Flex
            justifyContent={'center'}
            my={4}
            alignItems={'center'}
            gap={1}
            w={'full'}
          >
            <Box flex={2} h={'1px'} bg={'gray.400'}></Box>
            <Text mx={1} color={'white'}>
              OR
            </Text>
            <Box flex={2} h={'1px'} bg={'gray.400'}></Box>
          </Flex>

          <Flex
            alignItems={'center'}
            w={'full'}
            justifyContent={'center'}
            cursor={'pointer'}
          >
            <Image
              h={8}
              src="https://static.vecteezy.com/system/resources/previews/013/760/951/non_2x/colourful-google-logo-in-dark-background-free-vector.jpg"
            ></Image>
            <Text color={'blue.500'}>Log in with google</Text>
          </Flex>
        </VStack>
      </Box>
      <Box border={'1px solid gray'} borderRadius={4} padding={4}>
        <Flex alignItems={'center'} justify={'center'}>
          <Box mx={2} fontSize={14}>
            {islogin ? "Don't have an account" : 'Already have an account?'}
          </Box>
          <Box
            onClick={() => {
              setisLogin(!islogin);
            }}
            color={'blue.500'}
            cursor={'pointer'}
          >
            {islogin ? 'Sign Up' : 'Log In'}
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default AuthFrom;
