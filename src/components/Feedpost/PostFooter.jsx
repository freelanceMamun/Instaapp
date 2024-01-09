import { Box, Flex, Text } from '@chakra-ui/react';
import { useState } from 'react';

import {
  CommentLogo,
  NotificationsLogo,
  UnlikeLogo,
} from '../../assets/constents';

const PostFooter = () => {
  const [liked, setLiked] = useState(false);
  const [likes, setlikes] = useState(1000);
  const handelClick = () => {
    if (liked) {
      setLiked(false);
      setlikes(likes - 1);
    }
  };

  return (
    <>
      <Flex gap={5} alignItems={'center'} w="full" mt={'auto'} mb={2}>
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
      <Text as={'span'} fontWeight={400} fontSize={'sm'}>
        Mamun devprohub
      </Text>
      <Text as={'span'} fontWeight={400} fontSize={'sm'}>
        Feeling good
      </Text>
      <Text color={'gray'} fontSize={'sm'}>
        View all 1000 comments
      </Text>
    </>
  );
};

export default PostFooter;
