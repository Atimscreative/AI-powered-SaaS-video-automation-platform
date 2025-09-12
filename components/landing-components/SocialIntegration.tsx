"use client";
import React, { useState } from "react";
import SNSCard from "./SNSCard";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const snsList = [
  {
    icon: "icon-[logos--youtube-icon]",
    label: "YouTube",
    description: "Auto-publish AI-generated videos to your YouTube channel.",
    isConnected: false,
  },
  {
    icon: "icon-[skill-icons--instagram]",
    label: "Instagram",
    description: "Upload reels, stories, and posts directly to Instagram.",
    isConnected: false,
  },
  {
    icon: "icon-[logos--facebook]",
    label: "Facebook",
    description: "Share videos and manage pages or groups on Facebook.",
    isConnected: false,
  },
  {
    icon: "icon-[logos--tiktok-icon]",
    label: "TikTok",
    description: "Post short-form AI videos straight to your TikTok account.",
    isConnected: false,
  },
  {
    icon: "icon-[devicon--linkedin]",
    label: "LinkedIn",
    description:
      "Distribute professional video content to your LinkedIn profile or page.",
    isConnected: false,
  },
  {
    icon: "icon-[fa7-brands--square-x-twitter]",
    label: "Twitter X",
    description: "Publish video tweets and threads to engage your audience.",
    isConnected: false,
  },
  {
    icon: "icon-[logos--pinterest]",
    label: "Pinterest",
    description: "Auto-pin generated videos to your Pinterest boards.",
    isConnected: false,
  },
  {
    icon: "icon-[logos--reddit-icon]",
    label: "Reddit",
    description: "Post videos to your communities and subreddits.",
    isConnected: false,
  },
  {
    icon: "icon-[logos--telegram]",
    label: "Telegram",
    description: "Share videos in groups, channels, or with your subscribers.",
    isConnected: false,
  },
  {
    icon: "icon-[streamline-ultimate-color--snapchat-logo]",
    label: "Snapchat",
    description: "Publish video stories directly to your Snapchat audience.",
    isConnected: false,
  },
  {
    icon: "icon-[icon-park--weibo]",
    label: "Weibo",
    description: "Distribute multilingual videos to reach audiences in China.",
    isConnected: false,
  },
];

const SNS = () => {
  const [socials, setSocials] = useState(snsList);
  const router = useRouter();

  const canProceed = socials.some((el) => el.isConnected);

  return (
    <section className="min-h-screen py-20 bg-gray-100">
      <div className="max-w-3xl lg:max-w-5xl xl:max-w-7xl px-4 mx-auto">
        <div className="mb-10">
          <h2 className="text-center text-3xl font-semibold tracking-tight md:text-5xl">
            Connect Your Socials
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center tracking-tight text-muted-foreground">
            Share and monetize your content across platforms seamlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full ">
          {socials.map((sns, index) => {
            return <SNSCard key={index} sns={sns} setSocials={setSocials} />;
          })}
        </div>

        {canProceed && (
          <div className="flex justify-center items-center mt-10">
            <Button
              onClick={() => router.push("/dashboard")}
              className="h-auto py-3 rounded-full"
            >
              Continue to Dashboard
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default SNS;
