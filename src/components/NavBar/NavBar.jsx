import {
    Box,
    Flex,
    Avatar,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useColorModeValue,
    Stack,
    useColorMode,
    Center,
  } from '@chakra-ui/react'
  import { MoonIcon, SunIcon } from '@chakra-ui/icons';
  import myImage from '/src/assets/logo.jpeg';
  import {CartWidget} from '../CartWidget';
export const NavBar = ()=>{
    const { colorMode, toggleColorMode } = useColorMode()
    return(
        <>
        <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            {/* {<Box>Ríos de Córdoba</Box>} */}
            { <Box pt={15}>Ríos y lagos de Córdoba
               <img width={'70px'} height={'70px'} src={myImage} alt="Ríos de Córdoba"/>
            </Box> }
            <Flex alignItems={'center'}>
              <Stack direction={'row'} spacing={7}>
              <CartWidget />
                <Button onClick={toggleColorMode}>
                  {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                </Button>
  
                <Menu>
                  <MenuButton
                    as={Button}
                    rounded={'full'}
                    variant={'link'}
                    cursor={'pointer'}
                    minW={0}>
                    <Avatar
                      size={'sm'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                  </MenuButton>
                  <MenuList alignItems={'center'}>
                    <br />
                    <Center>
                      <Avatar
                        size={'2xl'}
                        src={'https://avatars.dicebear.com/api/male/username.svg'}
                      />
                    </Center>
                    <br />
                    <Center>
                      <p>Soledad Palacio</p>
                    </Center>
                    <br />
                    <MenuDivider />
                    <MenuItem>Your Servers</MenuItem>
                    <MenuItem>Account Settings</MenuItem>
                    <MenuItem>Logout</MenuItem>
                  </MenuList>
                </Menu>
              </Stack>
            </Flex>
          </Flex>
        </Box>
      </>
    )
}
