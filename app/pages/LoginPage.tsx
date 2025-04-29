import React, { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import { Divider } from "@/components/ui/divider";
import { FormControl } from "@/components/ui/form-control";
import { EyeIcon, EyeOffIcon } from "@/components/ui/icon";
import { Input, InputField, InputSlot, InputIcon } from "@/components/ui/input";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Password:", password);
  };

  const handleGoogleLogin = () => {
    console.log("Login with Google");
  };

  const handleSignUpRedirect = () => {
    // Navigate to sign-up page or handle redirection
    console.log("Redirect to Sign Up");
  };

  return (
    <Box className="w-full h-screen justify-center p-10 bg-white">
      <FormControl className="p-4 border rounded-lg border-outline-300">
        <VStack space="xl">
          <VStack space="xs">
            <Text className="text-typography-500">Email</Text>
            <Input className="min-w-[250px]">
              <InputField
                value={email}
                onChangeText={setEmail}
                placeholder="Enter your email"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
              />
            </Input>
          </VStack>

          <VStack space="xs">
            <Text className="text-typography-500">Password</Text>
            <Input>
              <InputField
                value={password}
                onChangeText={setPassword}
                placeholder="Enter your password"
                secureTextEntry={!showPassword}
              />
              <InputSlot className="pr-3" onPress={togglePasswordVisibility}>
                <InputIcon as={showPassword ? EyeIcon : EyeOffIcon} />
              </InputSlot>
            </Input>
          </VStack>

          <Button className="w-full bg-blue-500" onPress={handleLogin}>
            <ButtonText className="text-white">Login</ButtonText>
          </Button>

          <Divider className="my-1" />

          <Button className="w-full" onPress={handleGoogleLogin}>
            <ButtonText className="text-typography-0">Log in with Google</ButtonText>
          </Button>

          {/* Sign up prompt */}
          <HStack className="items-center pt-4 justify-center">
            <Text className="text-typography-500">Don't have an account?</Text>
            <TouchableOpacity onPress={handleSignUpRedirect}>
              <Text className="ml-2 text-blue-500 font-semibold">Sign up</Text>
            </TouchableOpacity>
          </HStack>
        </VStack>
      </FormControl>
    </Box>
  );
};

export default LoginPage;
