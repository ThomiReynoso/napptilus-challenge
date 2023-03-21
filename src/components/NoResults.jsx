import { Box, Heading, Text } from '@chakra-ui/react';
import { WarningTwoIcon } from '@chakra-ui/icons';
import React from 'react';

export default function NoResults() {
  return (
    <Box textAlign="center" py={10} px={6}>
      <WarningTwoIcon boxSize={'50px'} color={'orange.300'} />
      <Heading as="h2" size="xl" mt={6} mb={2}>
        Ups, we couldn't find any product :(
      </Heading>
      <Text color={'gray.500'}>
        Please, try changing your search criteria. Remember to look by brand or model phones.
      </Text>
    </Box>
  );
}