import React, { useState } from "react";
import { Icon, SearchIcon } from "@/components/ui/icon";
import { Input, InputField, InputSlot, InputIcon } from "@/components/ui/input";
import { Box } from "@/components/ui/box";
import { StyleSheet } from "react-native";

const Search = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <Box style={styles.container}>
      <Input style={styles.inputWrapper}>
        <InputSlot>
          <InputIcon>
            <Icon as={SearchIcon} size="md" color="#666" />
          </InputIcon>
        </InputSlot>
        <InputField
          placeholder="Search..."
          placeholderTextColor="#999"
          value={inputValue}
          onChangeText={setInputValue}
          style={styles.inputField}
        />
      </Input>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  inputWrapper: {
    flexDirection: "row",
    width: "90%",
    backgroundColor: "white",
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  inputField: {
    width: "100%",
    fontSize: 16,
    color: "#000",
    borderColor: "black",
    borderRadius: 5,
    borderWidth: 1,
  },
});

export default Search;
