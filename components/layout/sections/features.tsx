import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "TabletSmartphone",
    title: "Quick & Easy",
    description:
      "The face swap services out there don't provide easy management of your stash. We do because convenience is key.",
  },
  {
    icon: "BadgeCheck",
    title: "Social Proof",
    description:
      "Join thousands of satisfied users who've discovered their perfect digital playground. Our community trusts us for discreet, high-quality face swaps that look incredibly realistic.",
  },
  {
    icon: "Goal",
    title: "Targeted Content",
    description:
      "Every swap is tailored to your desires. Our AI knows how to get the hottest Instagram posts and create swaps that match your exact fantasies and attractions.",
  },
  {
    icon: "PictureInPicture",
    title: "Realistic Results",
    description:
      "Crystal-clear, photo-realistic results that look completely natural. Our advanced AI ensures perfect lighting, skin tones, and facial expressions for swaps so convincing you'll forget they're not real.",
  },
  {
    icon: "MousePointerClick",
    title: "Clear CTA",
    description:
      "Simple one-tap process gets you from desire to satisfaction instantly. No complicated menus or technical knowledge required - just pure, immediate gratification.",
  },
  {
    icon: "Newspaper",
    title: "Clear Headline",
    description:
      "Experience Face Fantasy - where any Instagram post becomes your personal playground. Transform attraction into intimate reality.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Features
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        What Makes Us Different
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
      Face Fantasy isn't just another photo editor - we're the premier platform for private, intimate face swapping. Our advanced AI technology combined with absolute privacy protection makes your deepest fantasies achievable with just a few taps.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
