<script lang="ts">
  import { Card, CardContent, CardHeader, CardTitle } from "$lib/components/ui/card";
  import { Badge } from "$lib/components/ui/badge";

  interface HowItWorksProps {
    badgeTitle: string;
    title: string;
    description: string;
    image: string;
  }

  const HowItWorksList: HowItWorksProps[] = [
    {
      badgeTitle: "Important Dates",
      title: "You tell us the dates",
      description:
        "Share the key milestones and deadlines that matter most to you. We’ll make sure everything stays on track and help you plan around the moments that count.",
        image: "date_picker.svg",
    },
    {
      badgeTitle: "Gather important information",
      title: "You tell us something about your partner",
      description:
        "Share a few details about your partner — their interests, passions, or what makes them unique. The more we know, the better we can tailor your experience together.",
        image: "profile_details.svg",
    },
    {
      badgeTitle: "Stay Ahead",
      title: "We remind you early",
      description:
        "Get gentle reminders before important moments arrive. We’ll help you stay proactive, plan ahead, and never miss an opportunity to make things better.",
        image: "reminder.svg",
    },
    {
      badgeTitle: "Thoughtful Connections",
      title: "We suggest personalized gifts",
      description:
        "Based on what you share, we’ll recommend meaningful, personalized gift ideas that show how well you know them — and make every moment a little more special.",
        image: "options2.svg",
    },
    {
      badgeTitle: "Effortless Gifting",
      title: "We send you the gift wrapped.",
      description:
        "Sit back and relax — we’ll take care of the wrapping and delivery. Your gift will arrive beautifully packaged and ready to surprise the person who matters most.",
      image: "gift.svg",
    },
  ];

</script>

<section id="how-it-works" class="container py-24 sm:py-32">
  <div class="text-center mb-8">
    <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
      How It Works
    </h2>
    <h2 class="text-3xl md:text-4xl text-center font-bold">
      Step-by-Step Process
    </h2>
  </div>

  <div class="lg:w-[80%] mx-auto relative">
    {#each HowItWorksList as { badgeTitle, title, description, image }, index}
      <div class="flex mb-8 items-center" class:flex-row-reverse={index % 2 !== 0}>
        <Card class="h-full bg-transparent border-0 shadow-none">
          <CardHeader>
            <div class="pb-4">
              <Badge>{badgeTitle}</Badge>
            </div>

            <CardTitle>
              {title}
            </CardTitle>
          </CardHeader>

          <CardContent class="text-muted-foreground w-[80%]">
            {description}
          </CardContent>
        </Card>

        <img
          src={image}
          alt="Image describing {title}"
          class="w-[150px] md:w-[250px] lg:w-[300px] mx-auto -scale-x-100"
        />
        
        <div
          class="-z-10 absolute right-0 w-44 h-72 lg:w-64 lg:h-80 rounded-full bg-primary/15 dark:bg-primary/10 blur-3xl"
          class:left-0={index % 2 !== 0}
        ></div>
      </div>
    {/each}
  </div>
</section>
