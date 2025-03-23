"use client";

import * as React from "react";
import Image from "next/image";
import { MapPin, Zap } from "lucide-react";
import TinderCard from 'react-tinder-card';

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

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
  onSwipe?: (direction: string) => void;
  onCardLeftScreen?: () => void;
  direction?: string | null;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const UserCard = React.forwardRef<any, UserCardProps>(
  ({ user, onSwipe, onCardLeftScreen, direction }, ref) => {
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
    };

    // Handle swipe
    const handleSwipe = (direction: string) => {
      if (onSwipe) onSwipe(direction);
    };

    return (
      <TinderCard
        ref={ref}
        onSwipe={handleSwipe}
        onCardLeftScreen={onCardLeftScreen}
        className="relative h-full w-full overflow-hidden rounded-xl border shadow-lg"
        swipeRequirementType="position"
        preventSwipe={["up", "down"]}
      >
        {/* Centered Swipe Indicator */}
        <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
          {direction === 'right' && (
            <div className="absolute transform rotate-[-24deg]">
              <div className="border-[6px] border-green-500 rounded-xl px-12 py-6 bg-black/20 backdrop-blur-sm">
                <span className="text-green-500 font-bold text-7xl tracking-wider">LIKE</span>
              </div>
            </div>
          )}
          
          {direction === 'left' && (
            <div className="absolute transform rotate-[-24deg]">
              <div className="border-[6px] border-red-500 rounded-xl px-12 py-6 bg-black/20 backdrop-blur-sm">
                <span className="text-red-500 font-bold text-7xl tracking-wider">NOPE</span>
              </div>
            </div>
          )}
        </div>

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
      </TinderCard>
    );
  }
);

UserCard.displayName = "UserCard";