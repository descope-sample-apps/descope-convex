import { useSession, getSessionToken } from "@descope/nextjs-sdk/client";
import { useCallback, useMemo } from "react";

export default function useAuthFromDescope() {
  const { isSessionLoading, isAuthenticated } = useSession();

  // SDK should automatically refresh the token when using getSessionToken() if refresh token is still active.
  const fetchAccessToken = useCallback(async () => {
    return getSessionToken();
  }, []);
  return useMemo(
    () => ({
      isLoading: isSessionLoading,
      isAuthenticated: isAuthenticated ?? false,
      fetchAccessToken,
    }),
    [isSessionLoading, isAuthenticated, fetchAccessToken]
  );
}
