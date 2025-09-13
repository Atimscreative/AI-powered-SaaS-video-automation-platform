"use client";
import { useState } from "react";
import {
  Link,
  Upload,
  FileText,
  ExternalLink,
  Youtube,
  Instagram,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const VideoGenerationPanel = () => {
  const [linkInput, setLinkInput] = useState("");
  const [videoLinkInput, setVideoLinkInput] = useState("");

  return (
    <Card className="dashboard-card dashboard-card-hover">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <div className="h-8 w-8 gradient-primary rounded-lg flex items-center justify-center">
            <FileText className="h-5 w-5 text-primary-foreground" />
          </div>
          Video Generation
        </CardTitle>
        <CardDescription>
          Create stunning videos from multiple input sources
        </CardDescription>
      </CardHeader>

      <CardContent>
        <Tabs defaultValue="link" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="link" className="flex items-center gap-2">
              <ExternalLink className="h-4 w-4" />
              Link Input
            </TabsTrigger>
            <TabsTrigger value="video" className="flex items-center gap-2">
              <Youtube className="h-4 w-4" />
              Video Link
            </TabsTrigger>
            <TabsTrigger value="upload" className="flex items-center gap-2">
              <Upload className="h-4 w-4" />
              Media Upload
            </TabsTrigger>
          </TabsList>

          <TabsContent value="link" className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="link-input" className="text-sm font-medium">
                Website/Blog/Instagram URL
              </label>
              <Input
                id="link-input"
                placeholder="https://example.com or https://instagram.com/p/..."
                value={linkInput}
                onChange={(e) => setLinkInput(e.target.value)}
                className="transition-[var(--transition-smooth)] focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <Button className="btn-primary w-full">
              <Link className="h-4 w-4 mr-2" />
              Extract & Generate
            </Button>
          </TabsContent>

          <TabsContent value="video" className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="video-input" className="text-sm font-medium">
                YouTube/TikTok/Instagram Reels Link
              </label>
              <Input
                id="video-input"
                placeholder="https://youtube.com/watch?v=... or https://tiktok.com/@..."
                value={videoLinkInput}
                onChange={(e) => setVideoLinkInput(e.target.value)}
                className="transition-[var(--transition-smooth)] focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <Button className="btn-primary w-full">
              <Instagram className="h-4 w-4 mr-2" />
              Analyze & Recreate
            </Button>
          </TabsContent>

          <TabsContent value="upload" className="space-y-4">
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-[var(--transition-smooth)]">
              <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-lg font-medium mb-2">Upload your content</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Drag and drop images, text documents, or voice recordings
              </p>
              <Button variant="outline">Choose Files</Button>
            </div>

            <div className="space-y-2">
              <label htmlFor="description" className="text-sm font-medium">
                Additional Description (Optional)
              </label>
              <Textarea
                id="description"
                placeholder="Describe the style, mood, or specific requirements for your video..."
                className="min-h-[100px] transition-[var(--transition-smooth)] focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <Button className="btn-primary w-full">
              <FileText className="h-4 w-4 mr-2" />
              Generate Video
            </Button>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};
