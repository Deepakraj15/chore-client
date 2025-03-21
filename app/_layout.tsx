import NavBar from "@/components/NavBar";
import { Stack } from "expo-router";
import { View } from "react-native";

export default function Layout() {
  return (
    <View style={{ flex: 1 }}>
      <Stack screenOptions={{ headerShown: false }} />
    <NavBar />
    </View>
  );
}
