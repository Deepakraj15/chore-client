import { StatusBar } from "react-native";  // Import StatusBar
import { Slot } from "expo-router";
import { useColorScheme } from "react-native";
import { View } from "react-native";
import NavBar from "@/components/NavBar";  // Assuming NavBar is your navbar component
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useEffect } from "react";
import { setAuthStatus } from "@/store/slices/authSlice";
import Header from "@/components/Header";

function AppLayout() {
  const { useAppSelector } = require("@/hooks/useAppSelector");
  const { getIsAuthData } = require("@/store/slices/authSlice");
  const isAuthenticated = useAppSelector(getIsAuthData);
  const colorScheme = useColorScheme();

  const statusBarBackgroundColor = colorScheme === "dark" ? "black" : "white";
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setAuthStatus(false));
  }, [])
  return (
    <View style={{ flex: 1 }}>
      {/* Set the status bar color */}
      <StatusBar barStyle={colorScheme === "dark" ? "light-content" : "dark-content"} backgroundColor={statusBarBackgroundColor} />
      {isAuthenticated && <Header />}
      <Slot />
      {isAuthenticated && <NavBar />}

    </View>
  );
}

export default AppLayout;
