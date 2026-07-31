import { CreateTask } from "@/types/createTask";

const serverBaseUrl = process.env.NEXT_PUBLIC_SERVER_URI;

export const getTasks = async ( search: string = ""): Promise<CreateTask[]> => {
  const res = await fetch( `${serverBaseUrl}/api/tasks?search=${encodeURIComponent(search)}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch tasks");
  }

  return res.json();
};