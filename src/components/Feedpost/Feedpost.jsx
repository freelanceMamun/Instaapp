import { Box, Img } from '@chakra-ui/react';
import PoostHeader from './PoostHeader';
import PostFooter from './PostFooter';
const Feedpost = () => {
  return (
    <>
      <PoostHeader></PoostHeader>
      <Box>
        <Img src="https://images.pexels.com/photos/3808822/pexels-photo-3808822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></Img>
      </Box>
      <PostFooter></PostFooter>
    </>
  );
};

export default Feedpost;
