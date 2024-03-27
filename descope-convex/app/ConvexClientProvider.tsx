"use client";
import { ReactNode } from "react";
import { ConvexProviderWithAuth, ConvexReactClient } from "convex/react";
import useAuthFromDescope from "./ConvexProviderWithDescope";
import { AuthProvider } from "@descope/nextjs-sdk";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export default function ConvexClientProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <AuthProvider projectId={process.env.NEXT_PUBLIC_DESCOPE_PROJECT_ID || ""}>
      <ConvexProviderWithAuth client={convex} useAuth={useAuthFromDescope}>
        {children}
      </ConvexProviderWithAuth>
    </AuthProvider>
  );
}
