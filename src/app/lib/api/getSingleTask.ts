export const getSingleTask = async (id: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/api/tasks/${id}`, {
    cache: "no-store",
  });

  console.log(res)

  if (!res.ok) {
    throw new Error("Failed to fetch task");
  }

  return res.json();
};