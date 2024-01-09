import { Box, Flex, Link, Tooltip } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import {
  InstagramLogo,
  InstagramMobileLogo,
  CreatePostLogo,
  SearchLogo,
  NotificationsLogo,
} from '../../assets/constents';
import { AiFillHome, AiOutlineUser } from 'react-icons/ai';
import { BiLogOut } from 'react-icons/bi';

const Sidebar = () => {
  const sidebar = [
    {
      icon: <AiFillHome size={25}></AiFillHome>,
      name: 'Home',
      link: '/',
    },
    {
      icon: <SearchLogo size={25}></SearchLogo>,
      name: 'Search',
      link: 'Search',
    },
    {
      icon: <NotificationsLogo size={25}></NotificationsLogo>,
      name: 'Notifications',
      link: 'notifications',
    },
    {
      icon: <CreatePostLogo size={25}></CreatePostLogo>,
      name: 'Create',
      link: 'create',
    },
    {
      icon: <AiOutlineUser size={25}></AiOutlineUser>,
      name: 'Profile',
      link: 'profile',
    },
  ];

  return (
    <Box
      height={'100vh'}
      borderRight={'1px solid'}
      borderColor={'whiteAlpha:300'}
      py={8}
      position={'sticky'}
      top={0}
      left={0}
      px={{ base: 2, md: 4 }}
    >
      <Flex direction={'column'} gap={10} w={'full'} height={'full'}>
        <Link
          to={'/'}
          as={RouterLink}
          pl={2}
          display={{ base: 'none', md: 'block' }}
        >
          <InstagramLogo></InstagramLogo>
        </Link>

        <Link
          to={'/'}
          as={RouterLink}
          pl={2}
          display={{ base: 'block', md: 'none' }}
        >
          <InstagramMobileLogo></InstagramMobileLogo>
        </Link>

        <Flex direction={'column'} gap={5} cursor={'pointer'}>
          {sidebar.map((item, index) => {
            return (
              <Tooltip
                key={index}
                hasArrow
                label={item.name}
                placement="right"
                ml={1}
                openDelay={500}
                display={{ base: 'block', md: 'none' }}
              >
                <Link
                  display={'flex'}
                  to={item.link || null}
                  as={RouterLink}
                  alignItems={'center'}
                  gap={4}
                  _hover={{ bg: 'whiteAlpha.400' }}
                  borderRadius={6}
                  p={2}
                  w={'full'}
                >
                  {item.icon}
                  <Box display={{ base: 'none', md: 'block' }}>{item.name}</Box>
                </Link>
              </Tooltip>
            );
          })}
        </Flex>
        <Tooltip
          hasArrow
          label={'Logout'}
          placement="right"
          ml={1}
          openDelay={500}
          display={{ base: 'block', md: 'none' }}
        >
          <Link
            display={'flex'}
            to={'/auth'}
            as={RouterLink}
            alignItems={'center'}
            gap={4}
            _hover={{ bg: 'whiteAlpha.400' }}
            borderRadius={6}
            p={2}
            w={'full'}
            mt={'auto'}
          >
            <BiLogOut></BiLogOut>
            <Box display={{ base: 'none', md: 'block' }}>{'Logout'}</Box>
          </Link>
        </Tooltip>
      </Flex>
    </Box>
  );
};

export default Sidebar;
