import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import {
  ProfileDetailsValues,
  profileDetailsSchema,
} from "@/lib/schemas/signup-form-schema";
import { X, Upload } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface ProfileDetailsFormProps {
  defaultValues?: Partial<ProfileDetailsValues>;
  onSubmit: (values: ProfileDetailsValues) => void;
  onBack: () => void;
}

// Sample interests data
const interestOptions = [
  { value: "traveling", label: "Traveling" },
  { value: "cooking", label: "Cooking" },
  { value: "reading", label: "Reading" },
  { value: "fitness", label: "Fitness" },
  { value: "music", label: "Music" },
  { value: "movies", label: "Movies" },
  { value: "art", label: "Art" },
  { value: "photography", label: "Photography" },
  { value: "gaming", label: "Gaming" },
  { value: "hiking", label: "Hiking" },
  { value: "dancing", label: "Dancing" },
  { value: "yoga", label: "Yoga" },
  { value: "writing", label: "Writing" },
  { value: "sports", label: "Sports" },
  { value: "volunteering", label: "Volunteering" },
];

export function ProfileDetailsForm({
  defaultValues,
  onSubmit,
  onBack,
}: ProfileDetailsFormProps) {
  const [photoFiles, setPhotoFiles] = useState<string[]>(
    defaultValues?.photos || []
  );

  const form = useForm<ProfileDetailsValues>({
    resolver: zodResolver(profileDetailsSchema),
    defaultValues: {
      bio: defaultValues?.bio || "",
      interests: defaultValues?.interests || [],
      photos: photoFiles,
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    // In a real app, you'd upload these to a server and get back URLs
    // Here we'll just create object URLs for demo purposes
    const newPhotos = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );
    const updatedPhotos = [...photoFiles, ...newPhotos];

    setPhotoFiles(updatedPhotos);
    form.setValue("photos", updatedPhotos, { shouldValidate: true });
  };

  const removePhoto = (index: number) => {
    const updatedPhotos = [...photoFiles];
    updatedPhotos.splice(index, 1);
    setPhotoFiles(updatedPhotos);
    form.setValue("photos", updatedPhotos, { shouldValidate: true });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="bio"
            render={({ field }) => (
              <FormItem>
                <FormLabel>About Me</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us a little bit about yourself..."
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  This will be displayed on your profile. Max 500 characters.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="interests"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Interests</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        role="combobox"
                        className={cn(
                          "w-full justify-between",
                          !field.value.length && "text-muted-foreground"
                        )}
                      >
                        {field.value.length > 0
                          ? `${field.value.length} selected`
                          : "Select interests"}
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-full p-0">
                    <div className="p-2">
                      <div className="mb-2">
                        <input
                          type="text"
                          placeholder="Search interests..."
                          className="w-full rounded-md border border-input px-3 py-2 text-sm"
                          onChange={(e) => {
                            console.log("Search:", e.target.value);
                          }}
                        />
                      </div>
                      <div className="max-h-64 overflow-y-auto space-y-1">
                        {interestOptions.map((option) => {
                          const isSelected = field.value.includes(option.value);
                          return (
                            <div
                              key={option.value}
                              className={cn(
                                "flex items-center space-x-2 rounded-md px-2 py-1.5 text-sm cursor-pointer",
                                isSelected
                                  ? "bg-accent text-accent-foreground"
                                  : "hover:bg-accent/50"
                              )}
                              onClick={() => {
                                const newValue = isSelected
                                  ? field.value.filter(
                                      (item) => item !== option.value
                                    )
                                  : [...field.value, option.value];
                                form.setValue("interests", newValue, {
                                  shouldValidate: true,
                                });
                              }}
                            >
                              <div className="flex h-4 w-4 items-center justify-center rounded-sm border border-primary">
                                {isSelected && <X className="h-3 w-3" />}
                              </div>
                              <span>{option.label}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
                <div className="flex flex-wrap gap-1 mt-1">
                  {field.value.map((item) => {
                    const interest = interestOptions.find(
                      (i) => i.value === item
                    );
                    return interest ? (
                      <Badge
                        key={interest.value}
                        variant="secondary"
                        className="mr-1 mb-1"
                      >
                        {interest.label}
                        <button
                          type="button"
                          className="ml-1 ring-offset-background rounded-full outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                          onClick={() => {
                            const newValue = field.value.filter(
                              (value) => value !== item
                            );
                            form.setValue("interests", newValue, {
                              shouldValidate: true,
                            });
                          }}
                        >
                          <X className="h-3 w-3 text-muted-foreground hover:text-foreground" />
                        </button>
                      </Badge>
                    ) : null;
                  })}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="photos"
            render={() => (
              <FormItem>
                <FormLabel>Photos</FormLabel>
                <FormDescription>
                  Upload photos for your profile. First photo will be your main
                  profile picture.
                </FormDescription>
                <div className="grid grid-cols-3 gap-2">
                  {photoFiles.map((photo, index) => (
                    <div
                      key={index}
                      className="relative aspect-square rounded-md overflow-hidden group"
                    >
                      <Image
                        src={photo}
                        alt={`User photo ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                      <button
                        type="button"
                        onClick={() => removePhoto(index)}
                        className="absolute top-1 right-1 bg-black/70 p-1 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X className="h-4 w-4" />
                      </button>
                      {index === 0 && (
                        <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-xs py-1 text-center">
                          Main Photo
                        </div>
                      )}
                    </div>
                  ))}
                  {photoFiles.length < 6 && (
                    <label className="border-2 border-dashed border-gray-300 rounded-md flex flex-col items-center justify-center cursor-pointer aspect-square hover:bg-gray-50 transition-colors">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="hidden"
                        multiple={photoFiles.length < 5}
                      />
                      <div className="flex flex-col items-center p-4">
                        <Upload className="h-6 w-6 mb-2 text-gray-400" />
                        <span className="text-xs text-center text-gray-500">
                          Upload Photo
                        </span>
                      </div>
                    </label>
                  )}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
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
            Complete Registration
          </Button>
        </div>
      </form>
    </Form>
  );
}
