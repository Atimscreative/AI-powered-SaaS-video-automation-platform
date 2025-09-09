import React from "react";
import { Marquee } from "../ui/marquee";
import Image from "next/image";

const snsList = [
  { icon: "", label: "YouTube" },
  { icon: "", label: "instagram" },
  { icon: "", label: "Facebook" },
  { icon: "", label: "TikTok" },
  { icon: "", label: "LinkedIn" },
  { icon: "", label: "Twitter X" },
  { icon: "", label: "Pinterest" },
  { icon: "", label: "Reddit" },
  { icon: "", label: "Telegram" },
  { icon: "", label: "Snapchat" },
  { icon: "", label: "Weibo" },
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
      <Image
        width={20}
        height={20}
        src="/images/circles.svg"
        alt="Figma"
        className="size-5"
      />
      <p className="text-lg">{label}</p>
    </div>
  );
}
