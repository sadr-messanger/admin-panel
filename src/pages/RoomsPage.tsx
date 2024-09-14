import { Flex, Table } from "antd";
import useRequestHook from "../core/network/useRequestHook";
import { Link } from "react-router-dom";
import { getRooms } from "../features/rooms/requests";
import RoomDto from "../features/rooms/types/room_dto";

const columns = [
    {
        title: 'user ID',
        dataIndex: 'id',
        render: (_:any) => {
            return <Link to={"/dashboard/rooms/" + _}>{_}</Link>
        },
        key: 'id',
    },
    {
        title: 'private',
        dataIndex: 'private',
        key: 'private',
    },
    {
        title: 'members',
        dataIndex: 'member',
        key: 'member',
    }
];

export default function RoomsPage() {
    const { loading, data } = useRequestHook<{ rooms: RoomDto[] }>({
        request: getRooms()
    })

    return <>
        <h2 className="mb-4">اتاق‌های کاربران </h2>
        <Flex vertical>
            <Table pagination={{
            totalBoundaryShowSizeChanger:20
            }} dataSource={loading ? [] : data?.rooms.map((item, index:number) => (
                {
                    key: index,
                    id: String(item.room_id),
                    private: item.encryption != null ? "true" : "false",
                    member: item.joined_members,
                }
            ))} columns={columns} />;
        </Flex>
    </>
}