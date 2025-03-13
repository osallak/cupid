"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";

interface AuthFormProps extends React.HTMLAttributes<HTMLDivElement> {
  type: "signin" | "signup";
}

export function AuthForm({ type, className, ...props }: AuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    setIsLoading(true);

    // TODO: Add authentication logic here

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  return (
    <Card className={cn("w-full max-w-[400px]", className)} {...props}>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">
          {type === "signin" ? "Welcome back" : "Create an account"}
        </CardTitle>
        <CardDescription>
          {type === "signin"
            ? "Enter your credentials to sign in to your account"
            : "Enter your information to create your account"}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <Button variant="outline" disabled={isLoading}>
            <Icons.gitHub className="mr-2 h-4 w-4" />
            GitHub
          </Button>
          <Button variant="outline" disabled={isLoading}>
            <Icons.google className="mr-2 h-4 w-4" />
            Google
          </Button>
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
        <form onSubmit={onSubmit}>
          <div className="grid gap-4">
            {type === "signup" && (
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  type="text"
                  disabled={isLoading}
                />
              </div>
            )}
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="name@example.com"
                type="email"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
                disabled={isLoading}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                placeholder="••••••••"
                type="password"
                disabled={isLoading}
              />
            </div>
            <Button
              className="mx-auto block"
              size="compact"
              variant="gradient"
              disabled={isLoading}
            >
              {isLoading && (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              )}
              {type === "signin" ? "Sign In" : "Sign Up"}
            </Button>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <p className="text-sm text-muted-foreground">
          {type === "signin" ? (
            <>
              Don&apos;t have an account?{" "}
              <Button variant="link" className="p-0 h-auto" asChild>
                <a href="/signup">Sign up</a>
              </Button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <Button variant="link" className="p-0 h-auto" asChild>
                <a href="/signin">Sign in</a>
              </Button>
            </>
          )}
        </p>
      </CardFooter>
    </Card>
  );
}
