import { AxiosError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";

interface Props {
    request: Promise<AxiosResponse>,
}

export default function useRequestHook<ResponseType>(props: Props | undefined) {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState<ResponseType | null>(null)
    const [error, setError] = useState<any | null>(null)

    useEffect(() => {
        
        if (props) {
            call(props)
        }
    }, [])

    function call(p: Props) {
        if (loading == true){
            return 0
        }
        setLoading(true)
        p.request.then(async (data) => {
            setData(data.data)
        }).catch((e: AxiosError) => setError(e.response)).finally(() => {
            setLoading(false)
        })
    }

    return { loading, data, error, call }
}