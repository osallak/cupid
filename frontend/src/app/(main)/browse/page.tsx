import { Metadata } from "next";
import { BrowseContainer } from "@/components/browse/browse-container";

export const metadata: Metadata = {
  title: "Browse | Cupid",
  description: "Find your perfect match",
};

export default function BrowsePage() {
  return (
    <div className="relative min-h-screen w-full bg-background">
      <BrowseContainer />
    </div>
  );
}
