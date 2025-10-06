<script lang="ts">
  import { Card, CardContent, CardHeader, CardTitle } from "$lib/components/ui/card";
  import {
    Paintbrush,
    MessageCircle,
    TabletSmartphone,
    BadgeCheck,
    Goal,
    PictureInPicture,
    MousePointerClick,
    Newspaper,
  } from "lucide-svelte";

  interface FeaturesProps {
    icon: 'tabletSmartphone' | 'badgeCheck' | 'goal' | 'pictureInPicture' | 
          'paintbrush' | 'mousePointerClick' | 'messageCircle' | 'newspaper';
    title: string;
    description: string;
  }

  const featureList: FeaturesProps[] = [
    {
      icon: "tabletSmartphone",
      title: "Mobile Friendly",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio velit cum aliquam, consectetur.",
    },
    {
      icon: "badgeCheck",
      title: "Social Proof",
      description:
        "Lorem ipsum dolor sit amet consectetur. Natus consectetur, odio ea accusamus aperiam.",
    },
    {
      icon: "goal",
      title: "Targeted Content",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. odio ea accusamus aperiam.",
    },
    {
      icon: "pictureInPicture",
      title: "Strong Visuals",
      description:
        "Lorem elit. A odio velit cum aliquam. Natus consectetur dolores, odio ea accusamus aperiam.",
    },
    {
      icon: "mousePointerClick",
      title: "Clear CTA",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing. odio ea accusamus consectetur.",
    },
    {
      icon: "newspaper",
      title: "Clear Headline",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio velit cum aliquam. Natus consectetur.",
    },
  ];

  const iconMap = {
    tabletSmartphone: TabletSmartphone,
    badgeCheck: BadgeCheck,
    goal: Goal,
    pictureInPicture: PictureInPicture,
    paintbrush: Paintbrush,
    mousePointerClick: MousePointerClick,
    messageCircle: MessageCircle,
    newspaper: Newspaper,
  };
</script>

<section id="features" class="container py-24 sm:py-32">
  <!--<h2 class="text-lg text-primary text-center mb-2 tracking-wider">
    Features
  </h2>-->

  <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">
    But the best gifts aren't expensive, it’s thoughtful.
  </h2>

  <h3 class="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
    Remembering the small things shows that you care. Our job is to make sure you never miss a moment that matters to your partner. With gentle reminders, curated ideas, and easy ordering, you’ll stay one step ahead — and win major heart points. 
  </h3>

  <!--<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {#each featureList as { icon, title, description }}
      <Card class="h-full bg-background border-0 shadow-none">
        <CardHeader class="flex justify-center items-center">
          <div class="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
            <svelte:component 
              this={iconMap[icon]} 
              class="size-6 text-primary"
            />
          </div>
          <CardTitle>{title}</CardTitle>
        </CardHeader>

        <CardContent class="text-muted-foreground text-center">
          {description}
        </CardContent>
      </Card>
    {/each}
  </div>-->
</section>
