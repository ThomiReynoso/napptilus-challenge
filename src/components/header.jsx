import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
	Icon,
  Text,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import {CgShoppingCart} from 'react-icons/cg'
import { useSelector } from 'react-redux';
import { BreadcrumbComponent } from './Breadcrumb';
import React from 'react';

export default function Header({ id = null, model = null, brand = null }) {
  const itemCount = useSelector((state) => state.cart.itemCount);
	const { isOpen, onOpen, onClose } = useDisclosure();
  
  return (
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
            <BreadcrumbComponent id={id} model={model} brand={brand} />
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
  );
}