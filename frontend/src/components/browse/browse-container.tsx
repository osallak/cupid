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
import { FloatingHearts } from "../floating-hearts";

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
  const [direction, setDirection] = React.useState<"left" | "right" | null>(
    null
  );
  const [outOfUsers, setOutOfUsers] = React.useState(false);
  const [showDetails, setShowDetails] = React.useState(false);
  const [lastSwipedDirection, setLastSwipedDirection] = React.useState<
    string | null
  >(null);

  const currentUser = users[currentIndex];
  const childRefs = React.useMemo(
    () =>
      Array(users.length)
        .fill(0)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .map(() => React.createRef<any>()),
    [users.length]
  );

  const canSwipe = currentIndex >= 0;

  const swipe = async (dir: string) => {
    if (canSwipe && currentIndex < users.length) {
      setLastSwipedDirection(dir);
      await childRefs[currentIndex].current.swipe(dir);
    }
  };

  const handleSwipe = (direction: string) => {
    setDirection(direction as "left" | "right");
    setLastSwipedDirection(direction);

    if (direction === "right") {
      console.log(`Liked user: ${currentUser.id}`);
    } else if (direction === "left") {
      console.log(`Passed on user: ${currentUser.id}`);
    }

    // Add a small delay to allow animations to complete
    setTimeout(() => {
      goToNextUser();
    }, 300);
  };

  const handleCardLeftScreen = () => {
    // We'll reset direction after a delay to allow for a smooth animation
    setTimeout(() => {
      setDirection(null);
      setLastSwipedDirection(null);
    }, 500);
  };

  const goToNextUser = () => {
    setCurrentIndex((prev) => {
      const next = prev + 1;
      if (next >= users.length) {
        setOutOfUsers(true);
      }
      return next;
    });
    setShowDetails(false);
  };

  const resetUsers = () => {
    setCurrentIndex(0);
    setOutOfUsers(false);
  };

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className=" py-6 px-4 md:py-10 bg-gradient-to-b from-pink-50 via-white to-white dark:from-pink-950 dark:via-background dark:to-background p-4 relative">
      {/* <div className="min-h-screen flex flex-col items-center justify-center  */}

      <FloatingHearts />

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
        {/* Card area */}
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
              <div className="relative h-[580px] w-full">
                {users.map((user, index) => {
                  if (index < currentIndex) return null;
                  const isTopCard = index === currentIndex;
                  // Calculate stacking for cards behind the top card
                  const stackOffset = (index - currentIndex) * 4; // 4px offset for each card behind

                  return (
                    <div
                      key={user.id}
                      className={cn(
                        "absolute w-full h-full transition-transform",
                        isTopCard ? "" : "scale-[0.98] pointer-events-none"
                      )}
                      style={{
                        zIndex: users.length - index,
                        transform: isTopCard
                          ? undefined
                          : `translateY(${stackOffset}px) scale(${
                              1 - (index - currentIndex) * 0.02
                            })`,
                        opacity: isTopCard
                          ? 1
                          : 1 - (index - currentIndex) * 0.2,
                      }}
                    >
                      <UserCard
                        ref={childRefs[index]}
                        user={user}
                        direction={index === currentIndex ? direction : null}
                        onSwipe={handleSwipe}
                        onCardLeftScreen={handleCardLeftScreen}
                      />
                    </div>
                  );
                })}
              </div>

              {/* Action buttons */}
              <div className="flex items-center justify-center gap-4 py-3">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-14 w-14 rounded-full border-2 border-destructive/20 text-destructive hover:bg-destructive/10 hover:text-destructive hover:border-destructive shadow-sm transition-colors duration-200"
                  onClick={() => swipe("left")}
                  disabled={!canSwipe || lastSwipedDirection !== null}
                >
                  <X className="h-6 w-6" />
                </Button>

                <Button
                  variant="outline"
                  size="icon"
                  className="h-12 w-12 rounded-full border-2 border-blue-500/20 text-blue-500 hover:bg-blue-500/10 hover:text-blue-500 hover:border-blue-500 shadow-sm transition-colors duration-200"
                  onClick={toggleDetails}
                >
                  <Info className="h-5 w-5" />
                </Button>

                <Button
                  size="icon"
                  className="h-14 w-14 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white shadow-sm transition-colors duration-200"
                  onClick={() => swipe("right")}
                  disabled={!canSwipe || lastSwipedDirection !== null}
                >
                  <Heart className="h-6 w-6" />
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* User details panel - slides up from bottom */}
        <AnimatePresence>
          {showDetails && !outOfUsers && currentUser && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
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
