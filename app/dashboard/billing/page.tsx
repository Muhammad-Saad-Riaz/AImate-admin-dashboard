"use client";

import { motion } from "framer-motion";
import { Check, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle
} from "@/components/ui/card";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

// --------------------------------------------------
// Mock Data
// --------------------------------------------------
const invoices = [
  { id: "INV-001", date: "2024-03-01", amount: "$29.00", status: "Paid" },
  { id: "INV-002", date: "2024-02-01", amount: "$29.00", status: "Paid" },
  { id: "INV-003", date: "2024-01-01", amount: "$29.00", status: "Paid" },
];

const plans = [
  {
    name: "Free",
    price: "$0/mo",
    current: false,
    features: [
      "Basic dashboard access",
      "100 AI credits / month",
      "Community support",
    ],
  },
  {
    name: "Pro",
    price: "$29/mo",
    current: true,
    features: [
      "Unlimited AI usage",
      "Priority processing",
      "Team collaboration",
      "Project templates",
      "Custom AI prompts",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    current: false,
    features: [
      "Dedicated infrastructure",
      "Custom AI models",
      "Admin roles & SSO",
      "Full API access",
      "24/7 dedicated support",
    ],
  },
];

// --------------------------------------------------
// Pricing Cards Component
// --------------------------------------------------
function PricingPlans() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {plans.map((plan, index) => (
        <motion.div
          key={plan.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.4 }}
        >
          <Card
            className={`
              relative border rounded-xl transition-all duration-300
              hover:shadow-xl hover:-translate-y-1
              ${plan.current ? "border-primary shadow-md" : ""}
            `}
          >
            {plan.current && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs py-1 px-3 rounded-full shadow-md">
                Current Plan
              </div>
            )}

            <CardHeader className="text-center pb-2">
              <CardTitle className="text-2xl font-semibold">{plan.name}</CardTitle>
              <CardDescription className="text-3xl mt-2">
                {plan.price}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-3 py-2">
              {plan.features.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" color="green"/>
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </div>
              ))}
            </CardContent>

            <CardFooter>
              <Button className="w-full" variant={plan.current ? "default" : "outline"}>
                {plan.current ? "Manage Plan" : "Upgrade"}
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}

// --------------------------------------------------
// Billing Page
// --------------------------------------------------
export default function BillingPage() {
  return (
    <motion.div
      className="space-y-8 mt-4 mb-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Billing</h1>
        <p className="text-muted-foreground">
          Manage your subscription, payments, and invoices.
        </p>
      </div>

      {/* Subscription Plans */}
      <PricingPlans />

      {/* Billing History */}
      <Card className="mt-10">
        <CardHeader>
          <CardTitle>Billing History</CardTitle>
          <CardDescription>Your past transactions & invoices</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice ID</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((inv) => (
                <TableRow key={inv.id}>
                  <TableCell>{inv.id}</TableCell>
                  <TableCell>{inv.date}</TableCell>
                  <TableCell>{inv.amount}</TableCell>
                  <TableCell>
                    {/* <span className="text-green-500">●</span> {inv.status} */}
                    <Badge
                      className={`bg-green-500/10 text-green-500 hover:bg-green-500/10  ${
                        inv.status === "Paid"
                          ? "bg-green-500/10 text-green-500 hover:bg-green-500/10"
                          : "bg-red-500/10 text-red-500 hover:bg-red-500/10"
                      }`}
                    >
                      {inv.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </motion.div>
  );
}
