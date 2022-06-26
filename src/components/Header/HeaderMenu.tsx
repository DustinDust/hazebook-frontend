import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Avatar,
  Badge,
  Box,
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Hide,
  Link,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  Show,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import {
  FaBars,
  FaBell,
  FaCog,
  FaGithub,
  FaInfoCircle,
  FaSignOutAlt,
  FaUser,
} from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';
import styles from './HeaderMenu.module.scss';

interface MenuProps {
  children?: React.ReactNode;
  usename: string;
  avatarImage?: string;
}

export const HeaderMenu = (props: MenuProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex direction={'row'} gap={7}>
      <Hide below='sm'>
        <Menu placement='bottom-end'>
          <MenuButton>
            <Center>
              <Avatar
                name={props.usename}
                textColor={'white'}
                size='sm'
                src={props.avatarImage}
                cursor={'pointer'}
                position='relative'
              >
                {' '}
                <Badge
                  variant={'solid'}
                  colorScheme='green'
                  position={'absolute'}
                  bottom='-1'
                  right='-1'
                  fontSize='0.75em'
                  borderRadius='full'
                >
                  <motion.div>2</motion.div>
                </Badge>
              </Avatar>
            </Center>
          </MenuButton>
          <MenuList>
            <MenuGroup title='Profile' cursor='default'>
              <MenuItem icon={<FaUser />}>Your Profile</MenuItem>
              <MenuItem icon={<FaBell />}>
                Notification{' '}
                <Badge variant={'solid'} colorScheme='green'>
                  {'2'}
                </Badge>
              </MenuItem>
              <MenuItem icon={<FaCog />}>Setting</MenuItem>
              <MenuItem icon={<FaSignOutAlt />}>Sign out</MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton>
            <Center>
              <FaBars size={'17'} />
            </Center>
          </MenuButton>
          <MenuList>
            <MenuGroup title='HazeBook' cursor='default'>
              <MenuItem icon={<FaInfoCircle />}>About</MenuItem>
              <MenuItem icon={<FaGithub />}>Source Code</MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
      </Hide>
      <Show below='sm'>
        <Center
          px={'1rem'}
          _hover={{
            backgroundColor: '#EEEEEE',
          }}
          onClick={onOpen}
        >
          <Center position={'relative'}>
            <FaBars size={20} />
            <Badge
              variant={'solid'}
              colorScheme='green'
              position={'absolute'}
              bottom='-2'
              right='-1.5'
              fontSize='xx-small'
              borderRadius={'full'}
            >
              2
            </Badge>
          </Center>
        </Center>
        <Drawer isOpen={isOpen} placement='right' onClose={onClose} size='full'>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>{'<Hazebook />'}</DrawerHeader>
            <DrawerBody>
              <Accordion allowToggle>
                <AccordionItem>
                  <AccordionButton>
                    <Box flex='1' display={'flex'} textAlign={'left'} gap='5'>
                      Profile
                      <Badge
                        variant={'solid'}
                        colorScheme='green'
                        height={'fit-content'}
                        alignSelf='center'
                      >
                        2
                      </Badge>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel>
                    <Flex
                      as={RouterLink}
                      to='/profile'
                      direction={'row'}
                      alignItems={'baseline'}
                      gap='1rem'
                    >
                      <FaUser />
                      <Text>{props.usename}</Text>
                    </Flex>
                  </AccordionPanel>

                  <AccordionPanel>
                    <Flex
                      as={RouterLink}
                      to='/notification'
                      direction={'row'}
                      alignItems={'baseline'}
                      gap='1rem'
                    >
                      <FaBell />
                      <Text>{'Notification'}</Text>
                      <Badge variant={'solid'} colorScheme='green'>
                        2
                      </Badge>
                    </Flex>
                  </AccordionPanel>
                  <AccordionPanel>
                    <Flex
                      as={RouterLink}
                      to='/settings'
                      direction={'row'}
                      alignItems={'baseline'}
                      gap='1rem'
                    >
                      <FaCog />
                      <Text>{'Settings'}</Text>
                    </Flex>
                  </AccordionPanel>
                  <AccordionPanel>
                    <Flex
                      as={RouterLink}
                      to='/home'
                      direction={'row'}
                      alignItems={'baseline'}
                      gap='1rem'
                    >
                      <FaSignOutAlt />
                      <Text>{'Sign-out'}</Text>
                    </Flex>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionButton>
                    <Box flex='1' textAlign={'left'}>
                      About
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel>
                    <Flex
                      as={RouterLink}
                      to='/about'
                      direction={'row'}
                      alignItems={'baseline'}
                      gap='1rem'
                    >
                      <FaInfoCircle />
                      <Text>{'About Hazebook'}</Text>
                    </Flex>
                  </AccordionPanel>
                  <AccordionPanel>
                    <Flex
                      as={Link}
                      href='https://github.com/DustinDust/hazebook-frontend'
                      direction={'row'}
                      alignItems={'baseline'}
                      gap='1rem'
                    >
                      <FaGithub />
                      <Text>{'Source Code'}</Text>
                    </Flex>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </DrawerBody>
            <DrawerFooter>Dustin©2022</DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Show>
    </Flex>
  );
};
