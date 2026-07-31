"use client";

import { useRouter } from "next/navigation";

interface Props {
  currentPage: number;
  totalPages: number;
  search: string;
}

export default function Pagination({
  currentPage,
  totalPages,
  search,
}: Props) {
  const router = useRouter();

  return (
    <div className="mt-6 flex justify-center gap-2">
      <button
        disabled={currentPage === 1}
        onClick={() =>
          router.push(
            `/dashboard/admin/tasks?page=${currentPage - 1}&search=${search}`
          )
        }
        className="rounded border px-4 py-2 disabled:opacity-50"
      >
        Previous
      </button>

      {Array.from({ length: totalPages }).map((_, index) => (
        <button
          key={index}
          onClick={() =>
            router.push(
              `/dashboard/admin/tasks?page=${index + 1}&search=${search}`
            )
          }
          className={`rounded px-4 py-2 ${
            currentPage === index + 1
              ? "bg-blue-600 text-white"
              : "border"
          }`}
        >
          {index + 1}
        </button>
      ))}

      <button
        disabled={currentPage === totalPages}
        onClick={() =>
          router.push(
            `/dashboard/admin/tasks?page=${currentPage + 1}&search=${search}`
          )
        }
        className="rounded border px-4 py-2 disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}