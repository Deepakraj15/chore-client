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
import { PhoneIcon } from "@/components/ui/icon";
import Loader from "@/components/Loader";
import { useSignupMutation } from "@/store/services/authApiSlice";
import { setAuthToken } from "@/store/slices/authSlice";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import Register from "@/components/Register";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register, { isLoading }] = useSignupMutation();
  const dispatch = useAppDispatch();

  const togglePasswordVisibility = () => setShowPassword(prev => !prev);

  const handleSignUp = async () => {
    try {
      const result = await register({ username, email, password }).unwrap();
      if (result.status === 201 || result.status === 200) {
        dispatch(setAuthToken(result?.data?.authToken));
      }
      console.log("Sign up successful:", result);
    } catch (err) {
      console.error("Sign up failed:", err);
    }
  };

  const handleGoogleSignUp = () => {
    console.log("Sign up with Google");
  };

  const handlePhoneSignUp = () => {
    console.log("Sign up with Phone Number");
  };

  const handleLoginRedirect = () => {
    console.log("Redirect to Login");
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

              {/* Username Field */}
              <Input className="min-w-[250px] border border-secondary dark:border-secondary bg-surface-light dark:bg-surface-dark h-[40px] px-3 py-3 font-bold">
                <InputField
                  value={username}
                  onChangeText={setUserName}
                  placeholder="Username"
                  autoCapitalize="none"
                  autoCorrect={false}
                  className="text-text-base dark:text-text-inverted placeholder:italic placeholder:text-secondary dark:placeholder:text-text-muted tracking-wide"
                />
              </Input>

              {/* Email Field */}
              <Input className="min-w-[250px] border border-secondary dark:border-secondary bg-surface-light dark:bg-surface-dark h-[40px] px-3 py-3 font-bold">
                <InputField
                  value={email}
                  onChangeText={setEmail}
                  placeholder="Email"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  className="text-text-base dark:text-text-inverted placeholder:italic placeholder:text-secondary dark:placeholder:text-text-muted tracking-wide"
                />
              </Input>
            </VStack>

            {/* Password Field */}
            <VStack space="xs">
              <Input className="min-w-[250px] border border-secondary dark:border-secondary bg-surface-light dark:bg-surface-dark h-[40px] px-3 py-3 font-bold">
                <InputField
                  value={password}
                  onChangeText={setPassword}
                  placeholder="Password"
                  secureTextEntry={!showPassword}
                  className="text-text-base dark:text-text-inverted placeholder:italic placeholder:text-secondary dark:placeholder:text-text-muted tracking-wide"
                />
                <InputSlot className="pr-3" onPress={togglePasswordVisibility}>
                  <InputIcon as={showPassword ? EyeIcon : EyeOffIcon} />
                </InputSlot>
              </Input>
            </VStack>

            {/* Sign Up Button */}
            <Button className="w-full h-[40px] bg-primary dark:bg-primary" onPress={handleSignUp}>
              <ButtonText className="text-white tracking-widest">Sign up</ButtonText>
            </Button>

            <Divider className="my-1 border-t border-secondary dark:border-t-secondary border-t-[1px]" />

            {/* OAuth Buttons */}
            <VStack space="md">
              <Button className="w-full h-[40px] bg-background-light dark:bg-surface-dark border border-secondary dark:border-secondary" onPress={handleGoogleSignUp}>
                <ButtonIcon as={GoogleIcon} />
                <ButtonText className="text-text-base dark:text-text-base">Sign up with Google</ButtonText>
              </Button>

              <Button className="w-full h-[40px] bg-background-light dark:bg-surface-dark border border-secondary dark:border-secondary" onPress={handlePhoneSignUp}>
                <ButtonIcon as={PhoneIcon} color="black" />
                <ButtonText className="text-text-base dark:text-text-base">Sign up with Phone</ButtonText>
              </Button>
            </VStack>

            {/* Login Redirect */}
            <HStack className="items-center pt-4 justify-center">
              <Text className="text-text-muted dark:text-text-muted italic">Already have an account?</Text>
              <TouchableOpacity onPress={handleLoginRedirect}>
                <Text className="ml-2 text-primary dark:text-primary font-semibold">Sign in</Text>
              </TouchableOpacity>
            </HStack>
          </VStack>
        </FormControl>
      )}
    </Box>
  );
};

export default SignUpPage;
