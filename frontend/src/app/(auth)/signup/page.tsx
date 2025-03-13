"use client";

import Link from "next/link";
import { FloatingHearts } from "@/components/floating-hearts";
import { MultiStepSignupForm } from "@/components/signup/multi-step-signup-form";
import { SignupFormValues } from "@/lib/schemas/signup-form-schema";
import { Heart, Sparkles } from "lucide-react";

export default function SignUpPage() {
  const handleSignupComplete = async (data: SignupFormValues) => {
    // In a real app, you would submit this data to your API
    console.log("Form submission complete with data:", data);

    // For demo purposes, we'll simulate an API call
    return new Promise((resolve) => setTimeout(resolve, 2000));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-50 via-white to-white dark:from-pink-950 dark:via-background dark:to-background p-4 relative">
      <FloatingHearts />

      {/* Logo and Welcome */}
      <div className="w-full max-w-md text-center mb-8">
        <div className="flex items-center justify-center gap-6 mb-6">
          <div className="flex items-center gap-3">
            <Heart
              className="h-12 w-12 text-rose-500 dark:text-rose-400"
              fill="currentColor"
            />
            <span className="text-4xl font-bold text-rose-500 dark:text-rose-400">
              Cupid
            </span>
          </div>
          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
            <Sparkles className="w-5 h-5" />
            <span className="text-lg">Smart Matching</span>
          </div>
        </div>
        <h1 className="text-2xl font-bold tracking-tight mb-2 text-slate-900 dark:text-slate-50">
          Join Cupid Today
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          Create your profile and start connecting with your perfect match
        </p>
      </div>

      {/* Multi-step Form */}
      <div className="w-full max-w-lg">
        <div className="bg-white dark:bg-[#2a0f1c]/80 rounded-2xl shadow-xl shadow-slate-200 dark:shadow-pink-950/10 border border-slate-200 dark:border-pink-950/30 hover:border-slate-300 dark:hover:border-pink-900/40 transition-colors p-6">
          <MultiStepSignupForm onComplete={handleSignupComplete} />
        </div>
      </div>

      {/* Footer with privacy links */}
      <div className="mt-8 text-center text-sm text-slate-600 dark:text-slate-400">
        By continuing, you agree to our{" "}
        <Link
          href="/terms"
          className="text-rose-500 dark:text-rose-400 hover:underline"
        >
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link
          href="/privacy"
          className="text-rose-500 dark:text-rose-400 hover:underline"
        >
          Privacy Policy
        </Link>
      </div>
    </div>
  );
}
