import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
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
  );
}
