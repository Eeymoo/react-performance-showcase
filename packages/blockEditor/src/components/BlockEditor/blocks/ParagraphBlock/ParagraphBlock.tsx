import { useEffect, useState } from "react";
import type { BlockPropsType } from "../..";
import { Input, Space } from "antd";

export const ParagraphBlock: React.FC<BlockPropsType> = ({
  content,
  onChange,
  readOnly,
  id,
}) => {
  const [value, setValue] = useState(content.content);

  // 外部 content.content 变化时同步 value
  useEffect(() => {
    setValue(content.content);
  }, [content.content]);

  // 节流更新，仅依赖 value 和 onChange
  useEffect(() => {
    const handler = setTimeout(() => {
      if (content.content === value) {
        return; // 如果内容没有变化，则不更新
      }
      onChange?.({ ...content, content: value });
    }, 300);

    return () => clearTimeout(handler);
  }, [value, onChange, content]);

  return (
    <div className="paragraph-block" id={id}>
      {readOnly ? (
        <p>
          {content.content.split("\n").map((line, idx, arr) => (
            <>
              {line}
              {idx < arr.length - 1 && <br />}
            </>
          ))}
        </p>
      ) : (
        <Space.Compact style={{ width: "100%" }}>
          <Input.TextArea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            variant="filled"
            autoSize={{
              minRows: 2,
              maxRows: Infinity,
            }}
          />
        </Space.Compact>
      )}
    </div>
  );
};
