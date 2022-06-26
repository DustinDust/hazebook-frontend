import {
  Box,
  Center,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  useBreakpointValue,
} from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';
import styles from './Header.module.scss';
import { HeaderMenu } from './HeaderMenu';

export const Header = (props: any) => {
  const searchBarVar = useBreakpointValue({ base: 'flushed', sm: 'outline' });

  return (
    <Flex
      className={styles.headerContainer}
      backgroundColor='white'
      backdropBlur={'none'}
      borderBottom='1px'
      borderBottomColor={'gray.200'}
      py={'3'}
      pr={'40'}
      pl={'40'}
      borderRadius={'md'}
      direction='row'
      gap='10'
    >
      <Center className={styles.logoContainer}>
        <Heading size={'md'} className={styles.logo}>
          {'<HazeBook />'}
        </Heading>
      </Center>
      <Box flexGrow={1} px='40' className={styles.searchBarContainer}>
        <InputGroup>
          <InputLeftElement>
            <FaSearch />
          </InputLeftElement>
          <Input
            // size={searchBarSize}
            variant={searchBarVar}
            placeholder='Type something to search'
            focusBorderColor='#2f855a'
          />
        </InputGroup>
      </Box>
      <HeaderMenu usename='Snoopy' />
    </Flex>
  );
};
