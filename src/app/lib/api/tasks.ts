import { CreateTask } from "@/types/createTask"

const serverBaseUrl = process.env.SERVER_URI

export const getTasks = async():Promise<CreateTask[]>=>{
    const res = await fetch(`${serverBaseUrl}/api/tasks` , {
        cache:'no-cache',

    })
    // console.log("Get task status", res)
    return res.json()
}