import React, { useState } from "react";
import { Text, TouchableOpacity, useColorScheme } from "react-native";
import { Box } from "@/components/ui/box";
import { Button, ButtonIcon, ButtonText } from "@/components/ui/button";
import { Divider } from "@/components/ui/divider";
import { FormControl } from "@/components/ui/form-control";
import { EyeIcon, EyeOffIcon } from "@/components/ui/icon";
import { Input, InputField, InputSlot, InputIcon } from "@/components/ui/input";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import GoogleIcon from "@/components/svg/GoogleIcon";
import Loader from "@/components/Loader";
import { useSignupMutation } from "@/store/services/authApiSlice";
import { setAuthMode, setAuthToken } from "@/store/slices/authSlice";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import Register from "@/components/Register";
import SmartphoneIcon from "@/components/svg/SmartPhoneIcon";
import { useRouter } from "expo-router";

const SignUpPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCPassword] = useState("");
    const [register, { isLoading }] = useSignupMutation();
    const [isInvalid, setIsInvalid] = useState(false);
    const dispatch = useAppDispatch();
    const router = useRouter();

    const togglePasswordVisibility = () => setShowPassword(prev => !prev);

    const handleSignUp = async () => {
        if (password !== cpassword) {
            console.error("Passwords do not match");
            setIsInvalid(true);
            return;
        }
        try {
            const result = await register({ username, password }).unwrap();
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
        dispatch(setAuthMode("signIn"));
        router.replace("/pages/LoginPage");
    };

    const checkIfPasswordMatch = () => {
        if (password !== cpassword) {
            setIsInvalid(true);
        } else {
            setIsInvalid(false);
        }
    };

    const inputBorderStyle = isInvalid ? "border-red-500" : "border-secondary"; // Dynamic border color

    return (
        <Box className="w-full h-screen justify-center p-10 bg-background-light dark:bg-background-dark">
            {isLoading ? (
                <Loader />
            ) : (
                <FormControl className="p-4">
                    <VStack space="xl">
                        <VStack space="md">
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

                            {/* Password Field */}
                            <Input
                                isInvalid={isInvalid}
                                className={`min-w-[250px] border ${inputBorderStyle} dark:${inputBorderStyle} bg-surface-light dark:bg-surface-dark h-[40px] px-3 py-3 font-bold`}
                            >
                                <InputField
                                    value={password}
                                    onChangeText={setPassword}
                                    placeholder="Password"
                                    secureTextEntry={!showPassword}
                                    className="text-text-base dark:text-text-inverted placeholder:italic placeholder:text-secondary dark:placeholder:text-text-muted tracking-wide"
                                />
                                <InputSlot className="pr-3" onPress={togglePasswordVisibility}>
                                    <InputIcon
                                        as={showPassword ? EyeIcon : EyeOffIcon}
                                        className="text-secondary dark:text-text-muted ml-2"
                                    />
                                </InputSlot>
                            </Input>

                            {/* Confirm Password Field */}
                            <Input
                                isInvalid={isInvalid}
                                className={`min-w-[250px] border ${inputBorderStyle} dark:${inputBorderStyle} bg-surface-light dark:bg-surface-dark h-[40px] px-3 py-3 font-bold`}
                            >
                                <InputField
                                    value={cpassword}
                                    onChangeText={setCPassword}
                                    placeholder="Confirm Password"
                                    secureTextEntry={!showPassword}
                                    onBlur={checkIfPasswordMatch} // Check when the user moves away from this field
                                    className="text-text-base dark:text-text-inverted placeholder:italic placeholder:text-secondary dark:placeholder:text-text-muted tracking-wide"
                                />
                                <InputSlot className="pr-3" onPress={togglePasswordVisibility}>
                                    <InputIcon
                                        as={showPassword ? EyeIcon : EyeOffIcon}
                                        className="text-secondary dark:text-text-muted ml-2"
                                    />
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
                                <ButtonIcon as={SmartphoneIcon} />
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
