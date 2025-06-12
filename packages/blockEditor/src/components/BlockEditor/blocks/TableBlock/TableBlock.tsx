import { useEffect, useState, useRef } from "react";
import type { BlockPropsType } from "../..";
import { Input } from "antd";
import { PlusCircleOutlined, MinusCircleOutlined } from "@ant-design/icons";

// 单元格类型
type Cell = {
  content: { type: "label" | "input"; value: string }[];
  rowSpan?: number;
  colSpan?: number;
} | null;

type TableData = Cell[][];

// 默认 4 行 3 列空表格
const DEFAULT_TABLE: TableData = Array.from({ length: 4 }, () =>
  Array.from({ length: 3 }, () => ({
    content: [],
    rowSpan: 1,
    colSpan: 1,
  }))
);

// 工具函数：安全获取 TableData
function parseTableData(raw: any): TableData {
  if (!raw) return DEFAULT_TABLE;
  if (Array.isArray(raw)) return raw;
  if (typeof raw === "string") {
    try {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) return parsed;
    } catch {
      return DEFAULT_TABLE;
    }
  }
  return DEFAULT_TABLE;
}

export const TableBlock: React.FC<BlockPropsType> = ({
  content,
  onChange,
  readOnly,
  id,
}) => {
  // 初始化表格数据
  const [tableData, setTableData] = useState<TableData>(
    parseTableData(content.content)
  );

  // 同步外部 content
  useEffect(() => {
    setTableData(parseTableData(content.content));
  }, [content.content]);

  // 节流更新
  useEffect(() => {
    const handler = setTimeout(() => {
      // 修复类型不匹配
      // 假设 content.content 是 string，tableData 是对象
      if (JSON.stringify(content.content) === JSON.stringify(tableData)) return;
      onChange?.({ ...content, content: JSON.stringify(tableData) });
    }, 300);
    return () => clearTimeout(handler);
  }, [tableData, onChange, content]);

  // 单元格内容变化
  const handleCellContentChange = (
    rowIdx: number,
    colIdx: number,
    contentIdx: number,
    value: string
  ) => {
    setTableData((prev) =>
      prev.map((row, r) =>
        row.map((cell, c) => {
          if (r === rowIdx && c === colIdx && cell) {
            const updatedContent = cell.content.map((item, i) =>
              i === contentIdx ? { ...item, value } : item
            );
            return { ...cell, content: updatedContent };
          }
          return cell;
        })
      )
    );
  };

  // 删除行
  const removeRow = (rowIdx: number) => {
    setTableData((prev) =>
      prev.length > 1 ? prev.filter((_, idx) => idx !== rowIdx) : prev
    );
  };

  // 添加列
  const addCol = (colIdx: number) => {
    setTableData((prev) =>
      prev.map((row) => [
        ...row.slice(0, colIdx + 1),
        {
          content: [],
          rowSpan: 1,
          colSpan: 1,
        },
        ...row.slice(colIdx + 1),
      ])
    );
  };

  // 删除列
  const removeCol = (colIdx: number) => {
    setTableData((prev) =>
      prev[0].length > 1
        ? prev.map((row) => row.filter((_, idx) => idx !== colIdx))
        : prev
    );
  };

  // 行引用
  const rowRefs = useRef<(HTMLTableRowElement | null)[]>([]);

  return (
    <div className="table-block" id={id} style={{ position: "relative" }}>
      <style>
        {`
          .table-block .cell-action {
            opacity: 0;
            transition: opacity 0.2s;
            pointer-events: none;
          }
          .table-block:hover .cell-action {
            opacity: 1;
            pointer-events: auto;
          }
          .table-block .table-ops-col,
          .table-block .table-ops-row {
            opacity: 0;
            transition: opacity 0.2s;
            pointer-events: none;
          }
          .table-block:hover .table-ops-col,
          .table-block:hover .table-ops-row {
            opacity: 1;
            pointer-events: auto;
          }
        `}
      </style>
      <div style={{ position: "relative", display: "inline-block", width: "100%" }}>
        <table style={{ borderCollapse: "collapse", width: "100%" }}>
          <thead>
            {!readOnly && Array.isArray(tableData[0]) && (
              <tr>
                {tableData[0].map((_, colIdx) => (
                  <th
                    key={colIdx}
                    style={{
                      padding: 0,
                      border: "none",
                      background: "transparent",
                    }}
                  >
                    <div
                      className="table-ops-col"
                      style={{
                        display: "flex",
                        justifyContent: "end",
                      }}
                    >
                      <PlusCircleOutlined
                        style={{
                          color: "#0064ff",
                          fontSize: 16,
                          marginRight: 4,
                          cursor: "pointer",
                        }}
                        onClick={() => addCol(colIdx)}
                      />
                      {tableData[0].length > 1 && (
                        <MinusCircleOutlined
                          style={{
                            color: "#0064ff",
                            fontSize: 16,
                            cursor: "pointer",
                          }}
                          onClick={() => removeCol(colIdx)}
                        />
                      )}
                    </div>
                  </th>
                ))}
                {/* 占位，和行操作按钮对齐 */}
                <th
                  style={{
                    border: "none",
                    background: "transparent",
                  }}
                />
              </tr>
            )}
          </thead>
          <tbody>
            {Array.isArray(tableData) &&
              tableData.map((row, rowIdx) => (
                <tr
                  key={rowIdx}
                  ref={(el) => {
                    rowRefs.current[rowIdx] = el;
                  }}
                  style={{ position: "relative" }}
                >
                  {Array.isArray(row) &&
                    row.map((cell, colIdx) => {
                      if (!cell) return null;
                      return (
                        <td
                          key={colIdx}
                          rowSpan={cell.rowSpan ?? 1}
                          colSpan={cell.colSpan ?? 1}
                          style={{
                            border: "1px solid #E5E5E5",
                            padding: 4,
                            minWidth: 80,
                            verticalAlign: "top",
                            minHeight: 40,
                            height: 40,
                          }}
                        >
                          <div>
                            {cell.content.length === 0 ? (
                              <Input.TextArea
                                autoSize={{ minRows: 1, maxRows: Infinity }}
                                value={""}
                                readOnly={readOnly}
                                variant="borderless"
                                style={{
                                  resize: "none",
                                  width: "100%",
                                  boxSizing: "border-box",
                                  padding: 0,
                                  minHeight: 40,
                                  height: 40,
                                }}
                                onChange={
                                  readOnly
                                    ? undefined
                                    : (e) =>
                                        setTableData((prev) =>
                                          prev.map((row, r) =>
                                            row.map((cell, c) =>
                                              r === rowIdx && c === colIdx && cell
                                                ? {
                                                    ...cell,
                                                    content: [
                                                      { type: "input", value: e.target.value },
                                                    ],
                                                  }
                                                : cell
                                            )
                                          )
                                        )
                                }
                              />
                            ) : (
                              cell.content.map((item, idx) => (
                                <div key={idx} style={{ marginBottom: 4 }}>
                                  {item.type === "label" && (
                                    <div style={{ fontSize: 12, color: "#888", whiteSpace: "pre-wrap", wordBreak: "break-all" }}>
                                      {item.value}
                                    </div>
                                  )}
                                  {item.type === "input" && (
                                    <Input.TextArea
                                      autoSize={{ minRows: 1, maxRows: Infinity }}
                                      value={item.value}
                                      readOnly={readOnly}
                                      variant="borderless"
                                      style={{
                                        resize: "none",
                                        width: "100%",
                                        boxSizing: "border-box",
                                        padding: 0,
                                        minHeight: 40,
                                        height: 40,
                                      }}
                                      onChange={
                                        readOnly
                                          ? undefined
                                          : (e) =>
                                              handleCellContentChange(
                                                rowIdx,
                                                colIdx,
                                                idx,
                                                e.target.value
                                              )
                                      }
                                    />
                                  )}
                                </div>
                              ))
                            )}
                          </div>
                        </td>
                      );
                    })}
                  {/* 行操作按钮放到每行最后一列 */}
                  {!readOnly && (
                    <td
                      style={{
                        position: "relative",
                        padding: 0,
                        border: "none",
                      }}
                    >
                      <div
                        className="table-ops-row"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "end",
                          height: "100%",
                        }}
                      >
                        <PlusCircleOutlined
                          style={{
                            color: "#0064ff",
                            fontSize: 16,
                            marginBottom: 4,
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            setTableData((prev) => {
                              const newRow = prev[0]
                                ? prev[0].map(() => ({
                                    content: [],
                                    rowSpan: 1,
                                    colSpan: 1,
                                  }))
                                : [
                                    {
                                      content: [],
                                      rowSpan: 1,
                                      colSpan: 1,
                                    },
                                  ];
                              return [
                                ...prev.slice(0, rowIdx + 1),
                                newRow,
                                ...prev.slice(rowIdx + 1),
                              ];
                            });
                          }}
                        />
                        {tableData.length > 1 && (
                          <MinusCircleOutlined
                            style={{
                              color: "#0064ff",
                              fontSize: 16,
                              cursor: "pointer",
                            }}
                            onClick={() => removeRow(rowIdx)}
                          />
                        )}
                      </div>
                    </td>
                  )}
                </tr>
              ))}
          </tbody>
        </table>
        {/* ...existing code... */}
      </div>
      {/* ...existing code... */}
    </div>
  );
};
