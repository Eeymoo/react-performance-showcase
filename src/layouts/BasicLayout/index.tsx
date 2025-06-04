import type { FC } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Layout, Menu, theme } from "antd";

const { Sider, Content } = Layout;

const menuItems = [
  { key: "/diff", label: "Diff 差异展示" },
  { key: "/operation", label: "Operation 操作列" },
  // 可以继续添加其他菜单项
];

const BasicLayout: FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const location = useLocation();
  const navigate = useNavigate();

  // 处理菜单点击跳转
  const onMenuClick = (e: { key: string }) => {
    navigate(e.key);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        width={220}
        style={{
          background: colorBgContainer,
        }}
      >
        <div className="h-16 flex items-center justify-center">
          Showcase
        </div>
        <Menu
          mode="inline"
          selectedKeys={[location.pathname]}
          items={menuItems}
          style={{ borderRight: 0 }}
          onClick={onMenuClick}
        />
      </Sider>

      <Content
        style={{
          margin: 24,
          padding: 24,
          background: colorBgContainer,
          borderRadius: 8,
          maxHeight: "calc(100vh - 48px)",
          overflow: "auto",
        }}
      >
        <Outlet />
      </Content>
    </Layout>
  );
};

export default BasicLayout;
