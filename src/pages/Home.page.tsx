import { Box, HStack } from '@chakra-ui/react';
import React from 'react';
import { Header } from '../components/Header';
import { PostList } from '../components/Posts/PostList';
import { MenuStack } from '../components/UI';

export const HomePage: React.FC = (props) => {
  return (
    <>
      <Box position={'sticky'} top={'0'} zIndex={'popover'}>
        <Header />
      </Box>
      <HStack justifyContent={'center'} alignItems={'start'}>
        <MenuStack />
        <PostList />
      </HStack>
    </>
  );
};
