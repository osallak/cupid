"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Heart className="h-6 w-6 text-primary" fill="currentColor" />
          <span className="text-xl font-bold text-foreground">Cupid</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="#features"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Features
          </Link>
          <Link
            href="#testimonials"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Testimonials
          </Link>
          <Link
            href="#pricing"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Pricing
          </Link>
          <Link
            href="/browse"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Try Now
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link href="/signin">
            <Button
              variant="ghost"
              size="sm"
              className="hover:text-primary hover:bg-primary/10"
            >
              Sign In
            </Button>
          </Link>
          <Link href="/signup">
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
