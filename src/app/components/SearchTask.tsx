"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchTask() {
  const router = useRouter();

  const [search, setSearch] = useState("");

  return (
    <div className="mb-6 flex gap-3">
      <input
        type="text"
        placeholder="Search task..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-80 rounded-lg border border-gray-300 px-4 py-2"
      />

      <button
        onClick={() =>
          router.push(
            `/dashboard/admin/tasks?search=${encodeURIComponent(search)}`
          )
        }
        className="rounded-lg bg-blue-600 px-5 py-2 text-white"
      >
        Search
      </button>
    </div>
  );
}