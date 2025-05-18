import { StatusBar } from "react-native";
import { Slot } from "expo-router";
import { useColorScheme } from "react-native";
import { View, Text } from "react-native";
import NavBar from "@/components/NavBar";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import { useEffect, useRef } from "react";
import { getIsAuthData, setAuthStatus } from "@/store/slices/authSlice";
import Header from "@/components/Header";
import { clearAlert, getAlert, getCurrentPage } from "@/store/slices/appSlice";
import { Alert, AlertIcon, AlertText } from "@/components/ui/alert";
import { InfoIcon } from "@/components/ui/icon";
import AlertComponent from "@/components/AlertComponent";
import { useAuthStorage } from "@/hooks/useAuthStorage";

function AppLayout() {
  const isAuthenticated = useAppSelector(getIsAuthData);
  const colorScheme = useColorScheme();
  const alert = useAppSelector(getAlert);
  const pageHeader = useAppSelector(getCurrentPage);
  const statusBarBackgroundColor = colorScheme === "dark" ? "black" : "white";
  const dispatch = useAppDispatch();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const authStatus = useAuthStorage();
  useEffect(() => {
    if (alert) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        dispatch(clearAlert());
      }, 3000);
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [alert]);

  useEffect(() => {
    if(authStatus.authToken && authStatus.refreshToken){
      dispatch(setAuthStatus(true));
    }
    else{
      dispatch(setAuthStatus(false));
    }
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {/* Set the status bar color */}
      <StatusBar
        barStyle={colorScheme === "dark" ? "light-content" : "dark-content"}
        backgroundColor={statusBarBackgroundColor}
      />
      {alert ? (
        <AlertComponent message={alert.message} type={alert.type}/>
      ) : (
        ""
      )}
      {isAuthenticated && <Header title={pageHeader}/>}
      <Slot />
      {isAuthenticated && <NavBar />}
    </View>
  );
}

export default AppLayout;
