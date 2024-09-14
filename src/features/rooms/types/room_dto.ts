export default interface RoomDto {
    room_id: string | null
    name: string | null
    canonical_alias: string | null
    joined_members: number | null
    joined_local_members: number | null
    version: string | null
    creator: string | null
    encryption: string | null
    federatable: boolean | null
    public: boolean | null
    join_rules: string | null
    guest_access: string | null
    history_visibility: string | null
    state_events: number | null
    room_type: string | null
    avatar: string | null
    topic: string | null
    joined_local_devices: number | null
}