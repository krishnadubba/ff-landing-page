"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import { useState } from "react";

enum PopularPlan {
  NO = 0,
  YES = 1,
}

interface PlanProps {
  title: string;
  popular: PopularPlan;
  monthlyPrice: number;
  yearlyPrice: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const plans: PlanProps[] = [
  {
    title: "Free",
    popular: 0,
    monthlyPrice: 0,
    yearlyPrice: 0,
    description:
      "Get started with Face Fantasy.",
    buttonText: "Start Free",
    benefitList: [
      "10 credits to get started",
      "Gallery to save and view your face swaps",
    ],
  },
  {
    title: "Premium",
    popular: 0,
    monthlyPrice: 25,
    yearlyPrice: 250,
    description:
      "Priced for the lite users.",
    buttonText: "Get starterd",
    benefitList: [
      "250 credits per month (1 image swap = 1 credit)",
      "Gallery to save and view your face swaps",
      "Priority support",
    ],
  },
  {
    title: "Elite",
    popular: 1,
    monthlyPrice: 49,
    yearlyPrice: 490,
    description:
      "As elite customer, you get the best of everything.",
    buttonText: "Walk on the red carpet",
    benefitList: [
      "750 credits per month",
      "Gallery to save and view your face swaps",
      "Priority support",
      "Automation workflows",
      "Priority in feature requests",
      "Early access to new features",
    ],
  },
];

export const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <section className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Pricing
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Best bang for your buck
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        We offer a variety of plans to suit your needs.
      </h3>

      {/* Billing Toggle */}
      <div className="flex justify-center items-center gap-4 mb-12 p-4 bg-muted/50 rounded-lg">
        <span className={`text-sm font-medium ${!isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
          Monthly
        </span>
        <button
          onClick={() => setIsYearly(!isYearly)}
          className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
            isYearly ? 'bg-primary' : 'bg-muted'
          }`}
          type="button"
        >
          <span
            className={`inline-block h-6 w-6 transform rounded-full bg-white shadow-md transition-transform ${
              isYearly ? 'translate-x-7' : 'translate-x-1'
            }`}
          />
        </button>
        <span className={`text-sm font-medium ${isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
          Yearly
          <span className="ml-1 text-xs text-primary font-bold">Save 20%</span>
        </span>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4">
        {plans.map(
          ({ title, popular, monthlyPrice, yearlyPrice, description, buttonText, benefitList }) => {
            const currentPrice = isYearly ? yearlyPrice : monthlyPrice;
            const originalPrice = isYearly ? monthlyPrice * 12 : monthlyPrice;
            const savings = isYearly && monthlyPrice > 0 ? originalPrice - yearlyPrice : 0;
            
            return (
              <Card
                key={title}
                className={
                  popular === PopularPlan?.YES
                    ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary lg:scale-[1.1]"
                    : ""
                }
              >
                <CardHeader>
                  <CardTitle className="pb-2">{title}</CardTitle>

                  <CardDescription className="pb-4">
                    {description}
                  </CardDescription>

                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold">${currentPrice}</span>
                      {isYearly && monthlyPrice > 0 && (
                        <span className="text-sm text-muted-foreground line-through">
                          ${originalPrice}
                        </span>
                      )}
                    </div>
                    <span className="text-muted-foreground">
                      /{isYearly ? 'year' : 'month'}
                    </span>
                    {savings > 0 && (
                      <div className="text-sm text-primary font-medium mt-1">
                        Save ${savings}/year
                      </div>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="flex">
                  <div className="space-y-4">
                    {benefitList.map((benefit) => (
                      <span key={benefit} className="flex">
                        <Check className="text-primary mr-2" />
                        <h3>{benefit}</h3>
                      </span>
                    ))}
                  </div>
                </CardContent>

                <CardFooter>
                  <Button
                    variant={
                      popular === PopularPlan?.YES ? "default" : "secondary"
                    }
                    className="w-full"
                  >
                    {buttonText}
                  </Button>
                </CardFooter>
              </Card>
            );
          }
        )}
      </div>
    </section>
  );
};
