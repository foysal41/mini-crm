'use server'

import { CreateTask } from "@/types/createTask"

const serverBaseUrl = process.env.SERVER_URI
export const createTask = async(newTaskData:CreateTask) => {
    const res = await fetch(`${serverBaseUrl}/api/tasks`, {
        method: "POST",
        headers: {
            'Content-Type' : 'application/json',
        },
        body:JSON.stringify(newTaskData),
    })

    return res.json()
}