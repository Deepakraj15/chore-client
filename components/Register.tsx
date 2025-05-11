import { useAppSelector } from "@/hooks/useAppSelector";
import { getAuthMode } from "@/store/slices/authSlice";
import { Text } from "react-native";
import { HStack } from "./ui/hstack";
import { VStack } from "./ui/vstack";

const Register = () => {
  const currentAuthMode = useAppSelector(getAuthMode);
  const isSignUp = (currentAuthMode === "signUp" || currentAuthMode === null);
  console.log("Current Auth Mode:", isSignUp);
  return (
    <VStack space="lg" className="space-y-5">
      <HStack className="space-x-4 items-center">
        <Text
          className={`text-3xl font-extrabold tracking-normal pr-3 text-left ${
            isSignUp ? "text-black dark:text-white" :"text-gray-400 dark:text-gray-500"
          }`}
          style={{
            borderRightWidth: 2,
            borderRightColor: '#D1D5DB',
          }}
        >
          Sign Up
        </Text>
        <Text
          className={`text-3xl font-extrabold tracking-normal pl-3 text-left ${
            !isSignUp ? "text-black dark:text-white" :  "text-gray-400 dark:text-gray-500" 
          }`}
        >
          Login 
        </Text>
      </HStack>
      <Text className="text-lg font-bold text-left tracking-wide text-gray-400 dark:text-gray-500 mb-3">
        {isSignUp ? "Please sign up to continue" : "Please sign in to continue"}
      </Text>
    </VStack>
  );
};

export default Register;
