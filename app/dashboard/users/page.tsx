"use client";

import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import * as React from "react";
import { DataTable } from "./data-table";
import { columns, User } from "./columns";
import { motion } from "framer-motion";

const users = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    status: "Active",
    plan: "Pro",
    joinedDate: "2024-02-12",
  },
  {
    id: "2",
    name: "Sarah Khan",
    email: "sarah@example.com",
    status: "Active",
    plan: "Enterprise",
    joinedDate: "2023-11-03",
  },
  {
    id: "3",
    name: "Ali Raza",
    email: "ali@example.com",
    status: "Inactive",
    plan: "Free",
    joinedDate: "2024-01-19",
  },
  {
    id: "4",
    name: "Emily Smith",
    email: "emily@example.com",
    status: "Active",
    plan: "Pro",
    joinedDate: "2023-09-27",
  },
  {
    id: "5",
    name: "Michael Brown",
    email: "michael@example.com",
    status: "Inactive",
    plan: "Free",
    joinedDate: "2023-12-15",
  },
  {
    id: "6",
    name: "Ayesha Noor",
    email: "ayesha@example.com",
    status: "Active",
    plan: "Enterprise",
    joinedDate: "2024-03-05",
  },
  {
    id: "7",
    name: "Daniel Lee",
    email: "daniel@example.com",
    status: "Active",
    plan: "Pro",
    joinedDate: "2024-02-01",
  },
  {
    id: "8",
    name: "Fatima Zahra",
    email: "fatima@example.com",
    status: "Inactive",
    plan: "Free",
    joinedDate: "2023-10-10",
  },
  {
    id: "9",
    name: "Chris Wilson",
    email: "chris@example.com",
    status: "Active",
    plan: "Pro",
    joinedDate: "2024-01-07",
  },
  {
    id: "10",
    name: "Hassan Ahmed",
    email: "hassan@example.com",
    status: "Active",
    plan: "Enterprise",
    joinedDate: "2023-08-22",
  },
];

const DashboardUsersPage = () => {

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="space-y-6 mt-2"
    >
      {/* Header */}
      <h1 className="text-4xl font-bold tracking-tight mb-2 mt-4">
        Users
      </h1>
      <p className="text-muted-foreground">
        Manage user accounts, monitor activity, and control access across the platform.
      </p>

      {/* User Table */}
      <div className="container mx-auto">
        <DataTable columns={columns} data={users} />
      </div>
    </motion.div>
  );
};

export default DashboardUsersPage;
