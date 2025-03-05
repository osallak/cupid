import * as z from "zod";

// Step 1: Basic Information Schema
export const basicInfoSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one number"
    ),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

// Step 2: Personal Details Schema
export const personalDetailsSchema = z.object({
  birthdate: z.date({
    required_error: "Please select your birth date",
  }).refine((date) => {
    const today = new Date();
    const age = today.getFullYear() - date.getFullYear();
    const m = today.getMonth() - date.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < date.getDate())) {
      return age - 1 >= 18;
    }
    return age >= 18;
  }, "You must be at least 18 years old"),
  gender: z.enum(["male", "female"], {
    required_error: "Please select your gender",
  }),
  location: z.string().min(1, "Please enter your location"),
});

// Step 3: Preferences Schema
export const preferencesSchema = z.object({
  interestedIn: z.array(z.enum(["male", "female"]), {
    required_error: "Please select at least one preference",
  }).min(1, "Please select at least one preference"),
  ageRangeMin: z.number().min(18, "Minimum age must be at least 18"),
  ageRangeMax: z.number().min(18, "Maximum age must be at least 18"),
}).refine((data) => data.ageRangeMax >= data.ageRangeMin, {
  message: "Maximum age must be greater than or equal to minimum age",
  path: ["ageRangeMax"],
});

// Step 4: Profile Details Schema
export const profileDetailsSchema = z.object({
  bio: z.string().max(500, "Bio must be less than 500 characters"),
  interests: z.array(z.string()).min(1, "Please select at least one interest"),
  photos: z.array(z.string()).min(1, "Please upload at least one photo"),
});

// Combined schema for the entire form
export const signupFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one number"
    ),
  confirmPassword: z.string(),
  birthdate: z.date(),
  gender: z.enum(["male", "female"]),
  location: z.string(),
  interestedIn: z.array(z.enum(["male", "female"])),
  ageRangeMin: z.number(),
  ageRangeMax: z.number(),
  bio: z.string(),
  interests: z.array(z.string()),
  photos: z.array(z.string()),
});

export type BasicInfoValues = z.infer<typeof basicInfoSchema>;
export type PersonalDetailsValues = z.infer<typeof personalDetailsSchema>;
export type PreferencesValues = z.infer<typeof preferencesSchema>;
export type ProfileDetailsValues = z.infer<typeof profileDetailsSchema>;
export type SignupFormValues = z.infer<typeof signupFormSchema>;
