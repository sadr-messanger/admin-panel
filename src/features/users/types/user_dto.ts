export default interface UserDto {
    name: string
    user_type: string | null
    is_guest: boolean
    admin: boolean
    deactivated: boolean
    shadow_banned: boolean
    displayname: string
    avatar_url: string | null
    creation_ts: number
    approved: boolean
    external_ids: any
    erased: boolean
    last_seen_ts: number
    locked: boolean
}