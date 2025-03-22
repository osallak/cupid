"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  MapPin,
  Heart,
  RefreshCw,
  ChevronDown,
  ChevronUp,
  Check,
  Filter,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const filterSchema = z.object({
  gender: z.enum(["male", "female", "both"]),
  ageRange: z.array(z.number()).length(2),
  distance: z.number().min(1).max(100),
  location: z.string().optional(),
  onlyShowWithPhotos: z.boolean().default(true),
  onlyShowInDistance: z.boolean().default(true),
  interests: z.array(z.string()).optional(),
  sortBy: z
    .enum(["recent", "nearby", "compatibility"])
    .default("compatibility"),
});

type FilterValues = z.infer<typeof filterSchema>;

const interestOptions = [
  { id: "music", label: "Music" },
  { id: "travel", label: "Travel" },
  { id: "food", label: "Food" },
  { id: "sports", label: "Sports" },
  { id: "art", label: "Art" },
  { id: "games", label: "Games" },
  { id: "books", label: "Books" },
  { id: "movies", label: "Movies" },
];

export function FilterControls() {
  const [isBasicsOpen, setIsBasicsOpen] = React.useState(true);
  const [isPreferencesOpen, setIsPreferencesOpen] = React.useState(true);
  const [isInterestsOpen, setIsInterestsOpen] = React.useState(false);

  const form = useForm<FilterValues>({
    resolver: zodResolver(filterSchema),
    defaultValues: {
      gender: "both",
      ageRange: [18, 40],
      distance: 25,
      onlyShowWithPhotos: true,
      onlyShowInDistance: true,
      interests: [],
      sortBy: "compatibility",
    },
  });

  function onSubmit(data: FilterValues) {
    // In a real app, you would use this data to filter profiles
    console.log(data);
  }

  function resetFilters() {
    form.reset({
      gender: "both",
      ageRange: [18, 40],
      distance: 25,
      onlyShowWithPhotos: true,
      onlyShowInDistance: true,
      interests: [],
      sortBy: "compatibility",
    });
  }

  return (
    <Card className="border-0 shadow-none">
      <CardHeader className="px-2 pt-2 pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-rose-500" />
            <CardTitle className="text-lg">Filters</CardTitle>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={resetFilters}
            className="h-8 px-2 text-muted-foreground hover:text-foreground"
          >
            <RefreshCw className="mr-1 h-3.5 w-3.5" />
            Reset
          </Button>
        </div>
        <CardDescription>
          Customize your discovery preferences to find your perfect match
        </CardDescription>
      </CardHeader>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <CardContent className="px-2 py-0">
            {/* Basics Section */}
            <Collapsible
              open={isBasicsOpen}
              onOpenChange={setIsBasicsOpen}
              className="space-y-4"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-foreground">Basics</h3>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" size="sm" className="p-1 h-7 w-7">
                    {isBasicsOpen ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </Button>
                </CollapsibleTrigger>
              </div>
              <Separator />
              <CollapsibleContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="sortBy"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Sort by</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="bg-background">
                            <SelectValue placeholder="Select a sorting method" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="compatibility">
                            <div className="flex items-center">
                              <Heart className="mr-2 h-4 w-4 text-rose-500" />
                              <span>Compatibility</span>
                            </div>
                          </SelectItem>
                          <SelectItem value="nearby">
                            <div className="flex items-center">
                              <MapPin className="mr-2 h-4 w-4 text-blue-500" />
                              <span>Distance (nearest)</span>
                            </div>
                          </SelectItem>
                          <SelectItem value="recent">
                            <div className="flex items-center">
                              <Check className="mr-2 h-4 w-4 text-green-500" />
                              <span>Recently active</span>
                            </div>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="gender"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>I&apos;m interested in</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex gap-3"
                        >
                          <FormItem className="flex items-center space-x-0 space-y-0 rounded-md border bg-background p-3 [&:has([data-state=checked])]:border-rose-500 [&:has([data-state=checked])]:bg-rose-50 dark:[&:has([data-state=checked])]:bg-rose-950/30 flex-1">
                            <FormControl>
                              <RadioGroupItem
                                value="male"
                                className="sr-only"
                              />
                            </FormControl>
                            <FormLabel className="font-normal text-center w-full cursor-pointer">
                              Men
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-0 space-y-0 rounded-md border bg-background p-3 [&:has([data-state=checked])]:border-rose-500 [&:has([data-state=checked])]:bg-rose-50 dark:[&:has([data-state=checked])]:bg-rose-950/30 flex-1">
                            <FormControl>
                              <RadioGroupItem
                                value="female"
                                className="sr-only"
                              />
                            </FormControl>
                            <FormLabel className="font-normal text-center w-full cursor-pointer">
                              Women
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-0 space-y-0 rounded-md border bg-background p-3 [&:has([data-state=checked])]:border-rose-500 [&:has([data-state=checked])]:bg-rose-50 dark:[&:has([data-state=checked])]:bg-rose-950/30 flex-1">
                            <FormControl>
                              <RadioGroupItem
                                value="both"
                                className="sr-only"
                              />
                            </FormControl>
                            <FormLabel className="font-normal text-center w-full cursor-pointer">
                              Both
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="ageRange"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <div className="flex items-center justify-between">
                        <FormLabel>Age Range</FormLabel>
                        <span className="text-sm text-muted-foreground">
                          {field.value[0]} - {field.value[1]} years
                        </span>
                      </div>
                      <FormControl>
                        <div className="space-y-2">
                          <Slider
                            defaultValue={field.value}
                            max={80}
                            min={18}
                            step={1}
                            onValueChange={field.onChange}
                            className="py-4"
                          />
                          <div className="flex justify-between text-xs text-muted-foreground">
                            <p>18</p>
                            <p>80+</p>
                          </div>
                        </div>
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="distance"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <div className="flex items-center justify-between">
                        <FormLabel>Maximum Distance</FormLabel>
                        <Badge variant="outline" className="font-normal">
                          {field.value} km
                        </Badge>
                      </div>
                      <FormControl>
                        <div className="space-y-2">
                          <Slider
                            defaultValue={[field.value]}
                            max={100}
                            min={1}
                            step={1}
                            onValueChange={(values) =>
                              field.onChange(values[0])
                            }
                            className="py-4"
                          />
                          <div className="flex justify-between text-xs text-muted-foreground">
                            <p>1 km</p>
                            <p>100 km</p>
                          </div>
                        </div>
                      </FormControl>
                    </FormItem>
                  )}
                />
              </CollapsibleContent>
            </Collapsible>

            {/* Preferences Section */}
            <Collapsible
              open={isPreferencesOpen}
              onOpenChange={setIsPreferencesOpen}
              className="space-y-4 mt-6"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-foreground">
                  Preferences
                </h3>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" size="sm" className="p-1 h-7 w-7">
                    {isPreferencesOpen ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </Button>
                </CollapsibleTrigger>
              </div>
              <Separator />
              <CollapsibleContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>Location</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                          <Input
                            className="pl-9 bg-background"
                            placeholder="Set location"
                            {...field}
                            value={field.value || ""}
                          />
                        </div>
                      </FormControl>
                      <FormDescription className="text-xs">
                        By default, your current location will be used
                      </FormDescription>
                    </FormItem>
                  )}
                />

                <div className="space-y-3">
                  <FormField
                    control={form.control}
                    name="onlyShowWithPhotos"
                    render={({ field }) => (
                      <FormItem className="flex items-start space-x-3 space-y-0 rounded-md border bg-card p-4 hover:bg-accent/5 transition-colors">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className="mt-0.5 data-[state=checked]:bg-rose-500 data-[state=checked]:border-rose-500"
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-sm">
                            Only show people with photos
                          </FormLabel>
                          <FormDescription className="text-xs">
                            Hide profiles that don&apos;t have any pictures
                          </FormDescription>
                        </div>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="onlyShowInDistance"
                    render={({ field }) => (
                      <FormItem className="flex items-start space-x-3 space-y-0 rounded-md border bg-card p-4 hover:bg-accent/5 transition-colors">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className="mt-0.5 data-[state=checked]:bg-rose-500 data-[state=checked]:border-rose-500"
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-sm">
                            Only show people within distance
                          </FormLabel>
                          <FormDescription className="text-xs">
                            Hide profiles outside your maximum distance setting
                          </FormDescription>
                        </div>
                      </FormItem>
                    )}
                  />
                </div>
              </CollapsibleContent>
            </Collapsible>

            {/* Interests Section */}
            <Collapsible
              open={isInterestsOpen}
              onOpenChange={setIsInterestsOpen}
              className="space-y-4 mt-6"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-foreground">
                  Interests
                </h3>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" size="sm" className="p-1 h-7 w-7">
                    {isInterestsOpen ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </Button>
                </CollapsibleTrigger>
              </div>
              <Separator />
              <CollapsibleContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="interests"
                  render={({ field }) => (
                    <FormItem>
                      <FormDescription className="text-sm mb-3">
                        Select interests you want to find in others
                      </FormDescription>
                      <div className="grid grid-cols-2 gap-2">
                        {interestOptions.map((option) => (
                          <FormItem
                            key={option.id}
                            className={cn(
                              "flex flex-row items-center space-x-3 space-y-0 rounded-md border p-3 cursor-pointer hover:bg-accent/5 transition-colors",
                              field.value?.includes(option.id) &&
                                "border-rose-500 bg-rose-50/50 dark:bg-rose-950/20"
                            )}
                            onClick={() => {
                              const currentValues = field.value || [];
                              return currentValues.includes(option.id)
                                ? field.onChange(
                                    currentValues.filter(
                                      (value) => value !== option.id
                                    )
                                  )
                                : field.onChange([...currentValues, option.id]);
                            }}
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(option.id)}
                                onCheckedChange={(checked) => {
                                  const currentValues = field.value || [];
                                  return checked
                                    ? field.onChange([
                                        ...currentValues,
                                        option.id,
                                      ])
                                    : field.onChange(
                                        currentValues?.filter(
                                          (value) => value !== option.id
                                        )
                                      );
                                }}
                                className="data-[state=checked]:bg-rose-500 data-[state=checked]:border-rose-500"
                              />
                            </FormControl>
                            <FormLabel className="font-normal cursor-pointer">
                              {option.label}
                            </FormLabel>
                          </FormItem>
                        ))}
                      </div>
                    </FormItem>
                  )}
                />
              </CollapsibleContent>
            </Collapsible>
          </CardContent>

          <CardFooter className="px-2 pt-4 pb-2 flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              {form.watch("interests")?.length ? (
                <span className="flex items-center gap-1">
                  <Check className="h-3.5 w-3.5 text-green-500" />
                  {form.watch("interests")?.length || 0} interests selected
                </span>
              ) : (
                <span>No interests selected</span>
              )}
            </div>
            <Button
              type="submit"
              className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white"
            >
              Apply Filters
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
