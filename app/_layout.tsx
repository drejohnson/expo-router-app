import { Theme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { ClerkProvider } from "@clerk/clerk-expo";

import Colors from "@/constants/Colors";

import "./global.css";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

const DARK_THEME: Theme = {
  dark: true,
  colors: Colors,
};

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

export default function RootLayout() {
  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const publishableKey =
    "pk_test_YnVyc3RpbmctbGFkeWJpcmQtMzYuY2xlcmsuYWNjb3VudHMuZGV2JA";

  return (
    <ThemeProvider value={DARK_THEME}>
      <ClerkProvider publishableKey={publishableKey!}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="modal" options={{ presentation: "modal" }} />
        </Stack>
      </ClerkProvider>
    </ThemeProvider>
  );
}
