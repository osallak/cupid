"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Heart
            className="h-6 w-6 text-pink-500 transition-transform group-hover:scale-110"
            fill="currentColor"
          />
          <span className="font-bold text-xl bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
            Cupid
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/how-it-works"
            className="text-sm font-medium text-muted-foreground hover:text-pink-500 transition-colors"
          >
            How It Works
          </Link>
          <Link
            href="/safety"
            className="text-sm font-medium text-muted-foreground hover:text-pink-500 transition-colors"
          >
            Safety
          </Link>
          <Link
            href="/blog"
            className="text-sm font-medium text-muted-foreground hover:text-pink-500 transition-colors"
          >
            Blog
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <div className="hidden sm:flex items-center gap-2">
            <Button
              variant="ghost"
              className="text-sm hover:text-pink-500 hover:bg-pink-50 dark:hover:bg-pink-950"
              asChild
            >
              <Link href="/signin">Log in</Link>
            </Button>
            <Button
              className="text-sm bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white border-0"
              asChild
            >
              <Link href="/signup">Create Account</Link>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
