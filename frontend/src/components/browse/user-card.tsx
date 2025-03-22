"use client";

import * as React from "react";
import Image from "next/image";
import { Heart, MapPin, X, Zap } from "lucide-react";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

interface User {
  id: string;
  name: string;
  age: number;
  images: string[];
  location: string;
  distance: string;
  bio: string;
  interests: string[];
  lastActive?: string;
  compatibilityScore?: number;
  occupation?: string;
  languages?: string[];
}

interface UserCardProps {
  user: User;
  direction: "left" | "right" | null;
}

export function UserCard({ user, direction }: UserCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  // Handle changing images
  const nextImage = () => {
    if (currentImageIndex < user.images.length - 1) {
      setCurrentImageIndex((prev) => prev + 1);
    }
  };

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex((prev) => prev - 1);
    }
  };

  // Handle tap on left/right sides of the image
  const handleImageClick = (e: React.MouseEvent) => {
    const { clientX, currentTarget } = e;
    const { left, width } = currentTarget.getBoundingClientRect();
    const clickPosition = clientX - left;

    // If clicked on the left third, go to previous image
    if (clickPosition < width / 3) {
      prevImage();
    }
    // If clicked on the right third, go to next image
    else if (clickPosition > (width * 2) / 3) {
      nextImage();
    }
    // Middle third does nothing (could be used for other actions)
  };

  return (
    <Card className="relative h-full w-full overflow-hidden rounded-xl border shadow-lg">
      {/* Direction indicators */}
      {direction === "right" && (
        <div className="absolute left-4 top-4 z-30 rounded-full bg-green-500/90 p-2 shadow-lg">
          <Heart className="h-6 w-6 text-white" fill="white" />
        </div>
      )}
      {direction === "left" && (
        <div className="absolute right-4 top-4 z-30 rounded-full bg-red-500/90 p-2 shadow-lg">
          <X className="h-6 w-6 text-white" />
        </div>
      )}

      {/* Image gallery */}
      <div
        className="relative h-full w-full cursor-pointer"
        onClick={handleImageClick}
      >
        {/* Image indicators - at top like Tinder */}
        <div className="absolute left-0 top-3 z-20 flex w-full justify-center gap-1 px-2">
          {user.images.map((_, index) => (
            <div
              key={index}
              className={cn(
                "h-1 flex-1 rounded-full transition-all duration-300",
                index === currentImageIndex ? "bg-white" : "bg-white/40"
              )}
            />
          ))}
        </div>

        {/* Images */}
        {user.images.map((image, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 h-full w-full transition-opacity duration-300",
              index === currentImageIndex
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            )}
          >
            <Image
              src={image}
              alt={`Photo of ${user.name}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}

        {/* Gradient overlay for better text readability - more subtle */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* User information - at bottom like Tinder */}
      <div className="absolute bottom-0 left-0 w-full p-4 z-10">
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold text-white">{user.name}</h2>
              <span className="text-lg font-medium text-white/90">
                {user.age}
              </span>

              {user.compatibilityScore && (
                <div className="flex items-center gap-0.5 ml-1">
                  <Zap className="h-3.5 w-3.5 text-rose-300" />
                  <span className="text-xs font-medium text-rose-200">
                    {user.compatibilityScore}%
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center text-white/80 text-sm">
            <MapPin className="mr-1 h-3.5 w-3.5" />
            <span>{user.distance}</span>
          </div>

          {/* Only show top 3 interests to keep it compact */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {user.interests.slice(0, 3).map((interest) => (
              <Badge
                key={interest}
                className="bg-white/15 hover:bg-white/25 text-white backdrop-blur-sm text-xs py-0.5"
              >
                {interest}
              </Badge>
            ))}
            {user.interests.length > 3 && (
              <Badge className="bg-white/15 hover:bg-white/25 text-white backdrop-blur-sm text-xs py-0.5">
                +{user.interests.length - 3} more
              </Badge>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}
