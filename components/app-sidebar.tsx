"use client";

import { motion } from "framer-motion";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import {
  CreditCard,
  Image as ImageIcon,
  LayoutDashboard,
  LogOut,
  Settings,
  User,
  Zap,
} from "lucide-react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Separator } from "./ui/separator";

const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Users",
    url: "/dashboard/users",
    icon: User,
  },
  {
    title: "AI Usage",
    url: "/dashboard/usage",
    icon: Zap,
  },
  {
    title: "Billing",
    url: "/dashboard/billing",
    icon: CreditCard,
  },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
    <Sidebar variant="floating" collapsible="icon">
      {/* Header */}
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem className="">
            <SidebarMenuButton className="h-10" asChild>
              <Link href="/dashboard" className="font-semibold text-xl tracking-tight">
                <ImageIcon/>
                <span>AImate Admin</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <Separator />
        </SidebarMenu>
      </SidebarHeader>

      {/* Content */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                const isActive = pathname === item.url;

                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      className={isActive ? "bg-accent font-medium" : ""}
                    >
                      <Link href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/dashboard/settings">
                <Settings />
                <span>Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="text-red-600 hover:text-red-600 hover:bg-red-100 dark:text-red-500 dark:hover:bg-red-600/10"
            >
              <div>
                <LogOut />
                <span>Log out</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
    </motion.div>
  );
}

