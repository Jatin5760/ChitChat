import { ClerkProvider } from '@clerk/clerk-expo';
import { tokenCache } from '@clerk/clerk-expo/token-cache';
import React from 'react';


const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

export default function ClearkAndConvexProvider({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider
      tokenCache={tokenCache}
      publishableKey={publishableKey}
      routerPush={() => {}}
      routerReplace={() => {}}
      isSatellite={false}
      proxyUrl=""
    >
      {children}
    </ClerkProvider>
  );
}