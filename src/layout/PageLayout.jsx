import Sidebar from '../components/Sidebar/Sidebar';
import { Flex, Box } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
const PageLayout = ({ children }) => {
  const { pathname } = useLocation();
  return (
    <Flex>
      {/* ==== Side bar left  */}
      {pathname !== '/auth' ? (
        <Box>
          <Sidebar></Sidebar>
        </Box>
      ) : null}

      <Box flex={1} w={{ base: 'calc(100% - 80px)', md: 'calc(100%-240px)' }}>
        {children}
      </Box>

      {/* ==== the page content on the right */}
    </Flex>
  );
};

export default PageLayout;
