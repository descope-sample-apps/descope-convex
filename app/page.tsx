"use client";

import { Button } from "@/components/ui/button";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Code } from "@/components/typography/code";
import { Link } from "@/components/typography/link";
import { useConvexAuth } from "convex/react";
import { useDescope } from "@descope/nextjs-sdk/client";
import { useCallback } from "react";

export default function Home() {
  const { isLoading, isAuthenticated } = useConvexAuth();
  const numbers = useQuery(api.myFunctions.listNumbers, { count: 10 });
  const addNumber = useMutation(api.myFunctions.addNumber);
  const sdk = useDescope();

  const handleLogout = useCallback(() => {
    void sdk.logout();
  }, [sdk]);

  return (
    <main className="container max-w-2xl flex flex-col gap-8">
      <h1 className="text-4xl font-extrabold my-8 text-center">
        Convex + Next.js
      </h1>
      <p>
        Click the button and open this page in another window - this data is
        persisted in the Convex cloud database!
      </p>
      {isAuthenticated && !isLoading && (
        <>
          <p>
            <Button onClick={handleLogout}>Sign Out</Button>
          </p>
          <p className={"font-bold"}>
            Numbers:{" "}
            {numbers?.length === 0
              ? "Click the button!"
              : numbers?.join(", ") ?? "..."}
          </p>
          <p>
            <Button
              onClick={() => {
                void addNumber({ value: Math.floor(Math.random() * 10) });
              }}
            >
              Add a random number
            </Button>
          </p>
        </>
      )}
      {!isAuthenticated && (
        <>
          <p>
            <Link href={"/sign-in"}>
              <Button>Sign In</Button>
            </Link>
          </p>
        </>
      )}
      <p>
        Edit <Code>convex/myFunctions.ts</Code> to change your backend
      </p>
      <p>
        Edit <Code>app/page.tsx</Code> to change your frontend
      </p>
      <p>
        Check out{" "}
        <Link target="_blank" href="https://docs.convex.dev/home">
          Convex docs
        </Link>
      </p>
      <p>
        To build a full page layout copy one of the included{" "}
        <Link target="_blank" href="/layouts">
          layouts
        </Link>
      </p>
    </main>
  );
}
