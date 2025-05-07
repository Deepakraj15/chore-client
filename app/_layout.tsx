import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import "@/global.css";

import AppLayout from "./AppLayout";


export default function Layout() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <GluestackUIProvider>
          <AppLayout />
        </GluestackUIProvider>
      </SafeAreaProvider>
    </Provider>
  );
}
