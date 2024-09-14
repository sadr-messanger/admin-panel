import client from "../../network/axios";

function makeid(length:number) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}

export async function login(username: string, password: string) {
    const req = await client.post(`${import.meta.env.VITE_API_URL}/_matrix/client/r0/login`, { 
        "device_id": makeid(10), 
        "initial_device_display_name": "Synapse Admin", 
        "type": "m.login.password", 
        "user": username, 
        "password": password 
    })

    if (req.status == 200) {
        localStorage.setItem("user_id", req.data["user_id"])
        localStorage.setItem("device_id", req.data["device_id"])
        localStorage.setItem("access_token", req.data["access_token"])
    }

    return req
}