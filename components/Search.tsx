import React, { useState } from "react";
import { Box } from "@/components/ui/box"; 
import { Input, InputIcon, InputField, InputSlot } from "@/components/ui/input";
import { SearchIcon } from "@/components/ui/icon"; 

const Search = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <Box className="w-full h-12 flex justify-center items-center">
      <Input className="w-11/12" isFocused>
        <InputSlot className="pl-2">
          <InputIcon as={SearchIcon} />
        </InputSlot>
        <InputField onFocus={()=>{}}
          type="text"
          placeholder="Search..."
          value={inputValue}
          onChangeText={setInputValue}
        />
      </Input>
    </Box>
  );
};

export default Search;
