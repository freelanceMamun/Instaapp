import {
  Box,
  Container,
  Flex,
  Skeleton,
  SkeletonCircle,
  VStack,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import Feedpost from './Feedpost';
import { useState } from 'react';
const Feedposts = () => {
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 2000);
  }, []);

  return (
    <Container maxW={'container.sm'} py={1} px={0}>
      {isLoading &&
        [0, 2, 3].map((_, index) => {
          return (
            <VStack key={index} gap={4} alignItems={'flex-start'} mb={10}>
              <Flex gap={2}>
                <SkeletonCircle size={10}></SkeletonCircle>
                <VStack gap={2} alignItems={'flex-start'}>
                  <Skeleton height={'10px'} w={'200px'}></Skeleton>
                  <Skeleton height={'10px'} w={'200px'}></Skeleton>
                </VStack>
              </Flex>
              <Skeleton w={'full'}>
                <Box height={'500px'} borderRadius={'5px'}></Box>
              </Skeleton>
            </VStack>
          );
        })}
      <Feedpost username={'Brok'} img={''}></Feedpost>
      <Feedpost
        username={'Jon Doe'}
        img={
          'https://media.istockphoto.com/id/1033164992/photo/teenage-boy-listening-to-music-while-doing-homework.jpg?s=612x612&w=0&k=20&c=ZWuzj9h6dsY2Frv5Av5ixodNsfjju_ZFm9WhZhvM7YE='
        }
        avatar={
          'https://media.istockphoto.com/id/1033164992/photo/teenage-boy-listening-to-music-while-doing-homework.jpg?s=612x612&w=0&k=20&c=ZWuzj9h6dsY2Frv5Av5ixodNsfjju_ZFm9WhZhvM7YE='
        }
      ></Feedpost>
      <Feedpost username={'Alex'}></Feedpost>
    </Container>
  );
};

export default Feedposts;
