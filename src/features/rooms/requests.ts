import client from "../../core/network/axios";
import { BASE_URL } from "../../core/utils/app_constant";

export async function getRooms() {
    const request = await client.get(`${BASE_URL}/_synapse/admin/v1/rooms?dir=f&from=0&limit=10&order_by=name`)
    return request
}

export async function getRoomInformation(id: string) {
    const request = await client.get(`${BASE_URL}/_synapse/admin/v1/rooms/${id}`)
    return request
}

export async function getRoomMembers(id: string) {
    const request = await client.get(`${BASE_URL}/_synapse/admin/v1/rooms/${id}/members?dir=b&from=0&limit=1000&order_by=id`)
    return request
}

export async function getRoomMessages(id: string, last_event_id: string | undefined) {
    const request = await client.get(`${BASE_URL}/_synapse/admin/v1/rooms/${id}/messages?limit=100${last_event_id ? "&from="+last_event_id : ""}`)
    return request
}