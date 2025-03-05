"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heart, Sparkles, Check } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-pink-50 via-white to-white dark:from-pink-950 dark:via-background dark:to-background opacity-50" />

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-40 h-40 rounded-full bg-pink-100/30 dark:bg-pink-900/20 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-60 h-60 rounded-full bg-rose-100/30 dark:bg-rose-900/20 blur-3xl" />

      <div className="container relative">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-50 dark:bg-pink-950/50 text-pink-600 dark:text-pink-300 shadow-sm mb-6">
            <Heart className="w-4 h-4 fill-current" />
            <span className="text-sm font-medium">Limited Time Offer</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
            Your <span className="text-pink-500">Perfect Match</span> is Waiting
          </h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of singles who have already found meaningful
            connections.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left side - Success stories */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white dark:bg-gray-900/80 dark:backdrop-blur-sm rounded-2xl shadow-xl border border-pink-100 dark:border-pink-900/30 p-6 transform transition-all hover:translate-y-[-5px]">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-pink-100 dark:border-pink-800">
                  <Image
                    src="/images/hero/couple-cta.png"
                    alt="Emma & James"
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Heart className="w-4 h-4 text-pink-500 fill-current" />
                    <span className="text-sm font-medium text-pink-500">
                      Success Story
                    </span>
                  </div>
                  <h3 className="text-lg font-bold">Emma & James</h3>
                  <p className="text-sm text-muted-foreground">
                    Matched 1 year ago • Now engaged
                  </p>
                  <p className="mt-3 text-sm italic">
                    &ldquo;Cupid&apos;s matching algorithm brought us together
                    when we least expected it. We&apos;re proof that true love
                    exists!&rdquo;
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-900/80 dark:backdrop-blur-sm rounded-xl shadow-lg p-4 border border-pink-100 dark:border-pink-900/30">
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
              <div className="bg-white dark:bg-gray-900/80 dark:backdrop-blur-sm rounded-xl shadow-lg p-4 border border-pink-100 dark:border-pink-900/30">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-pink-100 dark:bg-pink-900/50 flex items-center justify-center">
                    <Heart className="w-5 h-5 text-pink-500 fill-current" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-pink-500">92%</p>
                    <p className="text-xs text-muted-foreground">
                      Success Rate
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - CTA card */}
          <div className="lg:col-span-7">
            <div className="bg-gradient-to-r from-pink-100 to-rose-100 dark:from-pink-900/50 dark:to-rose-900/50 p-1 rounded-2xl shadow-xl">
              <div className="bg-white dark:bg-gray-900/95 dark:backdrop-blur-md rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-6">
                  Start Your Journey Today
                </h3>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-pink-100 dark:bg-pink-900/50 flex items-center justify-center mt-0.5">
                      <Check className="w-3.5 h-3.5 text-pink-500" />
                    </div>
                    <div>
                      <p className="font-medium">7-day free trial</p>
                      <p className="text-sm text-muted-foreground">
                        No credit card required to get started
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-pink-100 dark:bg-pink-900/50 flex items-center justify-center mt-0.5">
                      <Check className="w-3.5 h-3.5 text-pink-500" />
                    </div>
                    <div>
                      <p className="font-medium">Intelligent matching</p>
                      <p className="text-sm text-muted-foreground">
                        Our AI algorithm finds your perfect match
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-pink-100 dark:bg-pink-900/50 flex items-center justify-center mt-0.5">
                      <Check className="w-3.5 h-3.5 text-pink-500" />
                    </div>
                    <div>
                      <p className="font-medium">Success guarantee</p>
                      <p className="text-sm text-muted-foreground">
                        Find your match or get 3 months free
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="text-lg h-12 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white border-0 shadow-md hover:shadow-lg transition-all"
                    asChild
                  >
                    <Link href="/signup">Start Free Trial</Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg h-12 border-pink-200 dark:border-pink-800 hover:bg-pink-50 dark:hover:bg-pink-950 shadow-sm"
                    asChild
                  >
                    <Link href="/pricing">View Plans</Link>
                  </Button>
                </div>

                <div className="mt-8 flex items-center gap-4">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-900 overflow-hidden">
                      <Image
                        src="/images/hero/avatar-1.png"
                        alt="User"
                        width={32}
                        height={32}
                        className="object-cover"
                      />
                    </div>
                    <div className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-900 overflow-hidden">
                      <Image
                        src="/images/hero/avatar-2.png"
                        alt="User"
                        width={32}
                        height={32}
                        className="object-cover"
                      />
                    </div>
                    <div className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-900 overflow-hidden">
                      <Image
                        src="/images/hero/avatar-1.png"
                        alt="User"
                        width={32}
                        height={32}
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="text-sm">
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Heart
                          key={star}
                          className="w-3 h-3 text-pink-500 fill-current"
                        />
                      ))}
                      <span className="ml-1 font-medium">5.0</span>
                    </div>
                    <p className="text-muted-foreground">from 2,000+ reviews</p>
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
