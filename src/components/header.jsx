import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
	Icon,
  Text,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import {CgShoppingCart} from 'react-icons/cg'

const Links = [ 'Products'];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    color={"white"}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'/'}>
    {children}
  </Link>
);

export default function Header({ itemCount }) {

	const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={"black"} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Link href='/' fontWeight={'bold'} color={"white"}>MOBILFY</Link>
            <Box fontWeight={'bold'} color={"white"}>Hacer breadcrumb</Box>	
          </HStack>
          <Flex alignItems={'center'}>
            <Icon
              as={CgShoppingCart}
              color={"white"}
            />
            <Text color={"white"}>({itemCount})</Text>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}