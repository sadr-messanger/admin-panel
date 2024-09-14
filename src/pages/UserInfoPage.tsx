import { useParams } from "react-router-dom"
import useRequestHook from "../core/network/useRequestHook"
import { getUserInformation } from "../features/users/requests"
import UserDto from "../features/users/types/user_dto"
import { Button, Flex, Form, Input, Spin, Switch } from "antd"


const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
    },
};

export default function UserInfoPage() {
    const { id } = useParams()

    const { loading, data } = useRequestHook<UserDto>({
        request: getUserInformation(id ?? "")
    })



    const onFormVariantChange = (changedValues: any, values: any) => {
        console.log(changedValues, values)
    };

    return <>
        <h2 className="mb-4">بخش کاربران</h2>
        <Flex vertical>
            {loading ? <Spin /> : <Form
                onSubmitCapture={(e) => {
                    console.log(e)
                }}
                {...formItemLayout}
                onValuesChange={onFormVariantChange}
                // variant={componentVariant}
                style={{ maxWidth: 600 }}
            // initialValues={{ variant: componentVariant }}
            >
                <Form.Item
                    label="تصویر پروفایل"
                    name="تصویر پروفایل"
                    rules={[{ required: true, message: 'Please input!' }]}
                    initialValue={data?.avatar_url}
                >
                    <Input />
                </Form.Item>

                <Form.Item label="نام کاربری" name="username" rules={[{ required: true, message: 'Please input!' }]} initialValue={data?.name}>
                    <Input />
                </Form.Item>

                <Form.Item
                    label="نام نمایشی"
                    name="نام نمایشی"
                    rules={[{ required: true, message: 'Please input!' }]}
                    initialValue={data?.displayname}
                >
                    <Input style={{ width: '100%' }} />
                </Form.Item>

                <Form.Item label="دسترسی مدیریت" valuePropName="admin" initialValue={data?.admin}>
                    <Switch defaultChecked={data?.admin} />
                </Form.Item>

                <Form.Item label="ورود با SSO" valuePropName="external_ids" >
                    <Switch defaultChecked={data?.external_ids ? true : false} />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        بروزرسانی اطلاعات
                    </Button>
                </Form.Item>
            </Form>}
        </Flex>
    </>
}