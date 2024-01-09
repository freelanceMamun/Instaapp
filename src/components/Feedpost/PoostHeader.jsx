import { Avatar, Box, Flex } from '@chakra-ui/react';
import React from 'react';

const PoostHeader = () => {
  return (
    <Flex justifyContent={'space-between'} alignItems={'center'} w="full">
      <Flex alignItems={'center'} gap={2}>
        <Avatar
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fphotos%2Fman&psig=AOvVaw00MpgvPojsyEgPOCzf4H5T&ust=1704823136240000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLjp2p6vzoMDFQAAAAAdAAAAABAD"
          alt="User profile pic"
          size={'sm'}
        ></Avatar>
      </Flex>
    </Flex>
  );
};

export default PoostHeader;
