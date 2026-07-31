"use server";

import { CreateTask } from "@/types/createTask";
import { serverMutation } from "../core/server";

export const createTask = async (newTaskData: CreateTask) => {
  return serverMutation("/api/tasks", newTaskData);
};


// export const createTask = async(newTaskData:CreateTask) => {
//     const res = await fetch(`${serverBaseUrl}/api/tasks`, {
//         method: "POST",
//         headers: {
//             'Content-Type' : 'application/json',
//         },
//         body:JSON.stringify(newTaskData),
//     })

//     return res.json()
// }