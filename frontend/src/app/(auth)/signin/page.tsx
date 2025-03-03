import { AuthForm } from "@/components/auth/auth-form";
import { Heart, Sparkles } from "lucide-react";
import { FloatingHearts } from "@/components/floating-hearts";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-50 via-white to-white dark:from-pink-950 dark:via-background dark:to-background p-4 relative">
      <FloatingHearts />
      {/* Logo and Welcome */}
      <div className="w-full max-w-md text-center mb-12">
        <div className="flex items-center justify-center gap-6 mb-8">
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
          Welcome back!
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          Your perfect match is waiting for you
        </p>
      </div>

      {/* Auth Form Card */}
      <div className="w-full max-w-md">
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl shadow-slate-200 dark:shadow-slate-900/20 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors p-6">
          <AuthForm type="signin" />
        </div>
      </div>

      {/* Stats */}
      <div className="w-full max-w-md mt-12 grid grid-cols-3 gap-4">
        <div className="text-center p-4 rounded-xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200 dark:border-slate-800">
          <p className="text-2xl font-bold text-rose-500 dark:text-rose-400">
            10M+
          </p>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
            Active Users
          </p>
        </div>
        <div className="text-center p-4 rounded-xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200 dark:border-slate-800">
          <p className="text-2xl font-bold text-rose-500 dark:text-rose-400">
            95%
          </p>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
            Match Rate
          </p>
        </div>
        <div className="text-center p-4 rounded-xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200 dark:border-slate-800">
          <p className="text-2xl font-bold text-rose-500 dark:text-rose-400">
            4.9
          </p>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
            App Rating
          </p>
        </div>
      </div>
    </div>
  );
}
