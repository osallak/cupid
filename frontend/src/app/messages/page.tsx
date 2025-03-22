import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Messages | Cupid",
  description: "Your conversations",
};

export default function MessagesPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Messages</h1>
      <div className="flex items-center justify-center h-[50vh] rounded-lg border border-dashed p-8 text-center">
        <div className="max-w-md space-y-2">
          <h2 className="text-xl font-semibold">Coming Soon</h2>
          <p className="text-muted-foreground">
            The messaging feature is currently under development.
          </p>
        </div>
      </div>
    </div>
  );
}
