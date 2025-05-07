import NavBar from "@/components/NavBar";
import { Slot } from "expo-router";

function AppLayout() {
  const { useAppSelector } = require("@/hooks/useAppSelector"); 
  const { getIsAuthData } = require("@/store/slices/authSlice");
  const isAuthenticated = useAppSelector(getIsAuthData);

  return (
    <>
      <Slot />
      {isAuthenticated && <NavBar />}
    </>
  );
}

export default AppLayout;