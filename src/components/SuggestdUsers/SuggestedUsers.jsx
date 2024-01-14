import { Flex, VStack, Text, Box, Link } from '@chakra-ui/react';

import SuggestHeader from './suggestHeader';
import Suggesteduser from './suggesteduser';
const SuggestedUsers = () => {
  return (
    <VStack py={6} px={6} gap={4}>
      <SuggestHeader></SuggestHeader>

      <Flex w={'full'} alignItems={'center'} justifyContent={'space-between'}>
        <Text fontSize={12} fontWeight={500} color={'gray.400'}>
          Suggested For Your
        </Text>
        <Text
          fontSize={12}
          fontWeight={'bold'}
          color={'gray.500'}
          cursor={'pointer'}
        >
          See All
        </Text>
      </Flex>
      <Suggesteduser></Suggesteduser>
      <Suggesteduser></Suggesteduser>
      <Suggesteduser></Suggesteduser>

      <Box alignSelf={'start'} gap={3} display={"flex"} fontSize={12} color={'gray.500'} mt={5}>
        © 2024 Instagram, Inc.
        <Link>Devprohub.com</Link>
      </Box>
    </VStack>
  );
};

export default SuggestedUsers;
