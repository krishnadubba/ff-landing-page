"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

interface ReviewProps {
  image: string;
  name: string;
  userName?: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    image: "https://github.com/shadcn.png",
    name: "Kyle D",
    comment:
      "Face Fantasy is a great tool for creating face swaps. It's easy to use and the results are great.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Caleb C",
    comment:
      "Before Face Fantasy, I was using a lot of other tools to create face swaps. But Face Fantasy replaces all of them and is the best I've used so far.",
    rating: 4.8,
  },

  {
    image: "https://github.com/shadcn.png",
    name: "Steve  J",
    comment:
      "Damn, click, click and click. That's all it takes to create a face swap. The Gallery is my favorite feature.",
    rating: 4.9,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Isha P",
    comment:
      "Easy to create and save face swaps for easy access. I can't believe how easy it is to use, no more download Insta images, upload to websites and then download to local computer and delete after use. Face Fantasy is a must have for anyone who wants to create face swaps. Face Fantasy lets me access my face swaps from anywhere.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Mat A",
    comment:
      "We should have a before FF and after FF era! This is a must have for anyone who wants to create face swaps.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Harry R",
    comment:
      "It can't get any easier than this. The support is great and the results are great.",
    rating: 4.9,
  },
];

export const TestimonialSection = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Testimonials
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          Hear What Our 1000+ Clients Say
        </h2>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
      >
        <CarouselContent>
          {reviewList.map((review) => (
            <CarouselItem
              key={review.name}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Card className="bg-muted/50 dark:bg-card">
                <CardContent className="pt-6 pb-0">
                  <div className="flex gap-1 pb-6">
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                  </div>
                  {`"${review.comment}"`}
                </CardContent>

                <CardHeader>
                  <div className="flex flex-row items-center gap-4">
                    <Avatar>
                      <AvatarImage
                        src="https://avatars.githubusercontent.com/u/75042455?v=4"
                        alt="radix"
                      />
                      <AvatarFallback>SV</AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      {review.userName && (
                        <CardDescription>{review.userName}</CardDescription>
                      )}
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
