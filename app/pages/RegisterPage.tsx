import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import { Divider } from "@/components/ui/divider";
import { VStack } from "@/components/ui/vstack";
import { Text, View } from "react-native";
import { useRouter } from "expo-router";
import { useDispatch } from "react-redux";
import { setAuthMode } from "@/store/slices/authSlice"; // Adjust path as needed


const RegisterPage = () => {
    const router = useRouter();
    const dispatch = useDispatch();

    const handleSignIn = () => {
        dispatch(setAuthMode("signIn"));
        router.push("/pages/LoginPage"); 
    };

    const handleSignUp = () => {
        dispatch(setAuthMode("signUp"));
        router.push("/pages/SignUpPage"); 
    };

    return (
        <View>
            <Box className="w-full h-screen justify-center p-10 bg-white">
                <VStack space="xs">
                    <Text className="text-3xl font-extrabold tracking-normal text-left">
                        Welcome to Chore
                    </Text>
                    <Text className="text-lg font-bold text-left tracking-wide text-gray-400 mb-3">
                        Would you like to
                    </Text>
                    <VStack space="lg">
                        <Button
                            className="w-full h-[40px] border-[0.5px]"
                            onPress={handleSignIn}
                        >
                            <ButtonText>Sign in</ButtonText>
                        </Button>
                        <Divider className="my-1 border-t border-t-gray-300 border-t-[1px]" />
                        <Button
                            className="w-full h-[40px] border-[0.5px]"
                            onPress={handleSignUp}
                        >
                            <ButtonText>Sign up</ButtonText>
                        </Button>
                    </VStack>
                </VStack>
            </Box>
        </View>
    );
};

export default RegisterPage;