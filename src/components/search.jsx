import { SearchIcon } from '@chakra-ui/icons';
import { Flex, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import React from 'react';

const Search = ({ value, onChange }) => {
  return (
    <Flex justifyContent={"flex-end"}>
      <InputGroup marginTop={"0.5rem"} marginRight={"1rem"} width={"25rem"}>
        <InputLeftElement
          pointerEvents='none'
          children={<SearchIcon color='black' />}
        />
        <Input placeholder='Search by model or brand' borderColor={"black"} value={value} onChange={onChange}/>
      </InputGroup>
    </Flex>
  );
};

export default Search;
