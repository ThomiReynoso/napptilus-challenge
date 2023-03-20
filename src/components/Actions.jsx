import { Button, HStack, Select, Stack, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa'
import { MdLocalShipping } from 'react-icons/md';

const Actions = ({product}) => {  
	return (
		<>
			<HStack width={"100%"} justifyContent={"space-around"}>
				<VStack>
					<Text fontWeight={"bold"}>Color</Text>
					<Select borderColor={"black"}>
						{product.options.colors.map(color => (
								<option value={color.code} key={color.code}>{color.name}</option>
						))}
					</Select>
				</VStack>
				<VStack>
					<Text fontWeight={"bold"}>Storage</Text>
					<Select borderColor={"black"}>
						{product.options.storages.map(storage => (
								<option value={storage.code} key={storage.code}>{storage.name}</option>
						))}
					</Select>
				</VStack>
			</HStack>
			<Button
            rounded={'none'}
            width={'98%'}
            marginTop={16}
            size={'lg'}
            py={'7'}
						leftIcon={<FaShoppingCart />}
            bg={useColorModeValue('gray.900', 'gray.50')}
            color={useColorModeValue('white', 'gray.900')}
            textTransform={'uppercase'}
            _hover={{
              transform: 'translateY(2px)',
              boxShadow: 'lg',
            }}>
            Add to cart
          </Button>
		</>
    )
}

export default Actions;