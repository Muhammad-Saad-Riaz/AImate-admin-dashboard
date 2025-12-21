"use client";

import { ChartArea } from "@/components/dashboard/usage/area-chart";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { History, Wallet, Zap } from "lucide-react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { FadeIn } from "@/components/ui/motion";

const generationLogs = [
  {
    id: "gen-1024",
    user: "John Doe",
    model: "GPT-4o",
    prompt: "Generate a marketing strategy for a sustainable fashion brand...",
    credits: 12,
    status: "Success",
    timestamp: "2024-03-20 14:30",
  },
  {
    id: "gen-1025",
    user: "Sarah Khan",
    model: "DALL-E 3",
    prompt:
      "A futuristic cityscape with neon lights and flying cars, high detail...",
    credits: 50,
    status: "Success",
    timestamp: "2024-03-20 14:45",
  },
  {
    id: "gen-1026",
    user: "Ali Raza",
    model: "Claude 3.5 Sonnet",
    prompt:
      "Refactor this React hook to use useMemo and optimize performance...",
    credits: 8,
    status: "Success",
    timestamp: "2024-03-20 15:10",
  },
  {
    id: "gen-1027",
    user: "Emily Smith",
    model: "Gemini 1.5 Pro",
    prompt: "Analyze this 50-page PDF and summarize the key financial risks...",
    credits: 25,
    status: "Success",
    timestamp: "2024-03-20 15:35",
  },
  {
    id: "gen-1028",
    user: "Michael Brown",
    model: "GPT-4o",
    prompt: "Write a 2000-word blog post about the impact of AI on SEO...",
    credits: 15,
    status: "Failed",
    timestamp: "2024-03-20 16:00",
  },
];

const UsagePage = () => {
  return (
    <div className="space-y-6 mt-2 mb-10">
      {/* Header */}
      <FadeIn>
      <h1 className="text-3xl font-bold tracking-tight mb-2 mt-4">
        AI Usage & Credits
      </h1>
      <p className="text-muted-foreground">
        Track credit consumption, model activity, and recent generations.
      </p>
      </FadeIn>

      {/* KPI Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

        <FadeIn delay={0.1}>
        {/* Credits Used Card */}
        <Card className="transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">
              Total Credits Used
            </CardTitle>
            <Zap className="h-5 w-5 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold mb-1">1,250,000</div>
            <p className="text-xs text-muted-foreground">
              +12% from last month
            </p>
          </CardContent>
        </Card>
        </FadeIn>

        <FadeIn delay={0.15}>
        {/* Current Balance */}
        <Card className="transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">
              Current Balance
            </CardTitle>
            <Wallet className="h-5 w-5 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold mb-1">450,000</div>
            <p className="text-xs text-muted-foreground">Expires in 12 days</p>
          </CardContent>
        </Card>
        </FadeIn>
      </div>

      {/* Area Chart */}
      <FadeIn delay={0.25}>
        <ChartArea />
      </FadeIn>

      {/* Generation Metrics */}
      <FadeIn delay={0.35}>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <History className="h-5 w-5" />
            Recent Generations
          </CardTitle>
        </CardHeader>
        <Separator />
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Model</TableHead>
                <TableHead className="hidden md:table-cell">
                  Prompt Snippet
                </TableHead>
                <TableHead>Credits</TableHead>
                <TableHead className="hidden md:table-cell">Time</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {generationLogs.map((log) => (
                <TableRow key={log.id}>
                  <TableCell className="font-medium">{log.user}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{log.model}</Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell text-muted-foreground italic">
                    {log.prompt.substring(0, 50)}...
                  </TableCell>
                  <TableCell>{log.credits}</TableCell>
                  <TableCell className="hidden lg:table-cell text-muted-foreground">
                    {log.timestamp}
                  </TableCell>
                  <TableCell>
                    <Badge
                      className={`bg-green-500/10 text-green-500 hover:bg-green-500/10  ${
                        log.status === "Success"
                          ? "bg-green-500/10 text-green-500 hover:bg-green-500/10"
                          : "bg-red-500/10 text-red-500 hover:bg-red-500/10"
                      }`}
                    >
                      {log.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      </FadeIn>
    </div>
  );
};

export default UsagePage;
