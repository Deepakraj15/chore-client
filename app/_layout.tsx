import NavBar from "@/components/NavBar";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { Stack } from "expo-router";
import { View } from "react-native";

export default function Layout() {
  return (
    
    <GluestackUIProvider>
    <View style={{ flex: 1 }}>
      <Stack screenOptions={{ headerShown: false }} />
      <NavBar />
    </View>
    </GluestackUIProvider>
  );
}
