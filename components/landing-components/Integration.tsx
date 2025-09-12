import React from "react";
import { Marquee } from "../ui/marquee";
import { cn } from "@/lib/utils";

const snsList = [
  {
    icon: "icon-[logos--youtube-icon]",
    label: "YouTube",
    description: "Auto-publish AI-generated videos to your YouTube channel.",
  },
  {
    icon: "icon-[skill-icons--instagram]",
    label: "Instagram",
    description: "Upload reels, stories, and posts directly to Instagram.",
  },
  {
    icon: "icon-[logos--facebook]",
    label: "Facebook",
    description: "Share videos and manage pages or groups on Facebook.",
  },
  {
    icon: "icon-[logos--tiktok-icon]",
    label: "TikTok",
    description: "Post short-form AI videos straight to your TikTok account.",
  },
  {
    icon: "icon-[devicon--linkedin]",
    label: "LinkedIn",
    description:
      "Distribute professional video content to your LinkedIn profile or page.",
  },
  {
    icon: "icon-[fa7-brands--square-x-twitter]",
    label: "Twitter X",
    description: "Publish video tweets and threads to engage your audience.",
  },
  {
    icon: "icon-[logos--pinterest]",
    label: "Pinterest",
    description: "Auto-pin generated videos to your Pinterest boards.",
  },
  {
    icon: "icon-[logos--reddit-icon]",
    label: "Reddit",
    description: "Post videos to your communities and subreddits.",
  },
  {
    icon: "icon-[logos--telegram]",
    label: "Telegram",
    description: "Share videos in groups, channels, or with your subscribers.",
  },
  {
    icon: "icon-[streamline-ultimate-color--snapchat-logo]",
    label: "Snapchat",
    description: "Publish video stories directly to your Snapchat audience.",
  },
  {
    icon: "icon-[icon-park--weibo]",
    label: "Weibo",
    description: "Distribute multilingual videos to reach audiences in China.",
  },
];

const firstRow = snsList.slice(0, snsList.length / 2);
const secondRow = snsList.slice(snsList.length / 2);
const thirdRow = snsList.slice(0, snsList.length / 2);
const fourthRow = snsList.slice(snsList.length / 2);

export default function Integration() {
  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-center text-5xl font-medium tracking-tight md:text-7xl">
            Integrated with fav SNS
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center tracking-tight text-muted-foreground/80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt Lorem ipsum dolor sit amet.
          </p>
        </div>

        <div className="relative flex w-full mt-12 flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((sns) => (
              <SNSItem key={sns.label} {...sns} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {secondRow.map((sns) => (
              <SNSItem key={sns.label} {...sns} />
            ))}
          </Marquee>
          <Marquee pauseOnHover className="[--duration:20s]">
            {thirdRow.map((sns) => (
              <SNSItem key={sns.label} {...sns} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {fourthRow.map((sns) => (
              <SNSItem key={sns.label} {...sns} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
        </div>
      </div>
    </section>
  );
}

function SNSItem({ label, icon }: { label: string; icon: string }) {
  return (
    <div className="flex items-center justify-center bg-muted gap-4 rounded-full px-5 py-2">
      <div className="bg-neutral-200 rounded-full flex justify-center items-center size-8">
        <span className={cn(icon, "size-5")}></span>
      </div>
      <p className="text-lg">{label}</p>
    </div>
  );
}
