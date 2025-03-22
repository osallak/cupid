import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile | Cupid",
  description: "Your profile",
};

export default function ProfilePage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Profile</h1>
      <div className="flex items-center justify-center h-[50vh] rounded-lg border border-dashed p-8 text-center">
        <div className="max-w-md space-y-2">
          <h2 className="text-xl font-semibold">Coming Soon</h2>
          <p className="text-muted-foreground">
            The profile page is currently under development.
          </p>
        </div>
      </div>
    </div>
  );
}
