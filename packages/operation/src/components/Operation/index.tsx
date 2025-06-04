import { Button, Dropdown, Space } from "antd";
import React, { useEffect, useRef, useState } from "react";
import "./index.css"; // Assuming you have a CSS file for styles

export interface OperationItemsProps {
  label: string;
  key: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}
export interface OperationProps {
  maxLength?: number;
  items: OperationItemsProps[];
  overflow?: boolean;
  overflowRender?: (
    items: OperationItemsProps[],
    hash?: string
  ) => React.ReactNode;
  render?: (items: OperationItemsProps[], hash?: string) => React.ReactNode;
}

const defaultRender = (
  items: OperationItemsProps[],
  hash = Math.random().toString(36).substring(2, 15)
) => {
  return (
    <>
      {items.map((item) => {
        return (
          <Button
            type="link"
            key={`Operation-${hash}-${item.key}`}
            icon={item.icon}
            disabled={item.disabled}
            onClick={item.onClick}
          >
            {item.label}
          </Button>
        );
      })}
    </>
  );
};
const defaultOverflowRender = (
  items: OperationItemsProps[],
  hash = Math.random().toString(36).substring(2, 15)
) => {
  return (
    <>
      <Dropdown menu={{ items }}>
        <Button type="link">更多</Button>
      </Dropdown>
    </>
  );
};

const Operation: React.FC<OperationProps> = ({
  maxLength = Infinity,
  items = [],
  overflow = false,
  overflowRender = defaultOverflowRender,
  render = defaultRender,
}) => {
  const [visibleCount, setVisibleCount] = useState<number>(maxLength);
  const [renderItems, setRenderItems] = useState<OperationItemsProps[]>([]);
  const operationRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [overflowItems, setOverflowItems] = useState<OperationItemsProps[]>([]);

  useEffect(() => {
    const max = visibleCount > maxLength ? maxLength : visibleCount;
    if (items.length > max) {
      const renderItems = items.slice(0, max);
      const overflowItems = items.slice(max);
      console.log(
        `Items: ${items.length}, Render Items: ${renderItems.length}, Overflow Items: ${overflowItems.length}`
      );
      setRenderItems(renderItems);
      setOverflowItems(overflowItems);
    } else {
      setRenderItems(items);
      setOverflowItems([]);
    }
  }, [items, maxLength, visibleCount]);

  // 计算可见按钮数量
  const calculateVisibleCount = (container, content) => {
    const containerWidth = container.clientWidth;
    const itemWidths = Array.from(content.childNodes).map((item) => {
      if (item instanceof HTMLElement) {
        return item.offsetWidth;
      }
      return 0;
    });
    const moreWidth = itemWidths.pop() || 0;
    console.log(
      `Container Width: ${containerWidth}, Item Widths: ${itemWidths}, More Width: ${moreWidth}`
    );
    let totalWidth = 0;
    let visibleCount = 0;
    for (let i = 0; i < itemWidths.length; i++) {
      totalWidth += itemWidths[i];
      if (totalWidth + moreWidth > containerWidth) {
        break;
      }
      visibleCount++;
    }
    return visibleCount;
  };

  useEffect(() => {
    if (!overflow) {
      return
    }
    const resizeObserver = new ResizeObserver(() => {
      if (operationRef.current && containerRef.current) {
        const visibleCount = calculateVisibleCount(
          containerRef.current,
          operationRef.current
        );
        console.log(`Resize - Visible Count: ${visibleCount}`);
        setVisibleCount(visibleCount);
      }
    });

    if (operationRef.current && containerRef.current) {
      // 监听容器尺寸变化
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [items, operationRef, containerRef, overflow]);

  return (
    <div className="operation-container" ref={containerRef}>
      <div
        className="operation-content"
        ref={operationRef}
        style={{
          position: "relative",
          top: 999999,
          left: 999999,
          width: 1,
          height: 1,
          overflow: "hidden",
        }}
      >
        {render(items)}
        <span className="operation-item operation-item-move">
          {overflowRender([])}
        </span>
      </div>
      <div className="operation-content">
        {render(renderItems)}
        <span className="operation-item operation-item-move" style={{ display: overflowItems.length > 0 ? 'inline-block' : 'none' }}>
          {overflowRender(overflowItems)}
        </span>
      </div>
    </div>
  );
};

export default Operation;
