import { ClerkLoaded, ClerkProvider, useAuth } from "@clerk/clerk-expo";
import { tokenCache } from "@clerk/clerk-expo/token-cache";
import { ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk"; // Ensure this import is correct
import React from "react";

const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
  unsavedChangesWarning: false,
});

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

export default function ClearkAndConvexProvider({children}:{children: React.ReactNode}) {
  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey}>
      <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
        <ClerkLoaded>{children}</ClerkLoaded>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
}
