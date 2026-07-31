const serverBaseUrl = process.env.SERVER_URI ?? "";

export const serverMutation = async (path:string, data:unknown)=> {
    const res = await fetch(`${serverBaseUrl}${path}` , {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',
        },
        body:JSON.stringify(data)
    })



    return res.json()
}