import { Flex, Table } from "antd";
import useRequestHook from "../core/network/useRequestHook";
import { getUsers } from "../features/users/requests";
import UserDto from "../features/users/types/user_dto";
import { Link } from "react-router-dom";

const columns = [
    {
        title: 'user ID',
        dataIndex: 'id',
        render: (_:any) => {
            return <Link to={"/dashboard/users/" + _}>{_}</Link>
        },
        key: 'id',
    },
    {
        title: 'display name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'is Admin',
        dataIndex: 'is_admin',
        key: 'is_admin',
    },
    {
        title: 'created at',
        dataIndex: 'time',
        key: 'time',
    },
];

export default function UsersPage() {
    const { loading, data } = useRequestHook<{ users: UserDto[] }>({
        request: getUsers()
    })

    return <>
        <h2 className="mb-4">بخش کاربران</h2>
        <Flex vertical>
            <Table pagination={{
            totalBoundaryShowSizeChanger:20
            }} dataSource={loading ? [] : data?.users.map((item, index:number) => (
                {
                    key: index,
                    id: String(item.name),
                    name: item.displayname,
                    is_admin: item.admin ? "yes" : "no",
                    time: item.creation_ts,
                }
            ))} columns={columns} />;
        </Flex>
    </>
}