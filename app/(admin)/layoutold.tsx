"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  Video,
  Users,
  Crown,
  Menu,
  X,
  Settings,
  LogOut,
  Bell,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface DashboardLayoutProps {
  children: React.ReactNode;
  activeTab: string;
  onTabChange: (tab: string) => void;
  userRole: "member" | "admin" | "partner";
}

const DashboardLayout = ({
  children,
  activeTab,
  onTabChange,
  userRole,
}: DashboardLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const getNavigationItems = () => {
    const baseItems = [
      {
        id: "member",
        label: "Create Videos",
        icon: Video,
        roles: ["member", "admin"],
      },
      {
        id: "admin",
        label: "Admin Panel",
        icon: LayoutDashboard,
        roles: ["admin"],
      },
      {
        id: "partner",
        label: "Partner Hub",
        icon: Crown,
        roles: ["partner", "admin"],
      },
    ];

    return baseItems.filter((item) => item.roles.includes(userRole));
  };

  const navigationItems = getNavigationItems();

  const NavContent = () => (
    <>
      <div className="flex items-center space-x-3 p-6 border-b border-border">
        <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
          <Video className="w-6 h-6 text-primary-foreground" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-foreground">VideoAI</h2>
          <p className="text-sm text-muted-foreground capitalize">
            {userRole} Dashboard
          </p>
        </div>
      </div>

      <nav className="flex-1 p-4">
        <div className="space-y-2">
          {navigationItems.map((item) => (
            <Button
              key={item.id}
              variant={activeTab === item.id ? "default" : "ghost"}
              className={cn(
                "w-full justify-start",
                activeTab === item.id && "bg-primary text-primary-foreground"
              )}
              onClick={() => {
                onTabChange(item.id);
                setSidebarOpen(false);
              }}
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.label}
            </Button>
          ))}
        </div>
      </nav>

      <div className="p-4 border-t border-border">
        <div className="space-y-2">
          <Button variant="ghost" className="w-full justify-start">
            <Settings className="w-5 h-5 mr-3" />
            Settings
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <LogOut className="w-5 h-5 mr-3" />
            Sign Out
          </Button>
        </div>
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Mobile backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Desktop Sidebar */}
      <div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0 z-50">
        <div className="glass-card h-full border-r border-border">
          <NavContent />
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 ease-in-out lg:hidden",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="glass-card h-full border-r border-border">
          <NavContent />
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:pl-64">
        {/* Top Navigation */}
        <div className="sticky top-0 z-30 glass border-b border-border">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden"
                  onClick={() => setSidebarOpen(true)}
                >
                  <Menu className="w-6 h-6" />
                </Button>
                <h1 className="ml-4 text-xl font-semibold text-foreground lg:ml-0">
                  {navigationItems.find((item) => item.id === activeTab)
                    ?.label || "Dashboard"}
                </h1>
              </div>

              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon">
                  <Bell className="w-5 h-5" />
                </Button>
                <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
                  <Users className="w-4 h-4 text-primary-foreground" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page Content */}
        <main className="p-4 sm:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
