import { Flex, Image as Img } from '@chakra-ui/react';
import React from 'react';

const Image = ({ src, alt }) => {
  return (
    <Flex alignItems={"center"} justifyContent={"center"}>
      <Img src={src} alt={alt} width={"50%"} maxWidth={"70%"}/>
    </Flex>
  );
};

export default Image;
