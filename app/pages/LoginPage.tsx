import React, { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { Box } from "@/components/ui/box";
import { Button, ButtonIcon, ButtonText } from "@/components/ui/button";
import { Divider } from "@/components/ui/divider";
import { FormControl } from "@/components/ui/form-control";
import { EyeIcon, EyeOffIcon } from "@/components/ui/icon";
import { Input, InputField, InputSlot, InputIcon } from "@/components/ui/input";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import GoogleIcon from "@/components/svg/GoogleIcon";
import Register from "@/components/Register";
import { useLoginMutation } from "@/store/services/authApiSlice";
import Loader from "@/components/Loader";
import { setAuthToken } from "@/store/slices/authSlice";
import { useAppDispatch } from "@/hooks/useAppDispatch";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isLoading, isError, error }] = useLoginMutation();
  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };
  const dipatch = useAppDispatch();
  const handleLogin = async () => {
    try {
      const result = await login({ username, password }).unwrap();
      if (result.status === 200) {
        dipatch(setAuthToken(result?.data?.authToken));
      }
      console.log("Login successful:", result);
    } catch (err) {
      console.error("Login failed:", err);
    }

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
      {isLoading ? <Loader /> :
        <FormControl className="p-4">
          <VStack space="xl">
            <VStack space="xs">
              <Register />
              <Input className="min-w-[250px] border border-gray-300 border-[0.7px] py-3 px-3 font-bold text-left tracking-wide text-black-700 h-[40px]">
                <InputField
                  value={username}
                  onChangeText={setUserName}
                  placeholder="Username"
                  keyboardType="default"
                  autoCapitalize="none"
                  autoCorrect={false}
                  className="placeholder:italic placeholder:text-gray-300 placeholder:font-medium placeholder:tracking-wide" />
              </Input>
            </VStack>

            <VStack space="xs">
            
              <Input className="min-w-[250px] border border-gray-300 border-[0.7px] py-3 px-3 font-bold text-left tracking-wide text-black-700 h-[40px]">
                <InputField
                  value={password}
                  onChangeText={setPassword}
                  placeholder="Password"
                  secureTextEntry={!showPassword}
                  className="placeholder:italic placeholder:text-gray-300 placeholder:font-medium placeholder:tracking-wide"
                />
                <InputSlot className="pr-3" onPress={togglePasswordVisibility}>
                  <InputIcon as={showPassword ? EyeIcon : EyeOffIcon} />
                </InputSlot>
              </Input>
            </VStack>

            <Button className="w-full bg-blue-500 h-[40px]" onPress={handleLogin}>
              <ButtonText className="text-white tracking-widest">Sign in</ButtonText>
            </Button>

            <Divider className="my-1 border-t border-t-gray-300 border-t-[1px]" />

            <Button className="w-full h-[40px] bg-white border border-[0.5px]" onPress={handleGoogleLogin}>
              <ButtonIcon as={GoogleIcon}></ButtonIcon>
              <ButtonText className="text-typography-0">Sign in with Google</ButtonText>
            </Button>

            {/* Sign up prompt */}
            <HStack className="items-center pt-4 justify-center">
              <Text className="text-typography-500 italic">Don't have an account?</Text>
              <TouchableOpacity onPress={handleSignUpRedirect}>
                <Text className="ml-2 text-blue-500 font-semibold ">Sign up</Text>
              </TouchableOpacity>
            </HStack>
          </VStack>
      
        </FormControl>}
    </Box>   
  );
};

export default LoginPage;
