"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"
import { motion } from "framer-motion";


import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

export const description = "A donut chart with text"

const chartData = [
  { name: "textGeneration", credits: 45, fill: "var(--color-chart-1)" },
  { name: "imageGeneration", credits: 30, fill: "var(--color-chart-2)" },
  { name: "dataAnalysis", credits: 15, fill: "var(--color-chart-3)" },
  { name: "other", credits: 10, fill: "var(--color-chart-4)" },
]

const chartConfig = {
  credits: {
    label: "Value",
  },
  textGeneration: {
    label: "Text Generation",
    color: "var(--chart-1)",
  },
  imageGeneration: {
    label: "Image Generation",
    color: "var(--chart-2)",
  },
  dataAnalysis: {
    label: "Data Analysis",
    color: "var(--chart-3)",
  },
  other: {
    label: "Other",
    color: "var(--chart-4)",
  },
} satisfies ChartConfig

const CreditUsageChart = () => {
  const totalCredits = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.credits, 0)
  }, [])

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Credit Usage Breakdown</CardTitle>
        <CardDescription>Novemeber 2025</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-62.5"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="credits"
              nameKey="name"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalCredits.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Credits
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
        </motion.div>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none font-medium">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Showing total credits for this months
        </div>
      </CardFooter>
    </Card>
  )
}

export default CreditUsageChart;