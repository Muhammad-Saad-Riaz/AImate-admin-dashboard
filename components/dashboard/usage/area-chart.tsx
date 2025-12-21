"use client";

import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const description = "An interactive area chart";

const chartData = [
  { date: "2024-04-01", purchased: 222, spent: 150 },
  { date: "2024-04-02", purchased: 97, spent: 180 },
  { date: "2024-04-03", purchased: 167, spent: 120 },
  { date: "2024-04-04", purchased: 242, spent: 260 },
  { date: "2024-04-05", purchased: 373, spent: 290 },
  { date: "2024-04-06", purchased: 301, spent: 340 },
  { date: "2024-04-07", purchased: 245, spent: 180 },
  { date: "2024-04-08", purchased: 409, spent: 320 },
  { date: "2024-04-09", purchased: 59, spent: 110 },
  { date: "2024-04-10", purchased: 261, spent: 190 },
  { date: "2024-04-11", purchased: 327, spent: 350 },
  { date: "2024-04-12", purchased: 292, spent: 210 },
  { date: "2024-04-13", purchased: 342, spent: 380 },
  { date: "2024-04-14", purchased: 137, spent: 220 },
  { date: "2024-04-15", purchased: 120, spent: 170 },
  { date: "2024-04-16", purchased: 138, spent: 190 },
  { date: "2024-04-17", purchased: 446, spent: 360 },
  { date: "2024-04-18", purchased: 364, spent: 410 },
  { date: "2024-04-19", purchased: 243, spent: 180 },
  { date: "2024-04-20", purchased: 89, spent: 150 },
  { date: "2024-04-21", purchased: 137, spent: 200 },
  { date: "2024-04-22", purchased: 224, spent: 170 },
  { date: "2024-04-23", purchased: 138, spent: 230 },
  { date: "2024-04-24", purchased: 387, spent: 290 },
  { date: "2024-04-25", purchased: 215, spent: 250 },
  { date: "2024-04-26", purchased: 75, spent: 130 },
  { date: "2024-04-27", purchased: 383, spent: 420 },
  { date: "2024-04-28", purchased: 122, spent: 180 },
  { date: "2024-04-29", purchased: 315, spent: 240 },
  { date: "2024-04-30", purchased: 454, spent: 380 },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  purchased: {
    label: "Credits Purchased",
    color: "var(--chart-1)",
  },
  spent: {
    label: "Credits Spent",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig;

export function ChartArea() {
  const [timeRange, setTimeRange] = React.useState("30d");

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date);
    const referenceDate = new Date("2024-04-30");
    let daysToSubtract = 30;
    if (timeRange === "14d") {
      daysToSubtract = 14;
    } else if (timeRange === "7d") {
      daysToSubtract = 7;
    }
    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);
    return date >= startDate;
  });

  return (
    <Card className="pt-0">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1">
          <CardTitle>Credit Consumption Trends</CardTitle>
          <CardDescription>
            Visualizing credits purchased vs actual AI usage (Last 30 Days)
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="flex w-40 rounded-lg ml-auto "
            aria-label="Select a value"
          >
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="30d" className="rounded-lg">
              Last 1 month
            </SelectItem>
            <SelectItem value="14d" className="rounded-lg">
              Last 14 days
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              Last 7 days
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-62.5 w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-purchased)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-purchased)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-spent)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-spent)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />

            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    });
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="spent"
              type="natural"
              fill="url(#fillMobile)"
              stroke="var(--color-spent)"
              stackId="a"
            />
            <Area
              dataKey="purchased"
              type="natural"
              fill="url(#fillDesktop)"
              stroke="var(--color-purchased)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
