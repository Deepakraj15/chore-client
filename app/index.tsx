import { useAuthStorage } from "@/hooks/useAuthStorage";
import { Redirect } from "expo-router";

export default function Index() {
  // Check if the user is already authenticated
  const authStatus = useAuthStorage();
  if (authStatus.authToken && authStatus.refreshToken) {
    console.log("token found" ,authStatus);
    return <Redirect href="/pages/HomePage" />;
  }
  return <Redirect href="/pages/SignUpPage" />;
}
