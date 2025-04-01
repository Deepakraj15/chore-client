import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { Stack } from "expo-router";
import NavBar from "@/components/NavBar";
import { View } from "react-native";

export default function Layout() {
  return (
    <GluestackUIProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="pages/home" options={{ title: "Home" }} />
        <Stack.Screen name="pages/login" options={{ title: "Login" }} />
      </Stack>
      <NavBar />
    </GluestackUIProvider>
  );
}
