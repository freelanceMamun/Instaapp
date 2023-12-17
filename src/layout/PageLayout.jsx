import Sidebar from '../components/Sidebar/Sidebar';
import { Flex, Box } from '@chakra-ui/react';
const PageLayout = ({ children }) => {
  return (
    <Flex>
      {/* ==== Side bar left  */}
      <Box>
        <Sidebar></Sidebar>
      </Box>

      {/* ==== the page content on the right */}
      <Box>{children}</Box>
    </Flex>
  );
};

export default PageLayout;
