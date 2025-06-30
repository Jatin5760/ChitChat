import { ClerkProvider } from '@clerk/clerk-expo';
import { tokenCache } from '@clerk/clerk-expo/token-cache';
import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <ClerkProvider tokenCache={tokenCache}>
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1, backgroundColor: "black"}}>
        <Stack screenOptions={{headerShown: false}}>
          {/* To remove the header */}
          {/* <Stack.Screen name = "index" options={{ headerShown:false}}/> */}
          {/* <Stack.Screen name="index" options={{ title: "Feed" }} />
          <Stack.Screen
            name="notifications"
            options={{ title: "Notifications", headerShown: false }}
          /> */}
        </Stack>
      </SafeAreaView>
    </SafeAreaProvider>
    </ClerkProvider>
  );
}
