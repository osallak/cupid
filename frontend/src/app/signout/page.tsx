"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SignOutPage() {
  const router = useRouter();

  useEffect(() => {
    // In a real app, you would clear the auth token here
    console.log("User signed out");

    // Redirect to home page after signout
    router.push("/");
  }, [router]);

  return (
    <div className="container flex h-[50vh] items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Signing out...</h1>
        <p className="text-muted-foreground">
          You are being redirected to the home page.
        </p>
      </div>
    </div>
  );
}
