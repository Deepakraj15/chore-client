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
import { setAuthMode, setAuthToken } from "@/store/slices/authSlice";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useRouter } from "expo-router";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isLoading }] = useLoginMutation();
  const togglePasswordVisibility = () => setShowPassword(prev => !prev);
  const dispatch = useAppDispatch();
  const router = useRouter();
  


  const handleLogin = async () => {
    try {
      const result = await login({ username, password }).unwrap();
      if (result.status === 200) {
        dispatch(setAuthToken(result?.data?.authToken));
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
    dispatch(setAuthMode("signUp"));
    router.push("/pages/SignUpPage");
    console.log("Redirect to Sign Up");
  };

  return (
    <Box className="w-full h-screen justify-center p-10 bg-background-light dark:bg-background-dark">
      {isLoading ? (
        <Loader />
      ) : (
        <FormControl className="p-4">
          <VStack space="xl">
            <VStack space="xs">
              <Register />
              <Input className="min-w-[250px] border border-secondary dark:border-secondary bg-surface-light dark:bg-surface-dark h-[40px] px-3 py-3 text-text-base dark:text-text-inverted font-bold">
                <InputField
                  value={username}
                  onChangeText={setUserName}
                  placeholder="Username"
                  keyboardType="default"
                  autoCapitalize="none"
                  autoCorrect={false}
                  className="text-text-base dark:text-text-inverted placeholder:italic placeholder:text-secondary dark:placeholder:text-text-muted placeholder:font-medium tracking-wide"
                />

              </Input>
            </VStack>

            <VStack space="xs">
              <Input className="min-w-[250px] border border-secondary dark:border-secondary bg-surface-light dark:bg-surface-dark h-[40px] px-3 py-3 text-text-base dark:text-text-inverted font-bold">
                <InputField
                  value={password}
                  onChangeText={setPassword}
                  placeholder="Password"
                  secureTextEntry={!showPassword}
                  className="text-text-base dark:text-text-inverted placeholder:italic placeholder:text-secondary dark:placeholder:text-text-muted placeholder:font-medium tracking-wide"
                />

                <InputSlot className="pr-3" onPress={togglePasswordVisibility}>
                  <InputIcon as={showPassword ? EyeIcon : EyeOffIcon} />
                </InputSlot>
              </Input>
            </VStack>

            <Button className="w-full h-[40px] bg-primary dark:bg-primary" onPress={handleLogin}>
              <ButtonText className="text-white tracking-widest">Sign in</ButtonText>
            </Button>

            <Divider className="my-1 border-t border-secondary dark:border-t-secondary border-t-[1px]" />

            <Button className="w-full h-[40px] bg-background-light dark:bg-surface-dark border border-secondary dark:border-secondary" onPress={handleGoogleLogin}>
              <ButtonIcon as={GoogleIcon} />
              <ButtonText className="text-text-base dark:text-text-base">Sign in with Google</ButtonText>
            </Button>

            <HStack className="items-center pt-4 justify-center">
              <Text className="text-text-muted dark:text-text-muted italic">Don't have an account?</Text>
              <TouchableOpacity onPress={handleSignUpRedirect}>
                <Text className="ml-2 text-primary dark:text-primary font-semibold">Sign up</Text>
              </TouchableOpacity>
            </HStack>
          </VStack>
        </FormControl>
      )}
    </Box>
  );
};

export default LoginPage;
