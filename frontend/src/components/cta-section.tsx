"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-20 md:py-32 bg-primary/5">
      <div className="container">
        <div className="mx-auto max-w-[58rem] text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Ready to Find Your Perfect Match?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Join thousands of singles who have already found meaningful
            connections on our platform.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/signup">Get Started for Free</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            No credit card required. Start with our free plan.
          </p>
        </div>
      </div>
    </section>
  );
}
