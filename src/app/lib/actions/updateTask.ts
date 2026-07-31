const serverBaseUrl = process.env.NEXT_PUBLIC_SERVER_URI;

export const updateTask = async (
  id: string,
  updatedTask: Record<string, unknown>
) => {
  const res = await fetch(`${serverBaseUrl}/api/tasks/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedTask),
  });

  if (!res.ok) {
    throw new Error("Failed to update task");
  }

  return res.json();
};