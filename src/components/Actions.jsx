import { Button, HStack, Select, Text, VStack } from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa'

const Actions = ({product}) => {  
	return (
		<>
			<HStack>
				<VStack>
					<Text>Color</Text>
					<Select>
						{product.options.colors.map(color => (
								<option value={color.code} key={color.code}>{color.name}</option>
						))}
					</Select>
				</VStack>
				<VStack>
					<Text>Almacenamiento</Text>
					<Select>
						{product.options.storages.map(storage => (
								<option value={storage.code} key={storage.code}>{storage.name}</option>
						))}
					</Select>
				</VStack>
			</HStack>
			<Button leftIcon={<FaShoppingCart />}>
				Añadir al carrito
			</Button>
		</>
    )
}

export default Actions;