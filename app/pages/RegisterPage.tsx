import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import { Divider } from "@/components/ui/divider";
import { VStack } from "@/components/ui/vstack";
import { Text, View, useColorScheme } from "react-native";
import { useRouter } from "expo-router";
import { setAuthMode } from "@/store/slices/authSlice";
import { useAppDispatch } from "@/hooks/useAppDispatch";

const RegisterPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleSignIn = () => {
    dispatch(setAuthMode("signIn"));
    router.push("/pages/LoginPage");
  };

  const handleSignUp = () => {
    dispatch(setAuthMode("signUp"));
    router.push("/pages/SignUpPage");
  };

  return (
    <View className="w-full h-full bg-background-light dark:bg-background-dark">
      <Box className="w-full h-full justify-center p-10">
        <VStack space="xs">
          <Text className="text-3xl font-extrabold tracking-normal text-left text-text-base dark:text-text-inverted">
            Welcome to Chore
          </Text>
          <Text className="text-lg font-bold text-left tracking-wide text-text-muted dark:text-text-muted mb-3">
            Would you like to
          </Text>

          <VStack space="lg">
            <Button
              className="w-full h-[40px] border border-secondary bg-background-light dark:bg-background-dark"
              onPress={handleSignIn}
            >
              <ButtonText className="text-text-base dark:text-text-inverted">
                Sign in
              </ButtonText>
            </Button>

            <Divider className="my-1 border-t border-secondary" />

            <Button
              className="w-full h-[40px] border border-secondary bg-background-light dark:bg-background-dark"
              onPress={handleSignUp}
            >
              <ButtonText className="text-text-base dark:text-text-inverted">
                Sign up
              </ButtonText>
            </Button>
          </VStack>
        </VStack>
      </Box>
    </View>
  );
};

export default RegisterPage;
