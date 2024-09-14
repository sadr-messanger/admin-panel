import client from "../../core/network/axios";
import { BASE_URL } from "../../core/utils/app_constant";

export async function getUsers() {
    const request = await client.get(`${BASE_URL}/_synapse/admin/v2/users?deactivated=false&dir=f&from=0&guests=true&limit=10000&order_by=name`)
    return request
}

export async function getUserInformation(id: string) {
    const request = await client.get(`${BASE_URL}/_synapse/admin/v2/users/${id}`)
    return request
}

export async function getUserRooms(id: string) {
    const request = await client.get(`${BASE_URL}/_synapse/admin/v2/users/${id}/joined_rooms?dir=b&from=0&limit=25&order_by=id`)
    return request
}

export async function getUserMedias(id: string) {
    const request = await client.get(`${BASE_URL}/_synapse/admin/v2/users/${id}/media?dir=b&from=0&limit=50&order_by=created_ts`)
    return request
}