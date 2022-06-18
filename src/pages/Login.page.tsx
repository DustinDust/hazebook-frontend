import {
  Center,
  Fade,
  Flex,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useBreakpointValue,
} from '@chakra-ui/react';
import React from 'react';
import { LoginForm, SignUpForm } from '../components/Forms';

export const LoginPage: React.FC = (props) => {
  const paddingsX = useBreakpointValue({ sm: '5', md: '10', xs: '2' });
  const tabsVariants = useBreakpointValue({
    xs: 'soft-rounded',
    sm: 'soft-rounded',
    md: 'enclosed',
  });
  return (
    <>
      <Center>
        <Flex
          justifyContent={'center'}
          alignItems='center'
          width={'fit-content'}
          backgroundColor='white'
          py='5'
          borderRadius='lg'
          boxShadow={'lg'}
        >
          <Tabs
            colorScheme={'green'}
            variant={tabsVariants}
            size='sm'
            isLazy
            paddingX={paddingsX}
          >
            <TabList>
              <Tab>
                <Heading size='sm'>Sign-in</Heading>
              </Tab>
              <Tab>
                <Heading size='sm'>Sign-up</Heading>
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Fade in={true} transition={{ enter: { duration: 0.7 } }}>
                  <LoginForm />
                </Fade>
              </TabPanel>
              <TabPanel>
                <Fade in={true} transition={{ enter: { duration: 0.7 } }}>
                  <SignUpForm />
                </Fade>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Center>
    </>
  );
};
