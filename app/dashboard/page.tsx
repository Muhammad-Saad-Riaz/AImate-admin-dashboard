"use client";

import { color, motion } from "framer-motion";
import CreditUsageChart from "@/components/dashboard/credit-usage-chart";
import RevenueUsageChart from "@/components/dashboard/revenue-usage-chart";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CreditCard, DollarSign, Sparkles, Users } from "lucide-react";

/* Animation presets */
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

export default function DashboardOverviewPage() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-8"
    >
      {/* Header */}
      <motion.div variants={item}>
        <h1 className="text-3xl font-bold tracking-tight mb-2 mt-4">
          Dashboard Overview
        </h1>
        <p className="text-muted-foreground">
          Monitor key metrics and platform performance at a glance.
        </p>
      </motion.div>

      {/* KPI Cards */}
      <motion.div
        variants={container}
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {[
          {
            title: "Total Users",
            value: "2,450",
            icon: Users,
            color: "blue",
            desc: "Active accounts on the platform",
          },
          {
            title: "Monthly Revenue",
            value: "$45,231",
            icon: DollarSign,
            color: "#BA8E23",
            desc: "+20.1% vs last month",
            highlight: true,
          },
          {
            title: "AI Generation Count",
            value: "1.2M",
            color: "purple",
            icon: Sparkles,
            desc: "Total API calls this month",
          },
          {
            title: "Active Subscriptions",
            value: "987",
            color: "green",
            icon: CreditCard,
            desc: "Accounts with a paid plan",
          },
        ].map((card) => (
          <motion.div
            key={card.title}
            variants={item}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="transition-shadow hover:shadow-lg">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-sm font-medium">
                  {card.title}
                </CardTitle>
                <card.icon color={card.color} className="h-5 w-5 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-semibold mb-1">
                  {card.value}
                </div>
                <p
                  className={`text-sm ${
                    card.highlight
                      ? "text-green-600"
                      : "text-muted-foreground"
                  }`}
                >
                  {card.desc}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Charts */}
      <motion.div
        variants={container}
        className="grid lg:grid-cols-3 gap-6"
      >
        <motion.div
          variants={item}
          className="lg:col-span-2"
        >
          <RevenueUsageChart />
        </motion.div>

        <motion.div variants={item}>
          <CreditUsageChart />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

