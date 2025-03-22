"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Clock,
  Filter,
  Heart,
  Info,
  MapPin,
  RefreshCw,
  X,
  Zap,
} from "lucide-react";
import * as React from "react";

import { FilterControls } from "@/components/browse/filter-controls";
import { UserCard } from "@/components/browse/user-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

// Mock data for demo purposes - enhanced with more details
const MOCK_USERS = [
  {
    id: "1",
    name: "Sarah Johnson",
    age: 28,
    images: ["/users/user-1.jpg", "/users/user-1-2.jpg", "/users/user-1-3.jpg"],
    location: "Paris, France",
    distance: "3 km away",
    bio: "Adventure seeker and coffee enthusiast. Love hiking, photography, and exploring new cities.",
    interests: ["Photography", "Hiking", "Coffee", "Travel"],
    lastActive: "Online now",
    compatibilityScore: 95,
    occupation: "Photographer",
    languages: ["English", "French"],
  },
  {
    id: "2",
    name: "Alex Rodriguez",
    age: 31,
    images: ["/users/user-2.jpg", "/users/user-2-2.jpg"],
    location: "Barcelona, Spain",
    distance: "5 km away",
    bio: "Music producer and amateur chef. Always looking for new flavors and sounds to explore.",
    interests: ["Music", "Cooking", "Concerts", "Food"],
    lastActive: "Active today",
    compatibilityScore: 87,
    occupation: "Music Producer",
    languages: ["English", "Spanish"],
  },
  {
    id: "3",
    name: "Emma Clarke",
    age: 26,
    images: ["/users/user-3.jpg", "/users/user-3-2.jpg", "/users/user-3-3.jpg"],
    location: "London, UK",
    distance: "7 km away",
    bio: "Book lover and yoga instructor. Looking for someone to share quiet evenings and deep conversations.",
    interests: ["Books", "Yoga", "Art", "Meditation"],
    lastActive: "Active 2 hours ago",
    compatibilityScore: 92,
    occupation: "Yoga Instructor",
    languages: ["English"],
  },
];

