<script lang="ts">
  import { Avatar, AvatarFallback, AvatarImage } from "$lib/components/ui/avatar";
  import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "$lib/components/ui/card";
  import * as Carousel from "$lib/components/ui/carousel";
  import { Star } from "lucide-svelte";
  import type { CarouselAPI } from "$lib/components/ui/carousel/context";
  import Autoplay from "embla-carousel-autoplay";

  interface ReviewProps {
    image: string;
    name: string;
    userName: string;
    comment: string;
    rating: number;
  }

  const reviewList: ReviewProps[] = [
    {
      image: "https://github.com/shadcn.png",
      name: "Sarah Chen",
      userName: "Frontend Developer",
      comment:
        "This SvelteKit landing page template by Memet Zx is exactly what I needed! The conversion from Vue to Svelte is seamless and the components are well-organized.",
      rating: 5.0,
    },
    {
      image: "https://github.com/zxce3.png",
      name: "Memet Zx",
      userName: "Creator & Developer",
      comment:
        "I created this template to help developers quickly build beautiful landing pages with SvelteKit and Shadcn. Hope you find it useful!",
      rating: 5.0,
    },
    {
      image: "https://github.com/shadcn.png",
      name: "Alex Rivera",
      userName: "Full Stack Developer",
      comment:
        "Zxce3's implementation of Shadcn components in SvelteKit is brilliant. The dark mode feature and responsive design work flawlessly.",
      rating: 4.9,
    },
    {
      image: "https://github.com/shadcn.png",
      name: "Emily Watson",
      userName: "UI/UX Designer",
      comment:
        "The attention to detail in this template is impressive. Memet has done an excellent job maintaining the design aesthetics while converting to SvelteKit.",
      rating: 5.0,
    },
    {
      image: "https://github.com/shadcn.png",
      name: "David Kim",
      userName: "Web Developer",
      comment:
        "This is now my go-to template for SvelteKit projects. The documentation is clear and the implementation by Zxce3 is top-notch.",
      rating: 4.9,
    },
    {
      image: "https://github.com/shadcn.png",
      name: "Lisa Chen",
      userName: "Software Engineer",
      comment:
        "Thanks to Memet's template, I was able to launch my landing page in record time. The TypeScript integration is particularly well done.",
      rating: 5.0,
    },
  ];

  let api = $state<CarouselAPI>();
  const plugin = Autoplay({ delay: 4000, stopOnInteraction: true });
</script>

<section id="testimonials" class="container py-24 sm:py-32">
  <div class="text-center mb-8">
    <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
      Testimonials
    </h2>

    <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">
      Hear What Our 1000+ Clients Say
    </h2>
  </div>

  <Carousel.Root
    opts={{
      align: "start",
      loop: true,
    }}
    plugins={[plugin]}
    class="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
    setApi={(emblaApi) => (api = emblaApi)}
    onmouseenter={plugin.stop}
    onmouseleave={plugin.reset}
  >
    <Carousel.Content class="-ml-4">
      {#each reviewList as review (review.name)}
        <Carousel.Item class="pl-4 md:basis-1/2 lg:basis-1/3">
          <Card class="bg-muted/50 dark:bg-card h-full">
            <CardContent class="p-6 h-full flex flex-col">
              <div class="flex-1">
                <div class="flex gap-1 mb-6">
                  {#each Array(5) as _}
                    <Star class="size-4 fill-primary text-primary" />
                  {/each}
                </div>

                <p class="mb-6">"{review.comment}"</p>
              </div>

              <div class="flex items-center gap-4 pt-6 border-t">
                <Avatar>
                  <AvatarImage
                    src={review.image}
                    alt={`Avatar of ${review.name}`}
                  />
                  <AvatarFallback>
                    {review.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>

                <div class="flex flex-col">
                  <CardTitle class="text-lg">{review.name}</CardTitle>
                  <CardDescription>{review.userName}</CardDescription>
                </div>
              </div>
            </CardContent>
          </Card>
        </Carousel.Item>
      {/each}
    </Carousel.Content>
    <Carousel.Previous />
    <Carousel.Next />
  </Carousel.Root>
</section>
