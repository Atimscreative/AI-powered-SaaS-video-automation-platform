import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import {
  Play,
  Plus,
  Upload,
  Clock,
  CheckCircle,
  AlertCircle,
  Download,
  Share2,
  Eye,
  Youtube,
  Instagram,
  Music,
  Zap,
} from "lucide-react";

const VideoCreationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
    }, 2000);
  };

  const platforms = [
    { id: "youtube", name: "YouTube", icon: Youtube },
    { id: "tiktok", name: "TikTok", icon: Music },
    { id: "instagram", name: "Instagram", icon: Instagram },
  ];

  return (
    <Card className="bg-gradient-card border-border">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-foreground">
          <Plus className="w-5 h-5" />
          Create New Video
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="topic">Video Topic*</Label>
              <Input
                id="topic"
                placeholder="e.g., 10 AI trends for 2024"
                className="bg-muted/20"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="duration">Duration (minutes)*</Label>
              <Select>
                <SelectTrigger className="bg-muted/20">
                  <SelectValue placeholder="Select duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 minute</SelectItem>
                  <SelectItem value="2">2 minutes</SelectItem>
                  <SelectItem value="3">3 minutes</SelectItem>
                  <SelectItem value="5">5 minutes</SelectItem>
                  <SelectItem value="10">10 minutes</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="reference">Reference URL (optional)</Label>
            <Input
              id="reference"
              placeholder="https://example.com/article"
              className="bg-muted/20"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Additional Instructions</Label>
            <Textarea
              id="description"
              placeholder="Any specific requirements or style preferences..."
              className="bg-muted/20 min-h-[100px]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>Language</Label>
              <Select>
                <SelectTrigger className="bg-muted/20">
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="es">Spanish</SelectItem>
                  <SelectItem value="fr">French</SelectItem>
                  <SelectItem value="de">German</SelectItem>
                  <SelectItem value="pt">Portuguese</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Voice Style</Label>
              <Select>
                <SelectTrigger className="bg-muted/20">
                  <SelectValue placeholder="Select voice style" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="professional">Professional</SelectItem>
                  <SelectItem value="casual">Casual</SelectItem>
                  <SelectItem value="energetic">Energetic</SelectItem>
                  <SelectItem value="calm">Calm & Soothing</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-3">
            <Label>Publishing Platforms*</Label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {platforms.map((platform) => (
                <div
                  key={platform.id}
                  className={`flex items-center space-x-3 p-3 rounded-lg border cursor-pointer transition-all ${
                    selectedPlatforms.includes(platform.id)
                      ? "border-primary bg-primary/10"
                      : "border-border bg-muted/10 hover:bg-muted/20"
                  }`}
                  onClick={() => {
                    setSelectedPlatforms((prev) =>
                      prev.includes(platform.id)
                        ? prev.filter((p) => p !== platform.id)
                        : [...prev, platform.id]
                    );
                  }}
                >
                  <Checkbox
                    checked={selectedPlatforms.includes(platform.id)}
                    onChange={() => {}}
                  />
                  <platform.icon className="w-5 h-5" />
                  <span>{platform.name}</span>
                </div>
              ))}
            </div>
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full"
            disabled={isSubmitting || selectedPlatforms.length === 0}
          >
            {isSubmitting ? (
              <>
                <Zap className="w-5 h-5 mr-2 animate-spin" />
                Creating Video...
              </>
            ) : (
              <>
                <Play className="w-5 h-5 mr-2" />
                Generate Video
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

const VideoList = () => {
  const videos = [
    {
      id: 1,
      title: "10 AI Trends That Will Change Everything in 2024",
      status: "completed",
      progress: 100,
      duration: "4:32",
      platforms: ["YouTube", "TikTok"],
      views: "15,247",
      thumbnail: "🤖",
      createdAt: "2 hours ago",
    },
    {
      id: 2,
      title: "How to Start a Successful Online Business",
      status: "processing",
      progress: 75,
      duration: "5:12",
      platforms: ["YouTube", "Instagram"],
      views: "—",
      thumbnail: "💼",
      createdAt: "4 hours ago",
    },
    {
      id: 3,
      title: "5 Productivity Hacks for Remote Workers",
      status: "uploading",
      progress: 90,
      duration: "2:45",
      platforms: ["TikTok"],
      views: "8,932",
      thumbnail: "⚡",
      createdAt: "1 day ago",
    },
    {
      id: 4,
      title: "The Future of Electric Vehicles",
      status: "failed",
      progress: 0,
      duration: "—",
      platforms: ["YouTube"],
      views: "—",
      thumbnail: "🚗",
      createdAt: "2 days ago",
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-4 h-4 text-success" />;
      case "processing":
      case "uploading":
        return <Clock className="w-4 h-4 text-warning" />;
      case "failed":
        return <AlertCircle className="w-4 h-4 text-destructive" />;
      default:
        return <Clock className="w-4 h-4 text-muted-foreground" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "text-success";
      case "processing":
      case "uploading":
        return "text-warning";
      case "failed":
        return "text-destructive";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <Card className="bg-gradient-card border-border">
      <CardHeader>
        <CardTitle className="text-foreground">Your Videos</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {videos.map((video) => (
            <div
              key={video.id}
              className="flex items-center justify-between p-4 rounded-lg bg-muted/10 hover:bg-muted/20 transition-colors"
            >
              <div className="flex items-center space-x-4 flex-1">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center text-xl">
                  {video.thumbnail}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-foreground truncate">
                    {video.title}
                  </h4>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground mt-1">
                    {getStatusIcon(video.status)}
                    <span className={getStatusColor(video.status)}>
                      {video.status.charAt(0).toUpperCase() +
                        video.status.slice(1)}
                    </span>
                    {video.duration !== "—" && (
                      <>
                        <span>•</span>
                        <span>{video.duration}</span>
                      </>
                    )}
                    <span>•</span>
                    <span>{video.createdAt}</span>
                  </div>
                  {video.status === "processing" ||
                  video.status === "uploading" ? (
                    <Progress value={video.progress} className="mt-2 h-2" />
                  ) : null}
                  <div className="flex items-center space-x-2 mt-2">
                    {video.platforms.map((platform) => (
                      <Badge
                        key={platform}
                        variant="secondary"
                        className="text-xs"
                      >
                        {platform}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-foreground">
                    {video.views} views
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2 ml-4">
                {video.status === "completed" && (
                  <>
                    <Button variant="ghost" size="icon">
                      <Play className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Download className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Share2 className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Eye className="w-4 h-4" />
                    </Button>
                  </>
                )}
                {video.status === "failed" && (
                  <Button variant="outline" size="sm">
                    Retry
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export const MemberDashboard = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Create Videos
        </h1>
        <p className="text-muted-foreground">
          Generate AI-powered videos and publish them across your social media
          platforms
        </p>
      </div>

      <VideoCreationForm />
      <VideoList />
    </div>
  );
};
