import React from 'react';
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdLocalShipping } from 'react-icons/md';

const Description = ({ product }) => {
  const {
    brand,
    model,
    price,
    cpu,
    ram,
    os,
    displayResolution,
    battery,
    primaryCamera,
    secondaryCmera,
    dimentions,
    weight,
    radio,
    gprs, 
    speaker,
    sensors,
    networkTechnology,
  } = product;

  return (
    <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
              {model} - {brand}
            </Heading>
            <Text
              color={useColorModeValue('gray.900', 'gray.400')}
              fontWeight={300}
              fontSize={'2xl'}>
              {price ? `$${price} USD` : 'No Price'}
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.300', 'gray.600')}
              />
            }>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Features
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2}>
                  {gprs === "Yes" ? <ListItem>GPRS</ListItem> : ""}
                  {speaker === "Yes" ? <ListItem>Speaker</ListItem> : ""}
                  <ListItem>{networkTechnology}</ListItem>
                </List>
                <List spacing={2}>
                  {Array.isArray(sensors) ? sensors.map(sensor => <ListItem key={sensor}>{sensor}</ListItem> ) : <ListItem>{sensors}</ListItem> }
                  <ListItem>{radio}</ListItem>
                </List>
              </SimpleGrid>
            </Box>

            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Product Details
              </Text>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2}>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      CPU:
                    </Text>{' '}
                    {cpu}
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      RAM:
                    </Text>{' '}
                    {ram}
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      OS:
                    </Text>{' '}
                    {os}
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Screen resolution:
                    </Text>{' '}
                    {displayResolution}
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Battery:
                    </Text>{' '}
                    {battery}
                  </ListItem>
                </List>
                <List spacing={2}>
                  <ListItem>
                      <Text as={'span'} fontWeight={'bold'}>
                        Primary Camera:
                      </Text>{' '}
                      {Array.isArray(primaryCamera) ? primaryCamera.join(', ') : primaryCamera}
                    </ListItem>
                    <ListItem>
                      <Text as={'span'} fontWeight={'bold'}>
                        Secondary Camera:
                      </Text>{' '}
                      {Array.isArray(secondaryCmera) ? secondaryCmera.join(', ') : secondaryCmera}
                    </ListItem>
                    <ListItem>
                      <Text as={'span'} fontWeight={'bold'}>
                        Dimentions:
                      </Text>{' '}
                      {dimentions}
                    </ListItem>
                    <ListItem>
                      <Text as={'span'} fontWeight={'bold'}>
                        Weight:
                      </Text>{' '}
                      {weight}
                    </ListItem>
                </List>
              </SimpleGrid>
            </Box>
          </Stack>
      </Stack>
  );
};

export default Description;
