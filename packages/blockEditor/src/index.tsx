import React, { useEffect, useRef } from "react";
import BlockEditor from "./components/BlockEditor";
import type { BlockType, BlockEditorRef } from "./components/BlockEditor";
import { Button, Space, Input } from "antd";

const BlockEdiorPage = () => {
  const BlockEditorRef = useRef<BlockEditorRef>(null); // 明确类型
  const [content, setContent] = React.useState(`
[
  { "order": 0, "type": "title", "content": "默认标题", "required": true },
  {
    "order": 4,
    "type": "paragraph",
    "content": "海外：德国图林根、匈牙利德布勒森",
    "required": false
  },
  {
    "order": 2,
    "type": "table",
    "content": [
      [
        {
          "content": [
            {
              "type": "label",
              "value": "问题"
            },
            {
              "type": "input",
              "value": "以可再生能源和储能为核心，实现固定式化石能源替代，摆脱对火力发电的依赖"
            },
            {
              "type": "label",
              "value": "解决方案"
            },
            {
              "type": "input",
              "value": "以电动化+智能化为核心，实现市场应用的集成创新，为各行各业提供可持续、可普及、可信赖的能量来源，推动区域零碳生态建设及各领域绿色低碳转型"
            }
          ],
          "rowSpan": 1,
          "colSpan": 2
        },
        null,
        {
          "content": [
            {
              "type": "label",
              "value": "问题"
            },
            {
              "type": "input",
              "value": "以可再生能源和储能为核心，实现固定式化石能源替代，摆脱对火力发电的依赖"
            },
            {
              "type": "label",
              "value": "解决方案"
            },
            {
              "type": "input",
              "value": "以电动化+智能化为核心，实现市场应用的集成创新，为各行各业提供可持续、可普及、可信赖的能量来源，推动区域零碳生态建设及各领域绿色低碳转型"
            }
          ]
        }
      ],
      [
        {
          "content": [
            {
              "type": "label",
              "value": "问题"
            },
            {
              "type": "input",
              "value": "以可再生能源和储能为核心，实现固定式化石能源替代，摆脱对火力发电的依赖"
            },
            {
              "type": "label",
              "value": "解决方案"
            },
            {
              "type": "input",
              "value": "以电动化+智能化为核心，实现市场应用的集成创新，为各行各业提供可持续、可普及、可信赖的能量来源，推动区域零碳生态建设及各领域绿色低碳转型"
            }
          ],
          "rowSpan": 2,
          "colSpan": 1
        },
        {
          "content": [
            {
              "type": "label",
              "value": "问题"
            },
            {
              "type": "input",
              "value": "以可再生能源和储能为核心，实现固定式化石能源替代，摆脱对火力发电的依赖"
            },
            {
              "type": "label",
              "value": "解决方案"
            },
            {
              "type": "input",
              "value": "以电动化+智能化为核心，实现市场应用的集成创新，为各行各业提供可持续、可普及、可信赖的能量来源，推动区域零碳生态建设及各领域绿色低碳转型"
            }
          ],
          "rowSpan": 1,
          "colSpan": 2
        },
        null
      ],
      [null, { "content": [] }, { "content": [], "rowSpan": 2, "colSpan": 1 }],
      [{ "content": [], "rowSpan": 1, "colSpan": 2 }, null, null]
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
            readOnly
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
