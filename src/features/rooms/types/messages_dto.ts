export interface MessageContent {
    msgtype?: string
    url?: string
    body?: string
    name?: string
    format?: string
    formatted_body?: string
}

export default interface MessageDto {
    content?: MessageContent
    event_id?: string
    origin_server_ts?: number
    room_id?: string
    sender?: string
    type?: string
}
