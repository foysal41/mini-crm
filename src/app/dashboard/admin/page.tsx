"use client";

import { useSession } from "@/app/lib/auth-client";
import { Spinner } from "@heroui/react";
import DashboardCard from "@/app/components/dashboard/DashboardCard";

import {
  Persons,
  ListCheck,
  Person,
  Star,
} from "@gravity-ui/icons";

const Admin = () => {
  const { data: session, isPending } = useSession();

  if (isPending) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Spinner size="lg" color="accent" />
      </div>
    );
  }

  const user = session?.user;

  const dashboardData = [
    {
      title: "Total Customers",
      value: 1245,
      icon: Persons,
      color: "bg-blue-100 text-blue-600",
      growth: "+12%",
    },
    {
      title: "Total Tasks",
      value: 86,
      icon: ListCheck,
      color: "bg-green-100 text-green-600",
      growth: "+8%",
    },
    {
      title: "Users",
      value: 12,
      icon: Person,
      color: "bg-purple-100 text-purple-600",
      growth: "+2",
    },
    {
      title: "Active Customers",
      value: 925,
      icon: Star,
      color: "bg-orange-100 text-orange-500",
      growth: "+5%",
    },
  ];

  return (
    <div>
      <h2 className="text-4xl font-bold">
        Welcome Back, {user?.name}
      </h2>

      <DashboardCard data={dashboardData} />
    </div>
  );
};

export default Admin;