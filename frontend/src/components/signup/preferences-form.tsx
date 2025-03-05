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
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import {
  PreferencesValues,
  preferencesSchema,
} from "@/lib/schemas/signup-form-schema";

interface PreferencesFormProps {
  defaultValues?: Partial<PreferencesValues>;
  onSubmit: (values: PreferencesValues) => void;
  onBack: () => void;
}

const genderOptions = [
  { id: "male" as const, label: "Male" },
  { id: "female" as const, label: "Female" },
];

export function PreferencesForm({
  defaultValues,
  onSubmit,
  onBack,
}: PreferencesFormProps) {
  const form = useForm<PreferencesValues>({
    resolver: zodResolver(preferencesSchema),
    defaultValues: {
      interestedIn: defaultValues?.interestedIn || [],
      ageRangeMin: defaultValues?.ageRangeMin || 18,
      ageRangeMax: defaultValues?.ageRangeMax || 40,
    },
  });

  const watchedAgeMin = form.watch("ageRangeMin");
  const watchedAgeMax = form.watch("ageRangeMax");

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="interestedIn"
            render={() => (
              <FormItem>
                <div className="mb-2">
                  <FormLabel className="text-base">Interested In</FormLabel>
                  <FormDescription>
                    Select who you&apos;d like to meet on Cupid
                  </FormDescription>
                </div>
                {genderOptions.map((option) => (
                  <FormField
                    key={option.id}
                    control={form.control}
                    name="interestedIn"
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={option.id}
                          className="flex flex-row items-start space-x-3 space-y-0 py-1"
                        >
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(option.id)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...field.value, option.id])
                                  : field.onChange(
                                      field.value?.filter(
                                        (value) => value !== option.id
                                      )
                                    );
                              }}
                            />
                          </FormControl>
                          <FormLabel className="font-normal">
                            {option.label}
                          </FormLabel>
                        </FormItem>
                      );
                    }}
                  />
                ))}
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="space-y-2 pt-2">
            <div>
              <FormLabel className="text-base">Age Range</FormLabel>
              <FormDescription>
                Select the age range of people you&apos;d like to match with
              </FormDescription>
              <div className="text-sm font-medium pt-2">
                {watchedAgeMin} -{" "}
                {watchedAgeMax === 100 ? "100+" : watchedAgeMax} years
              </div>
            </div>

            <FormField
              control={form.control}
              name="ageRangeMin"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs">Minimum Age</FormLabel>
                  <FormControl>
                    <Slider
                      min={18}
                      max={100}
                      step={1}
                      value={[field.value]}
                      onValueChange={(vals) => {
                        field.onChange(vals[0]);
                        // Ensure max is always >= min
                        const currentMax = form.getValues("ageRangeMax");
                        if (vals[0] > currentMax) {
                          form.setValue("ageRangeMax", vals[0]);
                        }
                      }}
                      className="py-2"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="ageRangeMax"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs">Maximum Age</FormLabel>
                  <FormControl>
                    <Slider
                      min={18}
                      max={100}
                      step={1}
                      value={[field.value]}
                      onValueChange={(vals) => {
                        field.onChange(vals[0]);
                        // Ensure min is always <= max
                        const currentMin = form.getValues("ageRangeMin");
                        if (vals[0] < currentMin) {
                          form.setValue("ageRangeMin", vals[0]);
                        }
                      }}
                      className="py-2"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="flex justify-between pt-4">
          <Button
            type="button"
            variant="outline"
            size="compact"
            onClick={onBack}
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
