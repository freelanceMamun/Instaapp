import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Avatar, Text, Flex, Link } from '@chakra-ui/react';

const SuggestHeader = () => {
  return (
    <Flex alignItems={'center'} justifyContent={'space-between'} w={'full'}>
      <Flex alignItems="center" gap={2}>
        <Avatar name="As programmer" size={'md'} src=""></Avatar>
      </Flex>
      <Text fontSize={14} fontWeight={500}>
        A Programmer
      </Text>
      <Link
        fontSize={18}
        fontWeight={500}
        cursor={'pointer'}
        as={RouterLink}
        textDecoration={'none'}
        to={'/auth'}
        style={{ textDecoration: 'none' }}
        color={'blue.400'}
      >
        Log out
      </Link>
    </Flex>
  );
};

export default SuggestHeader;
