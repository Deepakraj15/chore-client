import { Stack } from "expo-router";
import { View } from "react-native";
import NavBar from "../components/NavBar";

export default function Layout() {
  return (
    <View style={{ flex: 1 }}>
      <Stack />
      <NavBar />
    </View>
  );
}
