"use client";

import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Heart,
  MessageCircle,
  Calendar,
  Shield,
  Sparkles,
  Users,
} from "lucide-react";

export function FeaturesSection() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-pink-50/50 to-transparent dark:from-pink-950/30 dark:to-transparent" />
      <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-pink-100/30 dark:bg-pink-900/20 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-60 h-60 rounded-full bg-rose-100/30 dark:bg-rose-900/20 blur-3xl" />

      <div className="container relative">
        <div className="mx-auto mb-20 max-w-[58rem] text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-50 dark:bg-pink-950/50 text-pink-600 dark:text-pink-300 shadow-sm mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Designed for Romance</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Features That <span className="text-pink-500">Spark</span>{" "}
            Connection
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our platform combines cutting-edge technology with timeless romance
            to help you find your perfect match.
          </p>
        </div>

        {/* Main features */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          <FeatureCard
            icon={
              <Heart className="h-10 w-10 text-pink-500" fill="currentColor" />
            }
            title="Intelligent Matching"
            description="Our AI algorithm finds compatible partners based on your preferences, personality, and relationship goals."
            color="pink"
          />
          <FeatureCard
            icon={<MessageCircle className="h-10 w-10 text-blue-500" />}
            title="Secure Conversations"
            description="Private and encrypted communication with your matches, with smart conversation starters."
            color="blue"
          />
          <FeatureCard
            icon={<Users className="h-10 w-10 text-purple-500" />}
            title="Verified Profiles"
            description="Connect with confidence knowing all profiles are verified and authentic."
            color="purple"
          />
        </div>

        {/* Testimonial */}
        <div className="rounded-2xl overflow-hidden bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-950/50 dark:to-rose-950/50 p-1">
          <div className="bg-white dark:bg-gray-900 rounded-xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative">
                <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/hero/couple-testimonial.jpg"
                    alt="Happy couple"
                    width={500}
                    height={375}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-900 rounded-lg shadow-lg p-3 border border-pink-100 dark:border-pink-900/30">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Heart
                        key={star}
                        className="w-4 h-4 text-pink-500 fill-current"
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <p className="text-lg italic text-muted-foreground mb-6">
                  "I never thought I'd find someone who truly understands me.
                  Thanks to Cupid's matching algorithm, I met my soulmate. We've
                  been together for 8 months now and couldn't be happier!"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src="/images/hero/testimonial-avatar.jpg"
                      alt="Jessica"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">Jessica, 28</h4>
                    <p className="text-sm text-muted-foreground">
                      Matched with David, 30
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary features */}
        <div className="grid gap-8 md:grid-cols-3 mt-16">
          <SecondaryFeature
            icon={<Calendar className="h-6 w-6 text-pink-500" />}
            title="Virtual Date Ideas"
            description="Get creative suggestions for memorable virtual dates."
          />
          <SecondaryFeature
            icon={<Shield className="h-6 w-6 text-pink-500" />}
            title="Privacy Protection"
            description="Your data is secure with our advanced encryption."
          />
          <SecondaryFeature
            icon={<Sparkles className="h-6 w-6 text-pink-500" />}
            title="Relationship Insights"
            description="Gain valuable insights about your compatibility."
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
  color: "pink" | "blue" | "purple";
}

function FeatureCard({ icon, title, description, color }: FeatureCardProps) {
  const colorClasses = {
    pink: "bg-pink-50 dark:bg-pink-950/30 border-pink-100 dark:border-pink-900/30",
    blue: "bg-blue-50 dark:bg-blue-950/30 border-blue-100 dark:border-blue-900/30",
    purple:
      "bg-purple-50 dark:bg-purple-950/30 border-purple-100 dark:border-purple-900/30",
  };

  return (
    <Card
      className={`flex flex-col h-full border ${colorClasses[color]} hover:shadow-md transition-shadow`}
    >
      <CardHeader>
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white dark:bg-gray-900 shadow-sm">
          {icon}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  );
}

interface SecondaryFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function SecondaryFeature({ icon, title, description }: SecondaryFeatureProps) {
  return (
    <div className="flex gap-4 p-4 rounded-xl bg-white/50 dark:bg-white/5 backdrop-blur border border-pink-100 dark:border-pink-900/30 hover:shadow-md transition-shadow">
      <div className="flex-shrink-0 mt-1">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-50 dark:bg-pink-950/50">
          {icon}
        </div>
      </div>
      <div>
        <h3 className="font-medium mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
