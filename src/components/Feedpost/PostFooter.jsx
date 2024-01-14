import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';

import {
  CommentLogo,
  NotificationsLogo,
  UnlikeLogo,
} from '../../assets/constents';

const PostFooter = ({ username }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setlikes] = useState(1000);
  const handelClick = () => {
    if (liked) {
      setLiked(false);
      setlikes(likes - 1);
    }
  };

  return (
    <Box mt={4} mb={4}>
      <Flex gap={5} alignItems={'center'} w="full" mt={'auto'} my={5}>
        <Box onClick={handelClick} cursor={'pointer'} fontSize={18}>
          {!liked ? (
            <NotificationsLogo></NotificationsLogo>
          ) : (
            <UnlikeLogo></UnlikeLogo>
          )}
        </Box>
        <Box cursor={'pointer'} fontSize={18}>
          <CommentLogo />
        </Box>
      </Flex>
      <Text fontWeight={600} fontSize={'sm'}>
        {likes} Likes
      </Text>
      <Text as={'span'} fontWeight={400} fontSize={'sm'} marginRight={1}>
        {username}
      </Text>
      <Text as={'span'} fontWeight={400} fontSize={'sm'}>
        Feeling good
      </Text>
      <Text color={'gray'} fontSize={'sm'}>
        View all 1000 comments
      </Text>

      <Flex
        alignItems={'center'}
        gap={2}
        justifyContent={'space-between'}
        w={'full'}
      >
        <InputGroup>
          <Input variant={'flushed'} placeholder={'Add a comment..'}></Input>

          <InputRightElement>
            <Button
              fontSize={14}
              color={'blue.500'}
              fontWeight={600}
              cursor={'pointer'}
              _hover={{ color: 'white' }}
              bg={'transparent'}
            >
              Post
            </Button>
          </InputRightElement>
        </InputGroup>
      </Flex>
    </Box>
  );
};

export default PostFooter;
