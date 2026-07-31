"use client";

import { ArrowUp } from "@gravity-ui/icons";
import type { ComponentType, SVGProps } from "react";

export interface DashboardCardItem {
  title: string;
  value: string | number;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  color: string;
  growth: string;
}

interface DashboardCardProps {
  data: DashboardCardItem[];
}

const DashboardCard = ({ data }: DashboardCardProps) => {
  return (
    <section className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {data.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-500">{card.title}</p>

                <h2 className="mt-2 text-3xl font-bold text-gray-900">
                  {card.value}
                </h2>
              </div>

              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl ${card.color}`}
              >
                <Icon className="h-6 w-6" />
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2">
              <ArrowUp className="h-4 w-4 text-green-500" />

              <span className="text-sm font-medium text-green-600">
                {card.growth}
              </span>

              <span className="text-sm text-gray-400">
                vs last month
              </span>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default DashboardCard;