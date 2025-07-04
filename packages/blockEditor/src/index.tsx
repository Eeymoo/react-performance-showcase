import React, { useEffect, useRef } from "react";
import BlockEditor from "./components/BlockEditor";
import type { BlockType, BlockEditorRef } from "./components/BlockEditor";
import { Button, Space, Input } from "antd";

const BlockEdiorPage = () => {
  const BlockEditorRef = useRef<BlockEditorRef>(null); // 明确类型
  const [content, setContent] = React.useState(`
[
  {
    "order": 2,
    "type": "table",
    "content": [
      [
        {
          "content": [
            {
              "type": "input",
              "value": "香港联交所"
            }
          ],
          "rowSpan": 1,
          "colSpan": 4
        }
      ],
      [
        {
          "content": [
            {
              "type": "input",
              "value": "方面"
            }
          ],
          "rowSpan": 1,
          "colSpan": 1
        }
      ],
      [
        {
          "content": [
            {
              "type": "input",
              "value": "强度"
            }
          ],
          "rowSpan": 1,
          "colSpan": 1
        }
      ],
      [
        {
          "content": [
            {
              "type": "input",
              "value": "位置"
            }
          ],
          "rowSpan": 1,
          "colSpan": 2
        }
      ],
      [
        {
          "content": [
            {
              "type": "input",
              "value": "管治架构"
            }
          ],
          "rowSpan": 18,
          "colSpan": 1
        }
      ],
      [
        {
          "content": [
            {
              "type": "input",
              "value": "内容"
            }
          ],
          "rowSpan": 1,
          "colSpan": 1
        }
      ],
      [
        {
          "content": [
            {
              "type": "input",
              "value": null
            }
          ],
          "rowSpan": 1,
          "colSpan": 1
        }
      ],
      [
        {
          "content": [
            {
              "type": "input",
              "value": "环境"
            }
          ],
          "rowSpan": 4,
          "colSpan": 1
        }
      ],
      [
        {
          "content": [
            {
              "type": "input",
              "value": null
            }
          ],
          "rowSpan": 4,
          "colSpan": 2
        }
      ],
      [
        {
          "content": [
            {
              "type": "input",
              "value": "策略"
            }
          ],
          "rowSpan": 6,
          "colSpan": 1
        }
      ],
      [
        {
          "content": [
            {
              "type": "input",
              "value": null
            }
          ],
          "rowSpan": 6,
          "colSpan": 2
        }
      ],
      [
        {
          "content": [
            {
              "type": "input",
              "value": "管治"
            }
          ],
          "rowSpan": 7,
          "colSpan": 1
        }
      ],
      [
        {
          "content": [
            {
              "type": "input",
              "value": null
            }
          ],
          "rowSpan": 7,
          "colSpan": 2
        }
      ]
    ],
    "required": true
  }
]

    `);
  const [readOnly, setRadOnly] = React.useState(false);
  const [blocks, setBlocks] = React.useState<BlockType[]>([]);
  useEffect(() => {
    setBlocks(
      BlockEditorRef?.current?.getBlockTypes?.() ?? []
    );
  }, [BlockEditorRef]);

  // 导入数据时，确保每个 block 有 id
  const handleImport = () => {
    try {
      const parsed = JSON.parse(content);
      const withId = parsed.map((block: any) => ({
        id: block.id || `${block.type}_${Date.now()}_${Math.random()}`,
        ...block,
      }));
      BlockEditorRef?.current?.setContent &&
        BlockEditorRef?.current?.setContent(withId);
    } catch (error) {
      console.error("设置内容失败:", error);
    }
  };

  return (
    <>
      <Space direction="vertical" style={{ width: "100%" }}>
        <Space direction="vertical" style={{ width: "100%" }}>
          <Input.TextArea
            style={{ width: "100%" }}
            placeholder="BlockEditor 组件"
            // readOnly
            autoSize={{ minRows: 2, maxRows: 6 }}
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
          <Button onClick={handleImport}>导入数据</Button>
        </Space>
        <Space>
          <Button
            onClick={() => {
              setRadOnly(!readOnly);
            }}
          >
            {readOnly ? "编辑" : "只读"}
          </Button>
          <Button
            onClick={() => {
              console.log(
                BlockEditorRef?.current?.getContent &&
                  BlockEditorRef?.current?.getContent()
              );
            }}
          >
            获取内容
          </Button>
          <Button
            onClick={() => {
              console.log(
                BlockEditorRef?.current?.getDiff &&
                  BlockEditorRef?.current?.getDiff()
              );
            }}
          >
            获取差异
          </Button>
          <Button
            onClick={() => {
              setBlocks(
                BlockEditorRef?.current?.getBlockTypes?.() ?? []
              );
            }}
          >
            获取块
          </Button>
          <Button 
            onClick={() => {
              BlockEditorRef?.current?.validate &&
                BlockEditorRef?.current?.validate().then((isValid: any) => {
                  console.log("校验结果:", isValid);
                });
            }}>
            是否通过校验
          </Button>
          <Button
            onClick={() => {
              BlockEditorRef?.current?.getFormValues &&
                console.log(
                  "Form Values:",
                  BlockEditorRef?.current?.getFormValues()
                );
            }}
          >
            从 Form 获取数据
          </Button>
        </Space>
        <Space>
          {blocks?.map((block) => (
            <Button
              onClick={() => {
                BlockEditorRef?.current?.addContent &&
                  BlockEditorRef?.current?.addContent(block.type);
              }}
              key={block.id ?? block.type} // 优先用 id
            >
              添加 {block.label}
            </Button>
          ))}
        </Space>
        <BlockEditor ref={BlockEditorRef} readOnly={readOnly} />
      </Space>
    </>
  );
};

export default BlockEdiorPage;
