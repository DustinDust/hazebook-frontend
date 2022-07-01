import {
  Avatar,
  Button,
  Center,
  Flex,
  Image,
  StackDivider,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import {
  FaAngleLeft,
  FaEllipsisV,
  FaHeart,
  FaRegComment,
  FaRegHeart,
} from 'react-icons/fa';

interface CardPropsType {
  children?: React.ReactNode;
  post: {
    user: { userId: number; name: string; avatarUrl?: string };
    likes: { userId: number }[];
    postedTime: string;
    text: string;
    imgUrl?: string;
    comments: {
      user: { avatarUrl?: string; name: string };
      commentedAt: string;
      text: string;
    }[];
  };
}

export const PostCard = (props: CardPropsType) => {
  const [tabIndex, setTabIndex] = useState(0);
  const commentTextSize = useBreakpointValue({ base: 'sm', md: 'md' });
  const commentDateTextSize = useBreakpointValue({
    base: 'xx-small',
    md: 'xs',
  });

  const handleCommentTabActivated = () => {
    setTabIndex(1);
  };

  const handleBackToPost = () => {
    setTabIndex(0);
  };

  const isLiked = () => {
    return !!props.post.likes.find((vl) => vl.userId === 1);
  };

  return (
    <Tabs index={tabIndex}>
      <TabPanels>
        <TabPanel>
          <Flex
            maxW={'calc(100vw - 2rem)'}
            direction={'column'}
            backgroundColor={'white'}
            width='xl'
            mx={'auto'}
            px='7'
            py='3'
            borderRadius={'lg'}
            gap='6'
          >
            <Flex
              direction={'row'}
              justifyContent={'space-between'}
              align={'center'}
            >
              <Flex
                direction={'row'}
                justify={'flex-start'}
                align={'center'}
                gap={'5'}
              >
                <Avatar
                  name={props.post.user.name}
                  src={props.post.user.avatarUrl}
                  borderRadius={'xl'}
                  size='md'
                />
                <Flex gap={'1'} direction='column'>
                  <Text fontWeight={'900'}>{props.post.user.name}</Text>
                  <Text fontSize={'xs'} textColor={'gray.400'}>
                    {props.post.postedTime}
                  </Text>
                </Flex>
              </Flex>
              <Button bg={'white'}>
                <FaEllipsisV />
              </Button>
            </Flex>
            <Text>Good evening everyone!</Text>
            <Center borderRadius='3xl'>
              <Image
                borderRadius={'3xl'}
                src={props.post.imgUrl}
                alt='post image'
                boxShadow={'2xl'}
              />
            </Center>
            <Flex direction={'row'}>
              <Button
                leftIcon={
                  isLiked() ? <FaHeart fill='#DB5A6B' /> : <FaRegHeart />
                }
                backgroundColor='transparent'
                color={isLiked() ? '#DB5A6B' : 'black'}
              >
                <Text fontSize={'sm'}>{props.post.likes.length}</Text>
              </Button>
              <Button
                leftIcon={<FaRegComment />}
                backgroundColor='transparent'
                onClick={handleCommentTabActivated}
              >
                <Text fontSize={'sm'}>{props.post.comments.length}</Text>
              </Button>
            </Flex>
          </Flex>
        </TabPanel>
        <TabPanel>
          <Flex
            maxW={'calc(100vw - 2rem)'}
            direction={'column'}
            backgroundColor={'white'}
            width='xl'
            mx={'auto'}
            px='7'
            py='3'
            borderRadius={'lg'}
            gap='6'
            maxH={'xl'}
            overflowY='scroll'
          >
            <Flex
              direction={'row'}
              justifyContent={'flex-start'}
              alignItems={'baseline'}
              gap={'3'}
            >
              <Button
                onClick={handleBackToPost}
                variant={'link'}
                _hover={{
                  textColor: '#2C3639',
                }}
              >
                <Flex direction={'row'} gap={'2'} alignItems={'center'}>
                  <FaAngleLeft />
                  <Text lineHeight={'base'}>Back to post</Text>
                </Flex>
              </Button>
            </Flex>
            <VStack
              gap={'2'}
              divider={<StackDivider />}
              alignItems='start'
              overflowX={'scroll'}
              paddingEnd='1.5'
            >
              {props.post.comments.map((cO) => {
                return (
                  <Flex width={'100%'} direction={'column'} gap={'3'}>
                    <Flex
                      direction={'row'}
                      gap={'2'}
                      alignItems={'center'}
                      justifyContent={'space-between'}
                      width='full'
                    >
                      <Flex direction={'row'} alignItems='center' gap={'2'}>
                        <Avatar
                          src={cO.user.avatarUrl}
                          name={cO.user.name}
                          size='xs'
                        />
                        <Text fontSize={commentTextSize}>{cO.user.name}</Text>
                      </Flex>
                      <Text
                        fontSize={commentDateTextSize}
                        textColor={'gray.500'}
                      >
                        {cO.commentedAt}
                      </Text>
                    </Flex>
                    <Text fontSize={commentTextSize} fontWeight={'thin'}>
                      {cO.text}
                    </Text>
                  </Flex>
                );
              })}
            </VStack>
          </Flex>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
