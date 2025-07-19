import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "Blocks",
    title: "Easy use, easy management, easy access",
    description:
      "App is designed to do everything with a click and manage your stash anytime from anywhere.",
  },
  {
    icon: "Infinity",
    title: "Unlimited Access Endless Temptation",
    description:
      "Every Instagram scroll becomes a treasure hunt. Spot someone irresistible? One tap transforms them into your personal fantasy. Turn any attraction into your private reality.",
  },
  {
    icon: "Wallet",
    title: "Instant Results Instant Satisfaction",
    description:
      "From desire to fulfillment in under 10 seconds. Our AI creates photo-realistic swaps that look so real, you'll forget they're not. No waiting, no compromises, just pure instant gratification.",
  },
  {
    icon: "Sparkle",
    title: "Safe Exploration Risk-Free Exploration",
    description:
      "Explore your attractions safely and privately. Experiment with different fantasies without real-world consequences. Your digital playground for adult curiosity and desire.",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg text-primary mb-2 tracking-wider">Benefits</h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Your Secret Digital Playground
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
          Fulfill your deepest desires with AI-powered face swaps. Pick any Instagram post that catches your 
          eye and place yourself (or anyone) into those intimate moments. Your fantasies, your rules, complete discretion guaranteed..
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
            >
              <CardHeader>
                <div className="flex justify-between">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={32}
                    color="hsl(var(--primary))"
                    className="mb-6 text-primary"
                  />
                  <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
