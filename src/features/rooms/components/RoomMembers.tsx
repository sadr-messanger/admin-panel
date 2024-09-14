import { Link, useParams } from "react-router-dom"
import useRequestHook from "../../../core/network/useRequestHook"
import { getRoomMembers } from "../requests"
import { Table } from "antd";

const columns = [
    {
        title: 'index',
        dataIndex: 'index',
        key: 'index',
    },
    {
        title: 'user',
        dataIndex: 'user',
        render: (_:any) => {
            return <Link to={"/dashboard/users/"+_}>{_}</Link>
        },
        key: 'user',
    }
];
export default function RoomMembers() {
    const {id} = useParams()

    const {loading,data} = useRequestHook<{members: string[]}>({request: getRoomMembers(id!)})

    return <>
    <Table columns={columns} dataSource={loading ? [] : data?.members.map((name, index) => ({
        key: index,
        index: index,
        user: name
    }))} />
    </>
}