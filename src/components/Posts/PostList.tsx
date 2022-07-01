import { VStack } from '@chakra-ui/react';
import React from 'react';
import { PostCard } from '../UI';

export interface PostListPropsType {
  children?: React.ReactNode;
}

const post = {
  user: {
    userId: 1,
    name: 'Shuy',
    avatarUrl: undefined,
  },
  likes: [
    { userId: 1 },
    { userId: 2 },
    { userId: 3 },
    { userId: 4 },
    { userId: 5 },
    { userId: 6 },
    { userId: 7 },
    { userId: 8 },
  ],
  postedTime: '09:24 PM',
  text: 'Good evening everyone',
  imgUrl:
    'https://play-lh.googleusercontent.com/c1rV9S8Rta5FdmF-7fFb-r0r6OoYpRc9LJAzXUylHtX1SsTR7tzgDAUP4YOt7FRZLg',
  comments: [
    {
      user: {
        name: 'Cmmenter',
        avatarUrl: undefined,
      },
      commentedAt: '09:25 PM',
      text: 'I love this picture',
    },
    {
      user: {
        name: 'Likeor',
        avatarUrl: undefined,
      },
      commentedAt: '09:26 PM',
      text: 'Good evening Shuy!',
    },
    {
      user: {
        name: 'bot',
        avatarUrl: undefined,
      },
      commentedAt: '09:29 PM',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis posuere nisl. Vivamus malesuada neque eget porta fermentum. Integer et ante nulla. Quisque euismod interdum nisl, et feugiat urna vestibulum ac. Sed molestie mauris interdum libero commodo, eget posuere mauris volutpat. Vivamus scelerisque pellentesque consequat. Sed sit amet pharetra est, a fermentum turpis. Ut tempor hendrerit nulla, convallis commodo risus volutpat porta. Pellentesque commodo pulvinar elit sed condimentum. Donec vitae hendrerit velit. ',
    },
  ],
};

export const PostList = (props: PostListPropsType) => {
  const posts = [post, post, post];
  return (
    <VStack>
      {posts.map((p) => {
        return <PostCard post={p} />;
      })}
    </VStack>
  );
};
