import { Button, Card, Input, Spin } from "antd"
import { useEffect, useRef } from "react"
import { login } from "../core/data/api/requests"
import useRequestHook from "../core/network/useRequestHook"

export default function LoginPage() {
    const username = useRef("")
    const password = useRef("")
    const { loading, data, error, call } = useRequestHook(undefined)

    useEffect(() => {
        if (data) {
            location.replace("/dashboard")
        }
    }, [data])

    return <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <Card title="ورود به پنل ادمین" bordered={false} style={{ maxWidth: 500, width: "100%" }}>
            <p className="mb-2">نام کاربری</p>
            <Input onChange={e => username.current = e.currentTarget.value} title="username" />
            <p className="mt-4 mb-2">رمز ورود</p>
            <Input type="password" onChange={e => password.current = e.currentTarget.value} title="password" />
            {error && error["data"]["error"]}
            <Button type="primary" className="w-full mt-4" onClick={() => {
                call({ request: login(username.current, password.current) })
            }}>{loading ? <Spin /> : "ورود به حساب کاربری"}</Button>
        </Card>
    </div>
}