import { SimpleGrid } from '@chakra-ui/react'
import React from 'react';

export const ProductGrid = (props) => {
  return (
    <SimpleGrid
      columns={{
        base: 2,
        md: 3,
        lg: 4,
        xl: 4,
      }}
      columnGap={{
        base: '4',
        md: '6',
      }}
      rowGap={{
        base: '8',
        md: '10',
      }}
      {...props}
    />
  )
}
