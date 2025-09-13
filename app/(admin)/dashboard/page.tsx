import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Video, Calendar } from "lucide-react";
import { VideoGenerationPanel } from "@/components/video_generation_panel";
import { AutomatedUploadsPanel } from "@/components/automatic_uploads_panel";
import { VideoVariationsPanel } from "@/components/video_variation_panel";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const stats = [
  {
    title: "Videos Generated",
    value: "12,458",
    change: "+23%",
    icon: Video,
    color: "text-primary",
  },
  {
    title: "Active Users",
    value: "2,847",
    change: "+12%",
    icon: Users,
    color: "text-secondary",
  },
  {
    title: "Uploads Today",
    value: "347",
    change: "+8%",
    icon: Calendar,
    color: "text-primary",
  },
  {
    title: "Success Rate",
    value: "98.2%",
    change: "+2%",
    icon: TrendingUp,
    color: "text-secondary",
  },
];

const Page = () => {
  return (
    <>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold">Video Generation Dashboard</h1>
          <p className="text-muted-foreground">
            Create, customize, and automate your video content at scale
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.title} className="dashboard-card">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        {stat.title}
                      </p>
                      <p className="text-2xl font-bold">{stat.value}</p>
                    </div>
                    <Icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                  <div className="mt-4 flex items-center">
                    <Badge variant="secondary" className="text-xs">
                      {stat.change} from last month
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Main Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <VideoGenerationPanel />
            <AutomatedUploadsPanel />
          </div>
          <div>
            <VideoVariationsPanel />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
