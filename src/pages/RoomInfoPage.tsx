import { useParams } from "react-router-dom"
import useRequestHook from "../core/network/useRequestHook"
import { Flex, Spin, Tabs } from "antd"
import { getRoomInformation } from "../features/rooms/requests"
import RoomDto from "../features/rooms/types/room_dto"
import RoomMembers from "../features/rooms/components/RoomMembers"
import RoomMessages from "../features/rooms/components/RoomMessages"

export default function RoomInfoPage() {
    const { id } = useParams()

    const { loading, data } = useRequestHook<RoomDto>({
        request: getRoomInformation(id ?? "")
    })

    const Information = () => loading ? <Spin /> : <>
        <table>
            <tbody>
                <tr className="my-2 h-[32px]">
                    <td>نام اتاق:</td>
                    <td>{data?.room_id}</td>
                </tr>
                <tr className="my-2 h-[32px]">
                    <td>تعداد کاربران اتاق:</td>
                    <td>{data?.joined_members}</td>
                </tr>
                <tr className="my-2 h-[32px]">
                    <td>سازنده اتاق:</td>
                    <td>{data?.creator}</td>
                </tr>
            </tbody>
        </table>
    </>


    return <>
        <Flex vertical>
            <Tabs
                defaultActiveKey="1"
                type="card"
                size={"middle"}
                items={[
                    {
                        label: `مشخصات اتاق`,
                        key: "1",
                        children: <Information />,
                    },
                    {
                        label: `کاربران اتاق`,
                        key: "2",
                        children: <RoomMembers />,
                    },
                    {
                        label: `پیام‌های اتاق`,
                        key: "3",
                        children: <RoomMessages />,
                    },
                ]}
            />
        </Flex>
    </>
}