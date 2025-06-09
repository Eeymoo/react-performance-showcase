import { Button, Dropdown, Segmented, Slider, Space } from "antd";
import type { MenuProps } from "antd";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import Operation from "./components/Operation";
import type { OperationItemsProps } from "./components/Operation";

function OperationPage() {
  const [width, setWidth] = useState<number>(100);
  const [overflow, setOverflow] = useState<boolean>(true);
  const [isRender, setIsRender] = useState<boolean>(false);
  const [isOverflowRender, setIsOverflowRender] =
    useState<boolean>(false);
  const [render, setRender] = useState<
    | undefined
    | ((items: OperationItemsProps[]) => ReactNode)
  >(undefined);
  const [overflowRender, setOverflowRender] = useState<
    | undefined
    | ((items: OperationItemsProps[]) => ReactNode)
  >(undefined);

  useEffect(() => {
    if (!isRender) {
      setRender(undefined);
    } else {
      setRender(() => (items: OperationItemsProps[]) => {
        return (
          <>
            {items.map((item) => {
              return (
                <Button
                  type="link"
                  key={`Operation-${item.key}`}
                  disabled={item.disabled}
                  onClick={item.onClick}
                >
                  {item.label}
                </Button>
              );
            })}
          </>
        );
      });
    }
    if (!isOverflowRender) {
      setOverflowRender(undefined);
    } else {
      setOverflowRender(
        () =>
          (
            items: OperationItemsProps[],
          ) => {
            return (
                <Dropdown menu={{ items: items as MenuProps['items'] }}>
                  <Button type="link">More</Button>
                </Dropdown>
            );
          }
      );
    }
  }, [isRender, isOverflowRender]);

  return (
    <div>
      <Space direction="vertical" style={{ width: `100%` }}>
        Width 容器宽度:
        <Slider defaultValue={100} onChange={(value) => setWidth(value)} />
        Overflow 自动收缩:
        <Segmented
          options={[
            { label: "true", value: true },
            { label: "false", value: false },
          ]}
          value={overflow}
          onChange={(value) => setOverflow(value)}
        />
        Overflow 自定义Item渲染:
        <Segmented
          options={[
            { label: "true", value: true },
            { label: "false", value: false },
          ]}
          value={isRender}
          onChange={(value) => setIsRender(value)}
        />
        Overflow 自定义更多渲染:
        <Segmented
          options={[
            { label: "true", value: true },
            { label: "false", value: false },
          ]}
          value={isOverflowRender}
          onChange={(value) => setIsOverflowRender(value)}
        />
      </Space>
      <Space
        direction="vertical"
        style={{ width: `${width}%` }}
        className="bg-stone-100"
        size={24}
      >
        <Operation
          render={render}
          overflowRender={overflowRender}
          overflow={overflow}
          items={[
            {
              label: "新增",
              key: "add",
              icon: "➕",
              onClick: () => alert("新增操作"),
            },
            {
              label: "编辑",
              key: "edit",
              icon: "✏️",
              onClick: () => alert("编辑操作"),
            },
            {
              label: "删除",
              key: "delete",
              icon: "🗑️",
              onClick: () => alert("删除操作"),
            },
            {
              label: "查看",
              key: "view",
              icon: "👁️",
              onClick: () => alert("查看操作"),
            },
            {
              label: "下载",
              key: "download",
              icon: "⬇️",
              onClick: () => alert("下载操作"),
            },
            {
              label: "分享",
              key: "share",
              icon: "🔗",
              onClick: () => alert("分享操作"),
            },
          ]}
        />
        <Operation
          render={render}
          overflowRender={overflowRender}
          overflow={overflow}
          items={[
            {
              label: "新增",
              key: "add",
              icon: "➕",
              onClick: () => alert("新增操作"),
            },
            {
              label: "编辑",
              key: "edit",
              icon: "✏️",
              onClick: () => alert("编辑操作"),
            },
            {
              label: "删除",
              key: "delete",
              icon: "🗑️",
              onClick: () => alert("删除操作"),
            },
            {
              label: "查看",
              key: "view",
              icon: "👁️",
              onClick: () => alert("查看操作"),
            },
            {
              label: "下载",
              key: "download",
              icon: "⬇️",
              onClick: () => alert("下载操作"),
            },
            {
              label: "分享",
              key: "share",
              icon: "🔗",
              onClick: () => alert("分享操作"),
            },
          ]}
          maxLength={3}
        />
        <Operation
          render={render}
          overflowRender={overflowRender}
          overflow={overflow}
          items={[
            {
              label: "新增",
              key: "add",
              icon: "➕",
              onClick: () => alert("新增操作"),
            },
            {
              label: "编辑",
              key: "edit",
              icon: "✏️",
              onClick: () => alert("编辑操作"),
            },
            {
              label: "删除",
              key: "delete",
              icon: "🗑️",
              onClick: () => alert("删除操作"),
            },
            {
              label: "查看",
              key: "view",
              icon: "👁️",
              onClick: () => alert("查看操作"),
            },
            {
              label: "下载",
              key: "download",
              icon: "⬇️",
              onClick: () => alert("下载操作"),
            },
            {
              label: "分享",
              key: "share",
              icon: "🔗",
              onClick: () => alert("分享操作"),
            },
          ]}
          maxLength={3}
        />
      </Space>
    </div>
  );
}

export default OperationPage;
