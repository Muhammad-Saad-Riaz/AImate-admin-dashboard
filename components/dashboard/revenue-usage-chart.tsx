"use client";

import { ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const revenueData = [
  { month: "January", revenue: 12000, aiUsage: 40000 },
  { month: "February", revenue: 18000, aiUsage: 52000 },
  { month: "March", revenue: 22000, aiUsage: 61000 },
  { month: "April", revenue: 45000, aiUsage: 120000 },
  { month: "May", revenue: 35000, aiUsage: 88000 },
  { month: "June", revenue: 45231, aiUsage: 120000 },
  { month: "July", revenue: 50231, aiUsage: 140000 },
  { month: "Augest", revenue: 72231, aiUsage: 170000 },
  { month: "September", revenue: 68231, aiUsage: 160000 },
  { month: "October", revenue: 90231, aiUsage: 200000 },
];

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "var(--chart-1)",
  },
  aiUsage: {
    label: "AI Usage",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

const RevenueUsageChart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Monthly Revenue & AI Usage</CardTitle>
      </CardHeader>

      <CardContent className="overflow-hidden">
        <ChartContainer config={chartConfig}>
            <LineChart data={revenueData}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tickMargin={8}
              />
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <ChartLegend className="mt-2" content={<ChartLegendContent />} />

              <Line
                dataKey="revenue"
                type="monotone"
                stroke="var(--chart-1)"
                strokeWidth={2}
                dot={false}
                isAnimationActive
                animationDuration={1200}
              />
              <Line
                dataKey="aiUsage"
                type="monotone"
                stroke="var(--chart-2)"
                strokeWidth={2}
                dot={false}
                isAnimationActive
                animationDuration={1400}
              />
            </LineChart>

        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default RevenueUsageChart;
