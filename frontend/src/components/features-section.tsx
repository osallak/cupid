"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Heart, MessageCircle, Calendar, Shield } from "lucide-react";

export function FeaturesSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <div className="mx-auto mb-16 max-w-[58rem] text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Features Designed for Connection
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our platform offers everything you need to find and build meaningful
            relationships.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            icon={<Heart className="h-10 w-10 text-primary" />}
            title="Smart Matching"
            description="Our AI algorithm finds compatible partners based on your preferences and personality."
          />
          <FeatureCard
            icon={<MessageCircle className="h-10 w-10 text-primary" />}
            title="Secure Messaging"
            description="Private and encrypted communication with your matches."
          />
          <FeatureCard
            icon={<Calendar className="h-10 w-10 text-primary" />}
            title="Events & Activities"
            description="Discover local events and activities to meet people in person."
          />
          <FeatureCard
            icon={<Shield className="h-10 w-10 text-primary" />}
            title="Profile Verification"
            description="Verified profiles ensure you're connecting with real people."
          />
        </div>
      </div>
    </section>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="flex flex-col items-center text-center">
      <CardHeader>
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
}
