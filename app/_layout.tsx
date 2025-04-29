import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { Slot, Stack } from "expo-router";
import NavBar from "@/components/NavBar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useState } from "react";
import "@/global.css";
import { useAppSelector } from "@/app/hooks/useAppSelector";
import { getIsAuthData } from "@/store/slices/authSlice";

export default function Layout() {
   const isAuthenticated = useAppSelector(getIsAuthData)
  return (
    <SafeAreaProvider>
      <GluestackUIProvider>
        <Slot />
        {isAuthenticated &&<NavBar/>}
      </GluestackUIProvider>
    </SafeAreaProvider>
  );
}
