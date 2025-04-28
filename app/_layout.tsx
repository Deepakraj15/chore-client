import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { Slot, Stack } from "expo-router";
import NavBar from "@/components/NavBar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "@/global.css";

export default function Layout() {
  return (
    <SafeAreaProvider>
      <GluestackUIProvider>
        <Slot />
        <NavBar/>
      </GluestackUIProvider>
    </SafeAreaProvider>
  );
}