export function BrowseContainer() {
  const [users] = React.useState(MOCK_USERS);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [dragStart, setDragStart] = React.useState({ x: 0, y: 0 });
  const [offset, setOffset] = React.useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = React.useState(false);
  const [direction, setDirection] = React.useState<"left" | "right" | null>(
    null
  );
  const [outOfUsers, setOutOfUsers] = React.useState(false);
  const [showDetails, setShowDetails] = React.useState(false);

  const currentUser = users[currentIndex];

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);

    // Get client coordinates whether it's touch or mouse
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

    setDragStart({ x: clientX, y: clientY });
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;

    // Get client coordinates whether it's touch or mouse
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

    const newOffsetX = clientX - dragStart.x;
    const newOffsetY = clientY - dragStart.y;

    setOffset({ x: newOffsetX, y: newOffsetY });

    // Determine direction for UI feedback
    if (newOffsetX > 50) {
      setDirection("right");
    } else if (newOffsetX < -50) {
      setDirection("left");
    } else {
      setDirection(null);
    }
  };

  const handleLike = () => {
    // In a real app, you would send this to your API
    console.log(`Liked user: ${currentUser.id}`);

    goToNextUser();
  };

  const handlePass = () => {
    // In a real app, you would send this to your API
    console.log(`Passed on user: ${currentUser.id}`);

    goToNextUser();
  };

  const handleDragEnd = React.useCallback(() => {
    if (!isDragging) return;

    setIsDragging(false);

    // If swiped far enough in either direction, trigger like/pass
    if (offset.x > 100) {
      handleLike();
    } else if (offset.x < -100) {
      handlePass();
    }

    // Reset offset and direction
    setOffset({ x: 0, y: 0 });
    setDirection(null);
  }, [isDragging, offset.x, handleLike, handlePass]);

  const goToNextUser = () => {
    if (currentIndex < users.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setShowDetails(false);
    } else {
      setOutOfUsers(true);
    }
  };

  const resetUsers = () => {
    // In a real app, you would fetch new users here
    setCurrentIndex(0);
    setOutOfUsers(false);
  };

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  // Clean up event listeners
  React.useEffect(() => {
    const handleMouseUp = () => handleDragEnd();
    const handleTouchEnd = () => handleDragEnd();

    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [handleDragEnd]);

  return (
    <div className="container py-6 px-4 md:py-10">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-foreground">Discover</h1>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full h-10 w-10"
            >
              <Filter className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Filters</SheetTitle>
              <SheetDescription>
                Customize your discovery preferences
              </SheetDescription>
            </SheetHeader>
            <FilterControls />
          </SheetContent>
        </Sheet>
      </div>

      <div className="flex flex-col items-center">
        {/* Card area - with increased height */}
        <div className="relative w-full max-w-sm mx-auto">
          {outOfUsers ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex h-[580px] flex-col items-center justify-center rounded-2xl border bg-card p-8 text-center"
            >
              <div className="rounded-full bg-rose-100 dark:bg-rose-900/30 p-4 mb-4">
                <RefreshCw className="h-10 w-10 text-rose-500" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">No more profiles</h3>
              <p className="mb-6 text-muted-foreground">
                You&apos;ve gone through all profiles matching your preferences.
                Check back later or adjust your filters.
              </p>
              <Button
                onClick={resetUsers}
                className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white"
              >
                Find More Profiles
              </Button>
            </motion.div>
          ) : (
            <div className="space-y-4">
              {/* Card container with increased height */}
              <div
                className="relative h-[580px] w-full touch-none"
                onMouseDown={handleDragStart}
                onMouseMove={handleDragMove}
                onTouchStart={handleDragStart}
                onTouchMove={handleDragMove}
              >
                <motion.div
                  className={cn(
                    "absolute left-0 top-0 h-full w-full transition-transform",
                    isDragging ? "" : "transition-all duration-300"
                  )}
                  style={{
                    transform: `translateX(${offset.x}px) rotate(${
                      offset.x * 0.05
                    }deg)`,
                    opacity: Math.max(1 - Math.abs(offset.x) / 500, 0.8),
                  }}
                >
                  <UserCard user={currentUser} direction={direction} />
                </motion.div>
              </div>

              {/* Action buttons - now in a row like popular dating apps */}
              <div className="flex items-center justify-center gap-4 py-3">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-14 w-14 rounded-full border-2 border-destructive/20 text-destructive hover:bg-destructive/10 hover:text-destructive hover:border-destructive shadow-sm"
                  onClick={handlePass}
                >
                  <X className="h-6 w-6" />
                </Button>

                <Button
                  variant="outline"
                  size="icon"
                  className="h-12 w-12 rounded-full border-2 border-blue-500/20 text-blue-500 hover:bg-blue-500/10 hover:text-blue-500 hover:border-blue-500 shadow-sm"
                  onClick={toggleDetails}
                >
                  <Info className="h-5 w-5" />
                </Button>

                <Button
                  size="icon"
                  className="h-14 w-14 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white shadow-sm"
                  onClick={handleLike}
                >
                  <Heart className="h-6 w-6" />
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* User details panel - slides up from bottom */}
        <AnimatePresence>
          {showDetails && !outOfUsers && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="w-full max-w-sm mx-auto mt-4 rounded-xl bg-card border shadow-lg overflow-hidden"
            >
              <div className="p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">
                      {currentUser.name}&apos;s Details
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {currentUser.occupation} • {currentUser.location}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 bg-rose-100 dark:bg-rose-900/30 px-2 py-1 rounded-full">
                    <Zap className="h-3.5 w-3.5 text-rose-500" />
                    <span className="text-sm font-medium text-rose-500">
                      {currentUser.compatibilityScore}% Match
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>{currentUser.distance}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{currentUser.lastActive}</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-1">Bio</h4>
                  <p className="text-sm text-muted-foreground">
                    {currentUser.bio}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-1">Languages</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {currentUser.languages?.map((language) => (
                      <Badge
                        key={language}
                        variant="outline"
                        className="text-xs"
                      >
                        {language}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-1">Interests</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {currentUser.interests.map((interest) => (
                      <Badge
                        key={interest}
                        variant="outline"
                        className="text-xs"
                      >
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={toggleDetails}
                  className="w-full mt-2"
                >
                  Close
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
