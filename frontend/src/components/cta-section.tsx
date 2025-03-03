"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-pink-50 via-white to-white dark:from-pink-950 dark:via-background dark:to-background opacity-50" />

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-40 h-40 rounded-full bg-pink-100/30 dark:bg-pink-900/20 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-60 h-60 rounded-full bg-rose-100/30 dark:bg-rose-900/20 blur-3xl" />

      <div className="container relative">
        <div className="rounded-3xl overflow-hidden bg-gradient-to-r from-pink-100 to-rose-100 dark:from-pink-900/50 dark:to-rose-900/50 p-1 shadow-xl">
          <div className="bg-white dark:bg-gray-900 rounded-[1.4rem] p-8 md:p-12 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute -top-4 -left-4 w-32 h-32">
                <Heart className="w-full h-full" />
              </div>
              <div className="absolute top-1/4 right-1/4 w-16 h-16">
                <Heart className="w-full h-full" />
              </div>
              <div className="absolute bottom-1/3 left-1/3 w-24 h-24">
                <Heart className="w-full h-full" />
              </div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32">
                <Heart className="w-full h-full" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center relative">
              <div className="text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-50 dark:bg-pink-950/50 text-pink-600 dark:text-pink-300 shadow-sm mb-6">
                  <Heart className="w-4 h-4 fill-current" />
                  <span className="text-sm font-medium">
                    Limited Time Offer
                  </span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
                  Your <span className="text-pink-500">Perfect Match</span> is
                  Waiting
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto md:mx-0">
                  Join thousands of singles who have already found meaningful
                  connections. Start your journey to love today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
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
                <p className="mt-4 text-sm text-muted-foreground">
                  No credit card required. 7-day free trial.
                </p>

                {/* Testimonial */}
                <div className="mt-8 flex items-center gap-4 justify-center md:justify-start">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-900 overflow-hidden">
                      <Image
                        src="/images/hero/avatar-1.jpg"
                        alt="User"
                        width={32}
                        height={32}
                        className="object-cover"
                      />
                    </div>
                    <div className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-900 overflow-hidden">
                      <Image
                        src="/images/hero/avatar-2.jpg"
                        alt="User"
                        width={32}
                        height={32}
                        className="object-cover"
                      />
                    </div>
                    <div className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-900 overflow-hidden">
                      <Image
                        src="/images/hero/avatar-3.jpg"
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

              <div className="relative hidden md:block">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-pink-100 dark:border-pink-900/30 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  <Image
                    src="/images/hero/couple-cta.jpg"
                    alt="Happy couple"
                    width={400}
                    height={533}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6 text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <Heart className="w-5 h-5 text-pink-300 fill-current" />
                      <span className="text-sm font-medium text-pink-200">
                        Success Story
                      </span>
                    </div>
                    <h3 className="text-xl font-bold">Emma & James</h3>
                    <p className="text-sm text-gray-200">
                      Matched 1 year ago • Now engaged
                    </p>
                  </div>
                </div>

                {/* Stats card */}
                <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-900 rounded-xl shadow-lg p-4 border border-pink-100 dark:border-pink-900/30 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                  <p className="text-sm font-medium mb-1">Success Rate</p>
                  <div className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-pink-500 fill-current" />
                    <p className="text-xl font-bold text-pink-500">92%</p>
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
