import { Button, HStack, Select, Text, useColorModeValue, useToast, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa'
import { addProductToCart } from '../services/product.service';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/cartSlice';
import React from 'react';

const Actions = ({product}) => {
	const [ color, setColor ] = useState(product.options.colors[0].code);
	const [ storage, setStorage ] = useState(product.options.storages[0].code);
	const dispatch = useDispatch();
	const toast = useToast();

	const addToCart = async () => {
		const count = await addProductToCart(product.id, color, storage);
		dispatch(addItem(count));
		toast({
			title: 'Item Added to cart!',
			description: `${product.brand} ${product.model} successfully added!`,
			status: 'success',
			duration: 9000,
			isClosable: true,
		  });
	}

	return (
		<>
			<HStack width={"100%"} justifyContent={"space-around"}>
				<VStack>
					<Text fontWeight={"bold"}>Color</Text>
					<Select borderColor={"black"} onChange={(e)=> setColor(+e.target.value)}>
						{product.options.colors.map(color => (
							<option value={color.code} key={color.code}>{color.name}</option>
						))}
					</Select>
				</VStack>
				<VStack>
					<Text fontWeight={"bold"}>Storage</Text>
					<Select borderColor={"black"} onChange={(e)=> setStorage(+e.target.value)}>
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
				onClick={addToCart}
				leftIcon={<FaShoppingCart />}
				bg={useColorModeValue('gray.900', 'gray.50')}
				color={useColorModeValue('white', 'gray.900')}
				textTransform={'uppercase'}
				_hover={{
					backgroundColor: 'gray.600',
					transform: 'translateY(2px)',
					boxShadow: 'lg',
				}}>
            Add to cart
          </Button>
		</>
    )
}

export default Actions;