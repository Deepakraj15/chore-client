import { StatusBar } from "react-native";  // Import StatusBar
import { Slot } from "expo-router";
import { useColorScheme } from "react-native";
import { View } from "react-native";
import NavBar from "@/components/NavBar";  // Assuming NavBar is your navbar component

function AppLayout() {
  const { useAppSelector } = require("@/hooks/useAppSelector"); 
  const { getIsAuthData } = require("@/store/slices/authSlice");
  const isAuthenticated = useAppSelector(getIsAuthData);
  const colorScheme = useColorScheme();
  console.log("AppLayout colorScheme", colorScheme);


  const statusBarBackgroundColor = colorScheme === "dark" ? "royalblue" : "white";

  return (
    <View style={{ flex: 1 }}>
      {/* Set the status bar color */}
      <StatusBar barStyle={colorScheme === "dark" ? "light-content" : "dark-content"} backgroundColor={statusBarBackgroundColor} />
      
      <Slot />
      {isAuthenticated && <NavBar />}
    </View>
  );
}

export default AppLayout;
