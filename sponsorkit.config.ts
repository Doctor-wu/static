import { BadgePreset, defineConfig, tierPresets } from "sponsorkit";

const past: BadgePreset = {
  avatar: {
    size: 20,
  },
  boxWidth: 22,
  boxHeight: 22,
  container: {
    sidePadding: 35,
  },
};

export default defineConfig({
  tiers: [
    {
      title: "Past Sponsors",
      monthlyDollars: -1,
      preset: past,
    },
    {
      title: "Backers",
      preset: tierPresets.small,
    },
    {
      title: "Sponsors",
      monthlyDollars: 4,
      preset: {
        avatar: {
          size: 42,
        },
        boxWidth: 52,
        boxHeight: 52,
        container: {
          sidePadding: 30,
        },
      },
    },
    {
      title: "Silver Sponsors",
      monthlyDollars: 8,
      preset: tierPresets.medium,
    },
    {
      title: "Gold Sponsors",
      monthlyDollars: 16,
      preset: tierPresets.large,
    },
    {
      title: "Platinum Sponsors",
      monthlyDollars: 32,
      preset: tierPresets.xl,
    },
    // {
    //   title: 'Special Sponsor',
    //   monthlyDollars: Infinity,
    //   composeAfter(compose,_,config) {
    //     if (config.filter?.({ monthlyDollars: Infinity } as any, []) !== false) {
    //       compose
    //         .addSpan(20)
    //         .addText('Special Sponsor', 'sponsorkit-tier-title')
    //         .addSpan(10)
    //         .addRaw(NUXT_LOGO(config.width!, compose.height))
    //         .addSpan(130)
    //     }
    //   }
    // },
  ],
  renders: [
    {
      name: "sponsors",
      width: 800,
      formats: ["svg", "png"],
    },
    {
      name: "sponsors-wide",
      width: 1000,
      formats: ["svg"],
    },
    {
      renderer: "circles",
      name: "sponsors-circles",
      width: 500,
      includePastSponsors: true,
      formats: ["svg", "png"],
    },
  ],
});
