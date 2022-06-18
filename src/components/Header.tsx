import {
  Box,
  Center,
  Flex,
  Heading,
  MenuIcon,
  useMediaQuery,
} from '@chakra-ui/react';
import { FaBars, FaGithub } from 'react-icons/fa';

export const Header: React.FC = (props) => {
  return (
    <Box
      backgroundColor='white'
      backdropBlur={'none'}
      boxShadow={'lg'}
      py={'3'}
      pr={'6'}
      pl={'16'}
      borderRadius={'md'}
      display='flex'
      justifyContent={'space-between'}
    >
      <Center>
        <Heading size={'lg'}>{'<HazeBook />'}</Heading>
      </Center>
      <Flex direction={'row'} gap={5}>
        <Center>
          <FaGithub />
        </Center>
        <Center>
          <FaBars />
        </Center>
        <Center></Center>
      </Flex>
    </Box>
  );
};
