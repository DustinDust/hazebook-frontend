import {
  Avatar,
  Box,
  Divider,
  Flex,
  Hide,
  LinkBox,
  LinkOverlay,
  StackDivider,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { FcSettings, FcInfo } from 'react-icons/fc';
import { GoBell } from 'react-icons/go';
import { VscGithub } from 'react-icons/vsc';

interface MenuStackProps {
  children?: React.ReactElement;
}

const MenuStackItem = (props: {}) => {
  return <></>;
};

export const MenuStack = (props: MenuStackProps) => {
  return (
    <Hide breakpoint='(max-width: 1280px)'>
      <Box position={'fixed'} left={'0'} px={'4'} py={'4'}>
        <VStack>
          <LinkBox
            _hover={{
              backgroundColor: 'gray.200',
            }}
            width={'xs'}
            padding='2'
            borderRadius={'lg'}
          >
            <RouterLink to={'/profile/me'}>
              <LinkOverlay>
                <Flex direction={'row'} gap={'3'} alignItems={'center'}>
                  <Avatar name={'Shuy'} size='sm' />
                  <Text>Shuy</Text>
                </Flex>
              </LinkOverlay>
            </RouterLink>
          </LinkBox>

          <LinkBox
            _hover={{
              backgroundColor: 'gray.200',
            }}
            width={'xs'}
            padding='2'
            borderRadius={'lg'}
          >
            <RouterLink to={'/notifications'}>
              <LinkOverlay>
                <Flex direction={'row'} gap={'5'} alignItems={'center'}>
                  <GoBell fill='#f1c232' size={25} />
                  <Text>Notification</Text>
                </Flex>
              </LinkOverlay>
            </RouterLink>
          </LinkBox>

          <LinkBox
            _hover={{
              backgroundColor: 'gray.200',
            }}
            width={'xs'}
            padding='2'
            borderRadius={'lg'}
          >
            <RouterLink to={'/settings'}>
              <LinkOverlay>
                <Flex direction={'row'} gap={'5'} alignItems={'center'}>
                  <FcSettings size={'25'} />
                  <Text>Settings</Text>
                </Flex>
              </LinkOverlay>
            </RouterLink>
          </LinkBox>
          <Divider />
          <LinkBox
            _hover={{
              backgroundColor: 'gray.200',
            }}
            width={'xs'}
            padding='2'
            borderRadius={'lg'}
          >
            <RouterLink to={'/info'}>
              <LinkOverlay>
                <Flex direction={'row'} gap={'5'} alignItems={'center'}>
                  <FcInfo size={'25'} />
                  <Text>Info</Text>
                </Flex>
              </LinkOverlay>
            </RouterLink>
          </LinkBox>

          <LinkBox
            _hover={{
              backgroundColor: 'gray.200',
            }}
            width={'xs'}
            padding='2'
            borderRadius={'lg'}
          >
            <RouterLink to={'/github'}>
              <LinkOverlay>
                <Flex direction={'row'} gap={'5'} alignItems={'center'}>
                  <VscGithub size={'25'} />
                  <Text>Github</Text>
                </Flex>
              </LinkOverlay>
            </RouterLink>
          </LinkBox>
        </VStack>
      </Box>
    </Hide>
  );
};
