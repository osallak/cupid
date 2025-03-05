"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { subYears } from "date-fns";
import { MapPin, Loader2 } from "lucide-react";
import {
  PersonalDetailsValues,
  personalDetailsSchema,
} from "@/lib/schemas/signup-form-schema";
import { toast } from "sonner";
import { DatePicker } from "@/components/ui/date-picker";

interface PersonalDetailsFormProps {
  defaultValues?: Partial<PersonalDetailsValues>;
  onSubmit: (values: PersonalDetailsValues) => void;
  onBack: () => void;
}

export function PersonalDetailsForm({
  defaultValues,
  onSubmit,
  onBack,
}: PersonalDetailsFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const eighteenYearsAgo = subYears(new Date(), 18);
  const minDate = subYears(new Date(), 100);
  const defaultMonth = new Date(new Date().getFullYear() - 25, 0);

  const form = useForm<PersonalDetailsValues>({
    resolver: zodResolver(personalDetailsSchema),
    defaultValues: {
      birthdate: undefined,
      gender: undefined,
      location: "",
      ...defaultValues,
    },
  });

  const getGeolocation = async () => {
    try {
      setIsLoading(true);
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            try {
              const { latitude, longitude } = position.coords;
              const response = await fetch(
                `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
              );
              const data = await response.json();

              let location = "";
              if (data.address) {
                const city =
                  data.address.city ||
                  data.address.town ||
                  data.address.village ||
                  data.address.county ||
                  "";
                const state = data.address.state || "";
                const country = data.address.country || "";

                location = [city, state, country].filter(Boolean).join(", ");
              }

              if (location) {
                form.setValue("location", location);
                toast.success("Location detected successfully!");
              } else {
                toast.error(
                  "Couldn't determine your location. Please enter it manually."
                );
              }
            } catch (error) {
              console.error("Error fetching location data:", error);
              toast.error(
                "Error fetching location data. Please enter it manually."
              );
            } finally {
              setIsLoading(false);
            }
          },
          (error) => {
            console.error("Geolocation error:", error);
            toast.error(
              "Geolocation access denied. Please enter your location manually."
            );
            setIsLoading(false);
          }
        );
      } else {
        toast.error(
          "Geolocation is not supported by your browser. Please enter your location manually."
        );
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Geolocation error:", error);
      toast.error("Error detecting location. Please enter it manually.");
      setIsLoading(false);
    }
  };

  async function handleSubmit(values: PersonalDetailsValues) {
    onSubmit(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 gap-6">
          <FormField
            control={form.control}
            name="birthdate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Date of Birth</FormLabel>
                <FormDescription>
                  You must be at least 18 years old to use Cupid.
                </FormDescription>
                <DatePicker
                  field={field}
                  disabled={(date) => date > eighteenYearsAgo || date < minDate}
                  defaultMonth={defaultMonth}
                  fromYear={1900}
                  toYear={new Date().getFullYear() - 18}
                  placeholder="Select your birth date"
                />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Gender</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your gender" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location</FormLabel>
              <div className="flex gap-3">
                <FormControl>
                  <Input
                    placeholder="City, State, Country"
                    {...field}
                    className="flex-1"
                  />
                </FormControl>
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={getGeolocation}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <MapPin className="h-4 w-4" />
                  )}
                </Button>
              </div>
              <FormDescription>
                This helps us find matches in your area
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-between pt-4">
          <Button
            type="button"
            onClick={onBack}
            variant="outline"
            size="compact"
          >
            Back
          </Button>
          <Button type="submit" variant="gradient" size="compact">
            Continue
          </Button>
        </div>
      </form>
    </Form>
  );
}
