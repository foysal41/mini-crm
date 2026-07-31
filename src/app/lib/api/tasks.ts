const serverBaseUrl = process.env.NEXT_PUBLIC_SERVER_URI;

export const getTasks = async (
  search = "",
  page = 1
) => {
  const res = await fetch(
    `${serverBaseUrl}/api/tasks?search=${encodeURIComponent(search)}&page=${page}&limit=5`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch tasks");
  }

  return res.json();
};













// const serverBaseUrl = process.env.NEXT_PUBLIC_SERVER_URI;

// export const getTasks = async (search = "",) => {
//   const res = await fetch(
//     `${serverBaseUrl}/api/tasks?search=${search}`,
//     {
//       cache: "no-store",
//     }
//   );

//   const data = await res.json();

// //   console.log(data);

//   return data;
// };