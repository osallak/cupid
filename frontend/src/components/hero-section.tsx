"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sparkles, Heart } from "lucide-react";
import { FloatingHearts } from "@/components/floating-hearts";

export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center py-20 overflow-hidden">
      {/* Background with gradient and hearts */}
      <div className="absolute inset-0 bg-gradient-to-b from-pink-50 via-white to-white dark:from-pink-950 dark:via-background dark:to-background" />
      <div className="absolute inset-0 opacity-30">
        <FloatingHearts />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-pink-200/20 dark:bg-pink-800/10 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-rose-200/20 dark:bg-rose-800/10 blur-3xl" />

      {/* Content */}
      <div className="container relative">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left side - Text content */}
          <div className="flex flex-col gap-8 text-center lg:text-left">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-50 dark:bg-pink-950/50 text-pink-600 dark:text-pink-300 shadow-sm">
                <Heart className="w-4 h-4 fill-current" />
                <span className="text-sm font-medium">Find Your Soulmate</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Where <span className="text-pink-500 italic">Love</span> Finds
                Its Way
              </h1>
              <p className="text-lg text-muted-foreground sm:text-xl max-w-[42rem]">
                Experience the magic of connection. Our intelligent matching
                brings together hearts that beat as one.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="text-lg h-12 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white border-0 shadow-md hover:shadow-lg transition-all"
                asChild
              >
                <Link href="/signup">Begin Your Love Story</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg h-12 border-pink-200 dark:border-pink-800 hover:bg-pink-50 dark:hover:bg-pink-950 shadow-sm"
                asChild
              >
                <Link href="/how-it-works">Discover How</Link>
              </Button>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-4 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-pink-200 border-2 border-white dark:border-gray-900 flex items-center justify-center text-xs">
                  👩
                </div>
                <div className="w-8 h-8 rounded-full bg-blue-200 border-2 border-white dark:border-gray-900 flex items-center justify-center text-xs">
                  👨
                </div>
                <div className="w-8 h-8 rounded-full bg-green-200 border-2 border-white dark:border-gray-900 flex items-center justify-center text-xs">
                  👩
                </div>
                <div className="w-8 h-8 rounded-full bg-purple-200 border-2 border-white dark:border-gray-900 flex items-center justify-center text-xs">
                  👨
                </div>
              </div>
              <span>Join 10,000+ singles today</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Already found someone?{" "}
              <Link
                href="/signin"
                className="text-pink-500 hover:text-pink-600 hover:underline font-medium"
              >
                Sign in
              </Link>
            </p>
          </div>

          {/* Right side - Image and stats */}
          <div className="relative">
            {/* Stats cards - adjusted position to avoid overlapping with text */}
            <div className="hidden lg:flex flex-col gap-4 absolute top-1/3 -left-16 z-20">
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-4 border border-pink-100 dark:border-pink-900/30 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-pink-100 dark:bg-pink-900/50 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-pink-500" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-pink-500">95%</p>
                    <p className="text-xs text-muted-foreground">Match Rate</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-4 border border-pink-100 dark:border-pink-900/30 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-pink-100 dark:bg-pink-900/50 flex items-center justify-center">
                    <Heart className="w-5 h-5 text-pink-500" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-pink-500">1000+</p>
                    <p className="text-xs text-muted-foreground">
                      Happy Couples
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Main success story image */}
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-pink-100 dark:border-pink-900/30 transform lg:rotate-1 hover:rotate-0 transition-transform duration-500">
              <Image
                src="/images/hero/couple.png"
                alt="Happy couple"
                width={600}
                height={800}
                className="object-cover w-full aspect-[3/4]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Heart className="w-5 h-5 text-pink-300 fill-current" />
                  <span className="text-sm font-medium text-pink-200">
                    Perfect Match
                  </span>
                </div>
                <h3 className="text-xl font-bold">Sarah & Michael</h3>
                <p className="text-sm text-gray-200">Matched 6 months ago</p>
              </div>
            </div>

            {/* Mobile stats cards */}
            <div className="flex lg:hidden justify-between mt-6">
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-4 border border-pink-100 dark:border-pink-900/30">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-pink-100 dark:bg-pink-900/50 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-pink-500" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-pink-500">95%</p>
                    <p className="text-xs text-muted-foreground">Match Rate</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-4 border border-pink-100 dark:border-pink-900/30">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-pink-100 dark:bg-pink-900/50 flex items-center justify-center">
                    <Heart className="w-5 h-5 text-pink-500" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-pink-500">1000+</p>
                    <p className="text-xs text-muted-foreground">
                      Happy Couples
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
