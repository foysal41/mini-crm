
import Link from "next/link";
import { Button } from "@heroui/react";
import {
  PencilToSquare,
  Person,
  Shield,
  SquareDashedText,
  Magnifier,
  ListUl,
} from "@gravity-ui/icons";

const features = [
  {
    title: "Task Management",
    description: "Create, update, assign, and manage daily tasks efficiently.",
    icon: PencilToSquare,
  },
  {
    title: "Team Collaboration",
    description: "Assign tasks to team members and monitor progress.",
    icon: Person,
  },
  {
    title: "Secure Authentication",
    description: "User authentication with secure login and role management.",
    icon: Shield,
  },
  {
    title: "Dashboard",
    description: "Professional dashboard to manage everything from one place.",
    icon: SquareDashedText,
  },
  {
    title: "Search",
    description: "Quickly search tasks using task name.",
    icon: Magnifier,
  },
  {
    title: "Pagination",
    description: "Navigate large task lists with smooth pagination.",
    icon: ListUl,
  },
];

export default function Home() {
  return (
     <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-24 md:flex-row">
          <div className="flex-1">
            <span className="rounded-full bg-white/20 px-4 py-2 text-sm">
              Mini CRM System
            </span>

            <h1 className="mt-6 text-5xl font-bold leading-tight">
              Manage Your Daily Tasks
              <br />
              Faster & Smarter
            </h1>

            <p className="mt-6 max-w-xl text-lg text-blue-100">
              Organize tasks, assign work, track progress, and improve
              productivity with a modern CRM dashboard.
            </p>

            <div className="mt-8 flex gap-4">
              <Link href="/login">
                <Button >
                  Get Started
                </Button>
              </Link>

              <Link href="/dashboard">
                <Button >
                  Dashboard
                </Button>
              </Link>
            </div>
          </div>

          <div className="mt-14 flex-1 md:mt-0">
            <div className="rounded-3xl bg-white p-6 shadow-2xl">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-800">
                  Dashboard Overview
                </h3>

                <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
                  Active
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-blue-50 p-5">
                  <p className="text-sm text-gray-500">Total Tasks</p>
                  <h2 className="mt-2 text-3xl font-bold text-blue-600">128</h2>
                </div>

                <div className="rounded-xl bg-green-50 p-5">
                  <p className="text-sm text-gray-500">Completed</p>
                  <h2 className="mt-2 text-3xl font-bold text-green-600">
                    84
                  </h2>
                </div>

                <div className="rounded-xl bg-yellow-50 p-5">
                  <p className="text-sm text-gray-500">Pending</p>
                  <h2 className="mt-2 text-3xl font-bold text-yellow-600">
                    31
                  </h2>
                </div>

                <div className="rounded-xl bg-red-50 p-5">
                  <p className="text-sm text-gray-500">High Priority</p>
                  <h2 className="mt-2 text-3xl font-bold text-red-600">13</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900">
              Why Choose Mini CRM?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Everything you need to organize your workflow, manage tasks, and
              improve team productivity.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="rounded-2xl border bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100">
                    <Icon className="h-7 w-7 text-blue-600" />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-gray-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
