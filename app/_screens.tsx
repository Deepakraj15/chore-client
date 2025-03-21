
import { View, Text } from "react-native";
import { useRouter, useSegments } from "expo-router";
import  HomePage  from "./pages/HomePage";
import  LoginPage  from "./pages/LoginPage";

const SCREENS: Record<string, React.FC> = {
  home: HomePage,
  login: LoginPage,
};

export default function ScreenWrapper() {
  const segments = useSegments();
  const screenKey = segments[0] || "home"; 

  const ScreenComponent = SCREENS[screenKey];

  if (!ScreenComponent) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Screen Not Found</Text>
      </View>
    );
  }

  return <ScreenComponent />;
}
