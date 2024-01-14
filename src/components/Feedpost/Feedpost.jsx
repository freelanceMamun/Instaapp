import { Box, Img } from '@chakra-ui/react';
import PoostHeader from './PoostHeader';
import PostFooter from './PostFooter';
const Feedpost = ({ img, username, avatar }) => {
  return (
    <>
      <PoostHeader username={username} avatar={avatar}></PoostHeader>
      <Box my={2} borderRadius={3} overflow={'hidden'}>
        <Img
          src={`${
            img
              ? img
              : 'https://images.pexels.com/photos/3808822/pexels-photo-3808822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          }`}
        ></Img>
      </Box>
      <PostFooter username={username}></PostFooter>
    </>
  );
};

export default Feedpost;
