"use client";
import { useState } from "react";
import {
  Youtube,
  Instagram,
  Facebook,
  Share,
  Clock,
  Users,
  BarChart3,
  Calendar,
  Settings,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
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
import { Progress } from "@/components/ui/progress";

const platforms = [
  {
    name: "YouTube",
    icon: Youtube,
    connected: true,
    status: "active",
  },
  {
    name: "Instagram",
    icon: Instagram,
    connected: true,
    status: "active",
  },
  {
    name: "Facebook",
    icon: Facebook,
    connected: false,
    status: "inactive",
  },
  {
    name: "TikTok",
    icon: Share,
    connected: true,
    status: "paused",
  },
];

export const AutomatedUploadsPanel = () => {
  const [dailyLimit, setDailyLimit] = useState("2");
  const [userRange, setUserRange] = useState("10-50");

  return (
    <Card className="dashboard-card dashboard-card-hover">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <div className="h-8 w-8 gradient-primary rounded-lg flex items-center justify-center">
            <Calendar className="h-5 w-5 text-primary-foreground" />
          </div>
          Automated Uploads
        </CardTitle>
        <CardDescription>
          Manage social media connections and scheduling
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Social Media Connections */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium">Connected Platforms</h3>
          <div className="grid grid-cols-2 gap-3">
            {platforms.map((platform) => {
              const Icon = platform.icon;
              return (
                <div
                  key={platform.name}
                  className="flex items-center justify-between p-3 border border-border rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5" />
                    <span className="text-sm font-medium">{platform.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {platform.status === "active" && (
                      <CheckCircle className="h-4 w-4 text-secondary" />
                    )}
                    {platform.status === "paused" && (
                      <AlertCircle className="h-4 w-4 text-yellow-500" />
                    )}
                    <Switch
                      checked={platform.connected}
                      disabled={
                        !platform.connected && platform.name === "Facebook"
                      }
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Scheduler Settings */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium">Scheduler Settings</h3>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Daily Posting Limit
              </label>
              <Select value={dailyLimit} onValueChange={setDailyLimit}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 video/day</SelectItem>
                  <SelectItem value="2">2 videos/day</SelectItem>
                  <SelectItem value="3">3 videos/day</SelectItem>
                  <SelectItem value="4">4 videos/day (max)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <Users className="h-4 w-4" />
                User Range (30 days)
              </label>
              <Select value={userRange} onValueChange={setUserRange}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10-50">10-50 users/day</SelectItem>
                  <SelectItem value="50-100">50-100 users/day</SelectItem>
                  <SelectItem value="100-500">100-500 users/day</SelectItem>
                  <SelectItem value="500-1000">500-1000 users/day</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Progress Tracker */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium">Upload Progress</h3>
            <Badge variant="outline">This Week</Badge>
          </div>

          <div className="space-y-3">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Daily Uploads</span>
                <span>12/28</span>
              </div>
              <Progress value={43} className="h-2" />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Weekly Target</span>
                <span>85/196</span>
              </div>
              <Progress value={43} className="h-2" />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          <div className="text-center p-3 bg-muted rounded-lg">
            <div className="text-2xl font-bold text-primary">2.4K</div>
            <div className="text-xs text-muted-foreground">Total Uploads</div>
          </div>
          <div className="text-center p-3 bg-muted rounded-lg">
            <div className="text-2xl font-bold text-secondary">94%</div>
            <div className="text-xs text-muted-foreground">Success Rate</div>
          </div>
          <div className="text-center p-3 bg-muted rounded-lg">
            <div className="text-2xl font-bold">348</div>
            <div className="text-xs text-muted-foreground">Active Users</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button className="btn-primary flex-1">
            <Calendar className="h-4 w-4 mr-2" />
            Schedule Uploads
          </Button>
          <Button variant="outline">
            <BarChart3 className="h-4 w-4 mr-2" />
            View Analytics
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
