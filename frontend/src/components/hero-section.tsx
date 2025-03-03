"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center py-20 overflow-hidden">
      {/* Background with animated hearts */}
      <div className="absolute inset-0 bg-gradient-to-b from-pink-50 via-white to-white dark:from-pink-950 dark:via-background dark:to-background" />
      <div className="absolute inset-0 opacity-30">
        <div className="hearts-bg">
          <div className="heart">❤️</div>
          <div className="heart">💕</div>
          <div className="heart">❤️</div>
          <div className="heart">💕</div>
          <div className="heart">❤️</div>
        </div>
      </div>

      {/* Content */}
      <div className="container relative">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left side - Text content */}
          <div className="flex flex-col gap-6 text-center lg:text-left">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-50 dark:bg-pink-950/50 text-pink-600 dark:text-pink-300">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium">
                  Find Your Perfect Match
                </span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Where <span className="text-pink-500">Love</span> Stories Begin
              </h1>
              <p className="text-lg text-muted-foreground sm:text-xl max-w-[42rem]">
                Join thousands of singles ready to find their special someone.
                Your perfect match could be just a click away!
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="text-lg h-12 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white border-0"
                asChild
              >
                <Link href="/signup">Start Your Journey</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg h-12 border-pink-200 dark:border-pink-800 hover:bg-pink-50 dark:hover:bg-pink-950"
                asChild
              >
                <Link href="/how-it-works">See How It Works</Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link
                href="/signin"
                className="text-pink-500 hover:text-pink-600 hover:underline"
              >
                Sign in
              </Link>
            </p>
          </div>

          {/* Right side - Stats */}
          <div className="hidden lg:grid grid-cols-2 gap-8 text-center">
            <div className="space-y-2 p-6 rounded-2xl bg-white/50 dark:bg-white/5 backdrop-blur border border-pink-100 dark:border-pink-900 hover:scale-105 transition-transform">
              <p className="text-4xl font-bold text-pink-500">1000+</p>
              <p className="text-sm text-muted-foreground">Active Users</p>
            </div>
            <div className="space-y-2 p-6 rounded-2xl bg-white/50 dark:bg-white/5 backdrop-blur border border-pink-100 dark:border-pink-900 hover:scale-105 transition-transform">
              <p className="text-4xl font-bold text-pink-500">85%</p>
              <p className="text-sm text-muted-foreground">Match Rate</p>
            </div>
            <div className="space-y-2 p-6 rounded-2xl bg-white/50 dark:bg-white/5 backdrop-blur border border-pink-100 dark:border-pink-900 hover:scale-105 transition-transform">
              <p className="text-4xl font-bold text-pink-500">500+</p>
              <p className="text-sm text-muted-foreground">Happy Couples</p>
            </div>
            <div className="space-y-2 p-6 rounded-2xl bg-white/50 dark:bg-white/5 backdrop-blur border border-pink-100 dark:border-pink-900 hover:scale-105 transition-transform">
              <p className="text-4xl font-bold text-pink-500">4.8</p>
              <p className="text-sm text-muted-foreground">User Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
