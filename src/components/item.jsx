import {
  AspectRatio,
  Box,
  Image,
  Link,
  Skeleton,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { PriceTag } from './PriceTag'
import { Link as ReactRouterLink } from 'react-router-dom';

export const Item = (props) => {
  const { product, rootProps } = props
  const { brand, id, model, imgUrl, price } = product
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
            src={imgUrl}
            alt={brand}
            draggable="false"
            fallback={<Skeleton />}
            borderRadius={{
              base: 'md',
              md: 'xl',
            }}
          />
        </AspectRatio>
      </Box>
      <Stack>
        <Stack spacing="1">
          <Text fontWeight="medium" color={useColorModeValue('gray.700', 'gray.400')}>
            {brand}
          </Text>
         <Text fontWeight="medium" color={useColorModeValue('gray.700', 'gray.400')}>
            {model}
          </Text>
          <PriceTag price={price} currency="USD" />
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