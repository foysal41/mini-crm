const serverBaseUrl = process.env.NEXT_PUBLIC_SERVER_URI;

export const deleteTask = async (id: string) => {
  const res = await fetch(`${serverBaseUrl}/api/tasks/${id}`, {
    method: "DELETE",
    cache: "no-cache",
  });

//   console.log("Status:", res.status);
// console.log("OK:", res.ok);

  if (!res.ok) {
    throw new Error("Failed to delete task");
  }

  return res.json();
};