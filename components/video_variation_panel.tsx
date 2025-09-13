"use client";

import { useState } from "react";

import { Play, Palette, Type, Mic, Music, Copy, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import videoPreview from "@/public/images/video-placeholder-fallback.svg";

export const VideoVariationsPanel = () => {
  const [variants, setVariants] = useState([10]);

  return (
    <Card className="dashboard-card dashboard-card-hover">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <div className="h-8 w-8 gradient-secondary rounded-lg flex items-center justify-center">
            <Copy className="h-5 w-5 text-secondary-foreground" />
          </div>
          Video Variations
        </CardTitle>
        <CardDescription>
          Create multiple versions and customize your content
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Video Preview */}
        <div className="relative aspect-video bg-muted rounded-lg overflow-hidden group">
          <img
            src={videoPreview}
            alt="Video preview"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <Button size="lg" className="btn-hero">
              <Play className="h-6 w-6 mr-2" />
              Preview
            </Button>
          </div>
          <Badge className="absolute top-3 right-3 bg-secondary text-secondary-foreground">
            Generated
          </Badge>
        </div>

        {/* Bulk Variations */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium">Number of Variants</label>
            <Badge variant="outline">{variants[0]} videos</Badge>
          </div>
          <Slider
            value={variants}
            onValueChange={setVariants}
            min={1}
            max={1000}
            step={1}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>1</span>
            <span>1000</span>
          </div>
        </div>

        {/* Customization Controls */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium flex items-center gap-2">
              <Palette className="h-4 w-4" />
              Color Theme
            </label>
            <Select defaultValue="electric">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="electric">Electric Blue</SelectItem>
                <SelectItem value="neon">Neon Green</SelectItem>
                <SelectItem value="sunset">Sunset Orange</SelectItem>
                <SelectItem value="purple">Purple Dreams</SelectItem>
                <SelectItem value="monochrome">Monochrome</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium flex items-center gap-2">
              <Type className="h-4 w-4" />
              Font Style
            </label>
            <Select defaultValue="modern">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="modern">Modern Sans</SelectItem>
                <SelectItem value="bold">Bold Impact</SelectItem>
                <SelectItem value="elegant">Elegant Serif</SelectItem>
                <SelectItem value="playful">Playful Script</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium flex items-center gap-2">
              <Mic className="h-4 w-4" />
              Voiceover
            </label>
            <Select defaultValue="male-pro">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male-pro">Male Professional</SelectItem>
                <SelectItem value="female-pro">Female Professional</SelectItem>
                <SelectItem value="male-casual">Male Casual</SelectItem>
                <SelectItem value="female-casual">Female Casual</SelectItem>
                <SelectItem value="no-voice">No Voiceover</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium flex items-center gap-2">
              <Music className="h-4 w-4" />
              Background Music
            </label>
            <Select defaultValue="upbeat">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="upbeat">Upbeat Electronic</SelectItem>
                <SelectItem value="corporate">Corporate</SelectItem>
                <SelectItem value="ambient">Ambient</SelectItem>
                <SelectItem value="energetic">High Energy</SelectItem>
                <SelectItem value="none">No Music</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button className="btn-secondary flex-1">
            <Copy className="h-4 w-4 mr-2" />
            Create Variants
          </Button>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Download
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
