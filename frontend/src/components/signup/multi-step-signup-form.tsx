"use client";
import { useState } from "react";
import { BasicInfoForm } from "./basic-info-form";
import { PersonalDetailsForm } from "./personal-details-form";
import { PreferencesForm } from "./preferences-form";
import { ProfileDetailsForm } from "./profile-details-form";
import { ProgressBar } from "./progress-bar";
import { useMultiStepForm } from "@/lib/hooks/use-multi-step-form";
import {
  BasicInfoValues,
  PersonalDetailsValues,
  PreferencesValues,
  ProfileDetailsValues,
  SignupFormValues,
} from "@/lib/schemas/signup-form-schema";
import { Loader2 } from "lucide-react";

interface MultiStepSignupFormProps {
  onComplete: (data: SignupFormValues) => void;
}

const TOTAL_STEPS = 4;

export function MultiStepSignupForm({ onComplete }: MultiStepSignupFormProps) {
  const [formData, setFormData] = useState<Partial<SignupFormValues>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { currentStepIndex, step, next, back } = useMultiStepForm(TOTAL_STEPS);

  const updateFormData = (stepData: Partial<SignupFormValues>) => {
    setFormData((prev) => ({
      ...prev,
      ...stepData,
    }));
  };

  const handleSubmitBasicInfo = (data: BasicInfoValues) => {
    updateFormData(data);
    next();
  };

  const handleSubmitPersonalDetails = (data: PersonalDetailsValues) => {
    updateFormData(data);
    next();
  };

  const handleSubmitPreferences = (data: PreferencesValues) => {
    updateFormData(data);
    next();
  };

  const handleSubmitProfileDetails = async (data: ProfileDetailsValues) => {
    updateFormData(data);

    // Combine all form data
    const completeFormData = {
      ...formData,
      ...data,
    } as SignupFormValues;

    try {
      setIsSubmitting(true);
      // Submit the form
      await onComplete(completeFormData);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-center mb-2">
          {currentStepIndex === 0 && "Basic Information"}
          {currentStepIndex === 1 && "About You"}
          {currentStepIndex === 2 && "Your Preferences"}
          {currentStepIndex === 3 && "Profile Details"}
        </h2>
        <p className="text-sm text-center text-slate-600 dark:text-slate-400 mb-6">
          {currentStepIndex === 0 && "Let's get started with the basics"}
          {currentStepIndex === 1 && "Tell us a bit about yourself"}
          {currentStepIndex === 2 && "Who would you like to meet?"}
          {currentStepIndex === 3 && "Finish setting up your profile"}
        </p>
        <ProgressBar currentStep={step} totalSteps={TOTAL_STEPS} />
      </div>

      <div>
        {isSubmitting ? (
          <div className="flex flex-col items-center justify-center py-8">
            <Loader2 className="h-8 w-8 animate-spin text-rose-500 dark:text-rose-400 mb-4" />
            <p className="text-center text-sm text-slate-600 dark:text-slate-400">
              Creating your account...
            </p>
          </div>
        ) : (
          <>
            {currentStepIndex === 0 && (
              <BasicInfoForm
                defaultValues={formData}
                onSubmit={handleSubmitBasicInfo}
              />
            )}
            {currentStepIndex === 1 && (
              <PersonalDetailsForm
                defaultValues={formData}
                onSubmit={handleSubmitPersonalDetails}
                onBack={back}
              />
            )}
            {currentStepIndex === 2 && (
              <PreferencesForm
                defaultValues={formData}
                onSubmit={handleSubmitPreferences}
                onBack={back}
              />
            )}
            {currentStepIndex === 3 && (
              <ProfileDetailsForm
                defaultValues={formData}
                onSubmit={handleSubmitProfileDetails}
                onBack={back}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}
