import { Avatar, Box, Flex, Button, Text } from '@chakra-ui/react';

// import { SkeletonCircle } from '@chakra-ui/react';

const PoostHeader = ({ username, avatar }) => {
  return (
    <Flex
      justifyContent={'space-between'}
      alignItems={'center'}
      w={'full'}
      my={4}
    >
      <Flex alignItems={'center'} gap={2}>
        <Avatar src={avatar} alt="user profile pic" size={'sm'} />

        {/* {creatorProfile ? (
          <Link to={`/${''}`}>
            <Avatar src={''} alt="user profile pic" size={'sm'} />
          </Link>
        ) : (
          <SkeletonCircle size="10" />
        )} */}

        <Flex fontSize={12} fontWeight={'bold'} gap="2">
          {username}
          {/* {creatorProfile ? (
            <Link to={`/${creatorProfile.username}`}>
              {creatorProfile.username}
            </Link>
          ) : (
            <Skeleton w={'100px'} h={'10px'} />
          )} */}

          <Box color={'gray.500'}>• M</Box>
        </Flex>
      </Flex>
      <Box cursor={'pointer'}>
        <Button
          size={'xs'}
          bg={'transparent'}
          fontSize={12}
          color={'blue.500'}
          fontWeight={'bold'}
          _hover={{
            color: 'white',
          }}
          transition={'0.2s ease-in-out'}
          // onClick={handleFollowUser}
          // isLoading={isUpdating}
        >
          {/* {isFollowing ? 'Unfollow' : 'Follow'} */}
          <Text>UnFollow</Text>
        </Button>
      </Box>
    </Flex>
  );
};

export default PoostHeader;
