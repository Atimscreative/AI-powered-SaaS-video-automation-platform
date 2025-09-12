"use client";
import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export default function SNSCard({ sns, setSocials }: any) {
  const handleToggleConnection = (label: any) => {
    setSocials((prev: any[]) =>
      prev.map((item) =>
        item.label === label
          ? { ...item, isConnected: !item.isConnected }
          : item
      )
    );
  };

  return (
    <div className="bg-white rounded-2xl p-4 shadow-lg  flex justify-between items-center text-center transition-transform transform hover:scale-105">
      <div className="flex gap-3 items-center">
        <div className="bg-neutral-200 rounded-lg flex justify-center items-center size-14">
          <span className={cn(sns.icon, "size-8")}></span>
        </div>
        <h3 className="text-lg font-bold text-gray-800">{sns.label}</h3>
      </div>
      <Button
        size="sm"
        onClick={() => handleToggleConnection(sns.label)}
        className={cn(
          "rounded-full transition-colors duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-75",
          sns.isConnected
            ? "bg-red-700 hover:bg-red-600 text-white"
            : "bg-green-800 hover:bg-green-700 text-white"
        )}
      >
        {sns.isConnected ? "Connected" : "Connect"}
      </Button>
    </div>
  );
}
