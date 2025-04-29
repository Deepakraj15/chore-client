import { Button, ButtonText } from "@/components/ui/button"
import { FormControl } from "@/components/ui/form-control";
import { EyeIcon, EyeOffIcon } from "@/components/ui/icon";
import { Input, InputField, InputSlot, InputIcon} from "@/components/ui/input";
import { VStack } from "@/components/ui/vstack";
import React, { useState } from "react";
import { Text } from "react-native";
import { View } from "react-native-reanimated/lib/typescript/Animated";

const LoginPage = () =>{
    const [showPassword,setShowPassword] = useState(false);
    const handleState = () => {
        setShowPassword((showState) => {
          return !showState
        })
      }
    return (
        <FormControl className="p-4 border rounded-lg border-outline-300">
        <VStack space="xl">
          {/* <Heading className="text-typography-900">Login</Heading> */}
          <VStack space="xs">
            <Text className="text-typography-500">Email</Text>
            <Input className="min-w-[250px]">
              <InputField type="text" />
            </Input>
          </VStack>
          <VStack space="xs">
            <Text className="text-typography-500">Password</Text>
            <Input className="text-center">
              <InputField type={showPassword ? "text" : "password"} />
              <InputSlot className="pr-3" onPress={handleState}>
                <InputIcon as={showPassword ? EyeIcon : EyeOffIcon} />
              </InputSlot>
            </Input>
          </VStack>
          <Button
            className="ml-auto"
            onPress={() => {
              
            }}
          >
            <ButtonText className="text-typography-0">Save</ButtonText>
          </Button>
        </VStack>
      </FormControl>
    )

}

export default LoginPage;