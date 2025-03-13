"use client";

import Link from "next/link";
import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-gradient-to-b from-background to-pink-50/20 dark:to-pink-950/20">
      <div className="container py-12 md:py-16">
        <div className="flex flex-col gap-8 md:flex-row md:gap-12">
          {/* Brand */}
          <div className="md:w-1/3">
            <Link href="/" className="flex items-center gap-2">
              <Heart className="h-6 w-6 text-primary" fill="currentColor" />
              <span className="font-bold text-xl">Cupid</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Find meaningful connections with our AI-powered matchmaking
              platform.
            </p>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-8 md:w-2/3 md:grid-cols-3">
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Product</h3>
              <nav className="flex flex-col gap-2">
                <Link
                  href="/how-it-works"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  How It Works
                </Link>
                <Link
                  href="/safety"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Safety
                </Link>
                <Link
                  href="/premium"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Premium
                </Link>
              </nav>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Company</h3>
              <nav className="flex flex-col gap-2">
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  About
                </Link>
                <Link
                  href="/blog"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Blog
                </Link>
                <Link
                  href="/careers"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Careers
                </Link>
              </nav>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Legal</h3>
              <nav className="flex flex-col gap-2">
                <Link
                  href="/privacy"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacy
                </Link>
                <Link
                  href="/terms"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Terms
                </Link>
                <Link
                  href="/cookies"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Cookies
                </Link>
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Cupid. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="https://twitter.com"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Twitter
            </Link>
            <Link
              href="https://instagram.com"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Instagram
            </Link>
            <Link
              href="https://facebook.com"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Facebook
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
