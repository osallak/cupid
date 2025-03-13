import { cn } from "@/lib/utils";

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  const steps = Array.from({ length: totalSteps }, (_, i) => ({
    number: i + 1,
    active: i + 1 <= currentStep,
    current: i + 1 === currentStep,
  }));

  return (
    <div className="w-full">
      <div className="relative flex items-center justify-between">
        {/* Progress line - position it below the circles */}
        <div className="absolute left-0 right-0 top-4 h-[2px] bg-slate-200 dark:bg-slate-700" />
        <div
          className="absolute left-0 top-4 h-[2px] bg-rose-500 dark:bg-rose-400 transition-all duration-300 ease-in-out"
          style={{
            width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%`,
          }}
        />

        {/* Steps */}
        {steps.map((step) => (
          <div
            key={step.number}
            className="relative flex flex-col items-center"
          >
            <div
              className={cn(
                "z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 text-sm font-medium transition-colors shadow-sm",
                step.active
                  ? "border-rose-500 bg-rose-500 text-white dark:border-rose-400 dark:bg-rose-400"
                  : "border-slate-200 bg-white text-slate-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400"
              )}
            >
              {step.number}
            </div>
            <div className="mt-2 text-xs font-medium text-slate-600 dark:text-slate-400">
              {step.number === 1 && "Basic Info"}
              {step.number === 2 && "Personal"}
              {step.number === 3 && "Preferences"}
              {step.number === 4 && "Profile"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
