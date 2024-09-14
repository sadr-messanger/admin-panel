import { useParams } from "react-router-dom"
import useRequestHook from "../../../core/network/useRequestHook"
import { getRoomMessages } from "../requests"
import { Flex, Spin } from "antd";
import MessageDto from "../types/messages_dto";

export default function RoomMessages() {
    const { id } = useParams()

    const { loading, data } = useRequestHook<{ chunk: MessageDto[] }>({ request: getRoomMessages(id!, undefined) })

    return <>
        <Flex vertical gap={2} className="h-[60vh] overflow-auto	">
            {loading ? <Spin /> : data?.chunk.map((item, index) => <div key={index} className="p-3 bg-slate-300 w-full">
                {item.type === "m.room.encrypted" ? "پیام از نوع رمزنگاری شده میباشد" : item.content?.body}
                {item.content?.msgtype ? item.content.body : item.content?.name}
            </div>)}
        </Flex>
    </>
}