import InitialLayout from "@/components/InitialLayout";
import ClearkAndConvexProvider from "@/providers/ClearkAndConvexProvider";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

export default function RootLayout() {
  return (
    <ClearkAndConvexProvider>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
          <InitialLayout />
          {/* <Stack screenOptions={{headerShown: false}}> */}
          {/* To remove the header */}
          {/* <Stack.Screen name = "index" options={{ headerShown:false}}/> */}
          {/* <Stack.Screen name="index" options={{ title: "Feed" }} />
          <Stack.Screen
            name="notifications"
            options={{ title: "Notifications", headerShown: false }}
          /> */}
          {/* </Stack> */}
        </SafeAreaView>
      </SafeAreaProvider>
    </ClearkAndConvexProvider>
  );
}
