import { Layout, Menu, MenuProps } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
const { Header, Content, Sider } = Layout;

export default function AppLayout() {
    const navigator = useNavigate()

    const navbar = [
        {
            key: "home",
            label: `بازگشت به صفحه اصلی`,
            onClick: () => {
                navigator("/dashboard")
            }
        }
    ]


    const items2: MenuProps['items'] = [
        {
            key: `platform`,
            label: `پلتفرم`,

            children: [
                {
                    key: "users",
                    label: "کاربران",
                    onClick: () => {
                        navigator("/dashboard/users")
                    }
                },
                {
                    key: "rooms",
                    label: "اتاق‌ها",
                    onClick: () => {
                        navigator("/dashboard/rooms")
                    }
                }
            ],
        }
    ]

    return <>
        <Layout className="h-full">
            <Header style={{ display: 'flex', alignItems: 'center' }}>
                <div className="demo-logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    items={navbar}
                    style={{ flex: 1, minWidth: 0 }}
                />
            </Header>
            <Content style={{ padding: '0 48px' }}>
                <Layout className="mt-4"
                    style={{ padding: '24px 0', background: "white", borderRadius: "12px" }}
                >
                    <Sider style={{ background: "white" }} width={200}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%' }}
                            items={items2}
                        />
                    </Sider>
                    <Content style={{ padding: '0 24px', minHeight: 280 }}>
                        <Outlet />
                    </Content>
                </Layout>
            </Content>
            {/* <Footer style={{ textAlign: 'center' }}>
                Ant Design ©{new Date().getFullYear()} Created by Ant UED
            </Footer> */}
        </Layout></>
}