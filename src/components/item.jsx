import {
  AspectRatio,
  Box,
  Button,
  HStack,
  Image,
  Link,
  Skeleton,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { Rating } from './Rating'
import { FavouriteButton } from './FavouriteButton'
import { PriceTag } from './PriceTag'
import { Link as ReactRouterLink } from 'react-router-dom';

export const Item = (props) => {
  const { product, rootProps } = props
  const { name, id, flag, imageUrl, price, salePrice } = product
  return (
    <>
    <Stack
      spacing={{
        base: '4',
        md: '5',
      }}
      {...rootProps}
    >
      <Box position="relative">
        <AspectRatio ratio={4 / 3}>
          <Image
            src={imageUrl}
            alt={name}
            draggable="false"
            fallback={<Skeleton />}
            borderRadius={{
              base: 'md',
              md: 'xl',
            }}
          />
        </AspectRatio>
        <FavouriteButton
          position="absolute"
          top="4"
          right="4"
          aria-label={`Add ${name} to your favourites`}
        />
      </Box>
      <Stack>
        <Stack spacing="1">
          <Text fontWeight="medium" color={useColorModeValue('gray.700', 'gray.400')}>
            {name}
          </Text>
         <Text fontWeight="medium" color={useColorModeValue('gray.700', 'gray.400')}>
            {flag}
          </Text>
          <PriceTag price={price} salePrice={salePrice} currency="USD" />
        </Stack>
      </Stack>
      <Stack align="center">
        <Link
          textDecoration="underline"
          fontWeight="medium"
          color={useColorModeValue('gray.600', 'gray.400')}
          as={ReactRouterLink}
          to={`/product/${id}`}
        >
          Ver más detalle
        </Link>
      </Stack>
    </Stack>
    </>
  )
}