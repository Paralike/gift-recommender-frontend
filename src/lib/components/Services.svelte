<script lang="ts">
  import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "$lib/components/ui/card";
  import { Badge } from "$lib/components/ui/badge";

  const ProService = {
    YES: 1,
    NO: 0,
  } as const;

  type ProServiceType = typeof ProService[keyof typeof ProService];

  interface ServiceProps {
    title: string;
    pro: ProServiceType;
    description: string;
  }

  const serviceList: ServiceProps[] = [
    {
      title: "Custom Domain Integration",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit adipisicing.",
      pro: 0,
    },
    {
      title: "Social Media Integrations",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, dicta.",
      pro: 0,
    },
    {
      title: "Email Marketing Integrations",
      description: "Lorem dolor sit amet adipisicing.",
      pro: 0,
    },
    {
      title: "SEO Optimization",
      description: "Lorem ipsum dolor sit amet consectetur.",
      pro: 1,
    },
  ];
</script>

<section id="services" class="container py-24 sm:py-32">
  <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
    Services
  </h2>

  <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">
    Grow Your Business
  </h2>
  <h3 class="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
    From marketing and sales to operations and strategy, we have the expertise
    to help you achieve your goals.
  </h3>

  <div class="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full lg:w-[60%] mx-auto">
    {#each serviceList as { title, description, pro }}
      <Card class="bg-muted/60 dark:bg-card h-full pb-6 relative">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        {#if pro === ProService.YES}
          <Badge variant="secondary" class="absolute -top-2 -right-3">
            PRO
          </Badge>
        {/if}
      </Card>
    {/each}
  </div>
</section>
