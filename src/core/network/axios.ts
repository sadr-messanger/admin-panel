import axios from "axios";

const client = axios

client.interceptors.request.use((value) => {
    localStorage.getItem("access_token") && value.headers.set("Authorization", `Bearer ${localStorage.getItem("access_token") }`)
    return value;
})

export default client;